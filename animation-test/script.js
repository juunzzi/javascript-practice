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

class hi {
  constructor() {
    this.x = 1;
  }
  get x() {
    return x + 1;
  }
}
const hhh = new hi();
hhh.x = 20;
console.log(hhh.x);
