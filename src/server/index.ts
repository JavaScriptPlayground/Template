import { serveDir } from "@std/http/file-server";
import { parseArgs } from "@std/cli/parse-args";

const args = parseArgs<{
  develope: boolean | undefined,
  port: number
}>(Deno.args);

Deno.serve({port: args.port ?? 80}, (req) => {
  return serveDir(req, {
    fsRoot: './dist/',
    showDotfiles: true,
    quiet: !args.develope,
    showDirListing: args.develope
  });
});
