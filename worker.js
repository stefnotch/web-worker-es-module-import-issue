// Incorrect import, should throw an error
// But Firefox doesn't show an error in the console
import { fuu } from "./test.js";
console.log(fuu());

globalThis.onmessage = function (e) {
  console.log("Worker got message", e.data);
  globalThis.postMessage("Hi");
};
