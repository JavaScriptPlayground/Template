import { render } from "@solid-js/web";
import { Counter } from '../_components/counter.tsx';

// deno-lint-ignore no-non-null-assertion no-undef
render(() => <Counter />, document.getElementById("app")!);
