/// <reference lib="deno.ns" />
import * as esbuild from '@esbuild';
import { sassPlugin as esbuildPluginSass } from '@esbuild-plugin-sass';
import { solidPlugin as esbuildPluginSolidJs } from '@esbuild-plugin-solid-js';
import { green } from '@std/fmt/colors';
import { parseArgs } from '@std/cli/parse-args';

import importMap from './import_map.json' with {type: 'json'}

const args = parseArgs<{
  watch: boolean | undefined,
  develope: boolean | undefined,
  logLevel: esbuild.LogLevel
}>(Deno.args);

const copyConfig : esbuild.BuildOptions = {
  allowOverwrite: true,
  logLevel: args.logLevel ?? 'info',
  color: true,
  outdir: './dist',
  loader: {
    '.html': 'copy',
    '.svg': 'copy',
    '.png': 'copy',
    '.jpg': 'copy',
    '.ico': 'copy',
  },
  entryPoints: [
    './src/**/index.html',
    './src/**/_assets/**'
  ]
}

const filesConfig : esbuild.BuildOptions = {
  allowOverwrite: true,
  logLevel: args.logLevel ?? 'info',
  legalComments: args.develope ? 'inline' : 'none',
  color: true,
  minify: !args.develope ?? true,
  outdir: './dist',
  bundle: true,
  format: 'esm',
  target: 'es6',
  sourcemap: true,
  sourcesContent: true,
  tsconfig: './deno.json',
  entryNames: '[dir]/bundle.min',
  entryPoints: [
    './src/client/**/index.tsx',
    './src/client/**/index.scss',
  ],
  supported: {
    'import-attributes': true,
    'nesting': true
  },
  plugins: [
    esbuildPluginSass(),
    esbuildPluginSolidJs({solid: {moduleName: '@solid-js/web'}})
  ],
  alias: importMap.imports,
}

console.log('Build process started.');

const timestampNow = Date.now();

if (args.watch) {
  esbuild.context(copyConfig).then((context) => context.watch());
  esbuild.context(filesConfig).then((context) => context.watch());
} else {
  Promise.all([
    esbuild.build(copyConfig),
    esbuild.build(filesConfig),
  ]).then(() => {
    esbuild.stop();
    console.log(green(`esbuild ${esbuild.version} finished build in ${(Date.now() - timestampNow).toString()}ms.`));
  })
}
