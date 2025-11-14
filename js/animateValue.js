function animateValue(start, end, duration, element) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;

    const progress = timestamp - startTime;
    const value = Math.min(start + (end - start) * (progress / duration), end);

    element.textContent = Math.floor(value).toLocaleString() + "₽";

    if (value < end) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const target = document.getElementById("earned-block");
const earnedEl = document.getElementById("earned");
const progressEl = document.getElementById("earned-progress");

let started = false;
const MIN = 350000;
const MAX = 600000;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;

        const final = Math.floor(Math.random() * (MAX - MIN) + MIN);

        animateValue(0, final, 2000, earnedEl);

        const percent = final / 1000000;
        progressEl.value = final;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(target);

console.log(animateValue);
