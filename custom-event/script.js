// // const app = document.querySelector("#app");

import { bind, dispatch } from "./eventFactory.js";

class B {
  constructor() {
    this.$app = document.querySelector("#app1");
    this.#bindEventHandler();
  }
  #bindEventHandler() {
    this.$app.addEventListener("click", (e) => dispatch("clickHandler"));
  }
}
class A {
  customEvent = null;
  constructor() {
    this.#bindEventHandler();
  }
  #onClickHandler = () => {
    // 비즈니스
    // 로직 군..
    console.log("hi");
  };

  #bindEventHandler() {
    bind("clickHandler", this.#onClickHandler);
  }
}

const a = new A();
const b = new B();
