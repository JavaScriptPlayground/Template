import { render } from "@solid-js/web";
import { createEffect, createSignal, type JSX } from "@solid-js";

function Counter() : JSX.Element {
  const [count, setCount] = createSignal(1);
  function increment() : void {setCount(count => count + 1)};

  createEffect(() => {
    console.log("Count has changed to:", count());
  });

  return (
    <button type="button" onClick={increment}>
      {count()}
    </button>
  );
}

// deno-lint-ignore no-non-null-assertion no-undef
render(() => <Counter />, document.getElementById("app")!);
