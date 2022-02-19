function rAF() {
  const box = document.querySelector(".box");

  const rotateAnimation = (progress, start, node, during) => {
    if (progress >= during) {
      return;
    }

    node.style.transform = `rotate(${progress / 100}deg)`;
    requestAnimationFrame((timestamp) =>
      rotateAnimation(timestamp - start, start, node, during)
    );
  };

  requestAnimationFrame((timestamp) =>
    rotateAnimation(0, timestamp, box, 5000)
  );
}

const box = document.querySelector(".box");
function setTimer(timestamp, start) {
  const progress = timestamp - start;
  setTimeout(() => {
    box.style.transform = `rotate(${progress / 10}deg)`;
    setTimer(new Date().getTime(), start);
  }, 16);
}
setTimer(new Date().getTime(), 0);
// rAF();
