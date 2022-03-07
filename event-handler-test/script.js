// class A {
//   #app = null;
//   constructor() {
//     this.#app = document.querySelector("#app");
//     this.handler(); // this 는 a 객체
//     this.#app.addEventListener("click", this.handler); // this는 #app element
//   }

//   handler() {
//     console.log(this);
//   }
// }
// new A();
function onClickHandler() {
  console.log(this);
}
const button = {
  click: null,
  addEventListener(type, handler) {
    this[type] = handler;
  },
};
button.addEventListener("click", onClickHandler);

button.click(); // 호출하는 객체가 button 이기 때문에 this는 button을 가리킨다.

onClickHandler(); // 전역 객체
