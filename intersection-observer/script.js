const childsTemplate = `
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
`;

window.onload = () => {
  const parent = document.querySelector("#parent");
  const childs = [...document.querySelectorAll(".child")];

  // Observe Option이다.
  const observeOpt = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const callback = (en, obs) => {
    // 관찰 요소가 변화가 생기면 -> 수행된다.
    en.forEach((entry) => {
      if (entry.isIntersecting) {
        parent.insertAdjacentHTML("beforeend", childsTemplate);
        // 기존에 있는 거 옵저브 해제

        obs.unobserve(entry.target);
        // 마지막 요소를 옵저브 해야함
        const childs = [...document.querySelectorAll(".child")];

        obs.observe(childs[childs.length - 1]);
      }
    });
  };
  const io = new IntersectionObserver(callback, observeOpt);
  //   // 관찰할 대상을 지정하여 관찰한다.
  //   childs.forEach((child) => {
  //     io.observe(child);
  //   });
  io.observe(childs[childs.length - 1]);
};

// 1. 어떤 요소를 감시할거지?

// 마지막 비디오 돔 video-dom
