const descByPath = {
  "/": "홈 화면입니다.",
  "/mypage": "마이페이지 화면입니다.",
  "/login": "로그인 화면입니다.",
};
const render = (desc) => {
  document.querySelector(".main").innerHTML = desc;
};
document.querySelector("nav").addEventListener("click", (e) => {
  const {
    target: {
      className,
      dataset: { path },
    },
  } = e;
  if (path) {
    render(descByPath[path]);
    history.pushState(null, "dsafasdf", path);
  }
});

render(descByPath[window.location.pathname]);
