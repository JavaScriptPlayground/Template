# Template
Template for Frontend development. Build a web page using [SolidJS](https://solidjs.com) and [Deno](https://deno.land).

[![Run Linter](https://github.com/JavaScriptPlayground/Template/actions/workflows/lint.yml/badge.svg)](https://github.com/JavaScriptPlayground/Template/actions/workflows/lint.yml)
[![Run Unit Tests](https://github.com/JavaScriptPlayground/Template/actions/workflows/test.yml/badge.svg)](https://github.com/JavaScriptPlayground/Template/actions/workflows/test.yml)
[![Deploy GitHub Pages](https://github.com/JavaScriptPlayground/Template/actions/workflows/deployment.yml/badge.svg)](https://github.com/JavaScriptPlayground/Template/actions/workflows/deployment.yml)

## Overview

- `.gitignore` Git ignore file.
- `deno.json` [Deno configuration](https://docs.deno.com/runtime/manual/getting_started/configuration_file) file. Only
  change this if you know what you are doing.
- `LICENSE` License file.
- `README.md` This file.
- `.github` [GitHub configuration](https://www.freecodecamp.org/news/how-to-use-the-dot-github-repository/) directory.
- `config` Project specific config files (not part of sourcecode).
  - `deno.lock` Lock file for all dependencies.
  - `import_map.json` [Import map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) for all imports.
  - `build` Build configuration files.
    - `index.ts` Build configuration for [esbuild](https://esbuild.github.io). Only change this if you know what you are doing.
  - `types` Project type declarations.
    - `...` Declaration.
- `doc` Documentation for the page.
  - `...` Doc.
- `src` All sourcecode.
  - `client` Sourcecode for the client.
    - `index.html` Page itself.
    - `_assets` Page assets like images, vector graphics, etc.
      - `favicon.svg` Favicon for the page
      - `...` Assets.
    - `_components` Page components/elements.
      - `...` Components/Elements.
    - `_scripts` Page scripts. This directory must have a index.ts file as entry point.
      - `index.ts` Page script entry file.
      - `...` Scripts.
    - `_styles` Page styles. This directory must have a index.scss file as entry point.
      - `index.scss` Page style entry file.
      - `...` Styles.
    - `...` A subpage as a folder containing the same folder structure as `client`. `...` can have any name. It is
      recommended to not start with a `_` as these directories are reserved for the page itself.
  - `server` Sourcecode for the server.
    - `...` Server files.
- `test` Tests (no unit tests).
  - `e_to_e` End to End tests for the page.

## Usage

### Tasks

Use `deno task <name_of_the_task>`:

- `build` Build the page. *(recommended)*
- `build:watch` Build the page with active file watcher. *(recommended)*
- `build:dev` Build the page for development (without optimization like minification).
- `build:dev:watch` Build the page for development (without optimization like minification) with active file watcher.
- `serve` *Not implemented yet (currently does nothing)*
- `lint` Lint the sourcecode
- `test` Test your sourcecode (all `.test.ts` file will be checked). A junit report gets generated to `./reports/report.xml`

## License

GPL Version 3.0 Copyright (C) 2024 Max
