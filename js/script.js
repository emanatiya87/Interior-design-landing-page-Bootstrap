AOS.init();
let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
let counter3 = document.getElementById("counter3");
function counter(counter, number) {
  let start = 0;
  let intervalId = setInterval(function () {
    counter.innerHTML = start;
    start += 10;

    if (start > number) {
      clearInterval(intervalId);
    }
  }, 20);
}
counter(counter1, 400);
counter(counter2, 600);
counter(counter3, 100);
// loading page
let loading = document.getElementById("loading");
window.addEventListener("load", function () {
  setTimeout(function () {
    loading.style.display = "none";
  }, 1000);
});
