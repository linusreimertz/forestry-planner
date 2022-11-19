import "./app.postcss";
import App from "./App.svelte";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) =>
      console.log(
        "service worker registered",
        reg
      )
    )
    .catch((err) =>
      console.log(
        "service worker not registered",
        err
      )
    );
}

const app = new App({
  target: document.getElementById("app")
});

export default app;
