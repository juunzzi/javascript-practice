/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var descByPath = {
  "/": "홈 화면입니다.",
  "/mypage": "마이페이지 화면입니다.",
  "/login": "로그인 화면입니다."
};

var render = function render(desc) {
  document.querySelector(".main").innerHTML = desc;
};

document.querySelector("nav").addEventListener("click", function (e) {
  var _e$target = e.target,
      className = _e$target.className,
      path = _e$target.dataset.path;

  if (path) {
    render(descByPath[path]);
    history.pushState(null, "dsafasdf", path);
  }
});
render(descByPath[window.location.pathname]);
/******/ })()
;
//# sourceMappingURL=bundle.js.map