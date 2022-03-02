// const app = document.querySelector("#app");

// const event = new CustomEvent("animal", {
//   detail: {
//     data: 1,
//   },
// });

// app.addEventListener("animal", (e) => {
//   console.log(e.detail.data);
// });

// app.addEventListener("click", () => {
//   app.dispatchEvent(event);
// });

const app1 = document.querySelector("#app1");
const app2 = document.querySelector("#app2");

const app1event = new CustomEvent("event");

app1.addEventListener("event", () => {
  console.log("app1");
});

app2.addEventListener("click", () => {
  app1.dispatchEvent(app1event);
});
