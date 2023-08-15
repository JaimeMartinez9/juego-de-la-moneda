
const coin = document.getElementById("coin");
const flipButton = document.getElementById("flipButton");
const resetButton = document.getElementById("resetButton");
const headsCountSpan = document.getElementById("headsCount");
const tailsCountSpan = document.getElementById("tailsCount");

let headsCount = 0;
let tailsCount = 0;

flipButton.addEventListener("click", () => {
  coin.classList.add("spin");

  setTimeout(() => {
    const result = Math.random() < 0.5 ? "heads" : "tails";
    updateScore(result);
    updateCoin(result);
    coin.classList.remove("spin");
  }, 1500);
});

resetButton.addEventListener("click", () => {
  headsCount = 0;
  tailsCount = 0;
  updateScore();
  updateCoin("reset");
});

function updateScore(result) {
  if (result === "heads") {
    headsCount++;
  } else if (result === "tails") {
    tailsCount++;
  } else if (result === "reset") {
    headsCount = 0;
    tailsCount = 0;
  }

  headsCountSpan.textContent = headsCount;
  tailsCountSpan.textContent = tailsCount;
}

function updateCoin(result) {
  const sides = coin.querySelectorAll(".side");
  sides[0].classList.remove("front", "back");
  sides[1].classList.remove("front", "back");

  if (result === "heads") {
    sides[0].classList.add("front");
    sides[1].classList.add("back");
  } else {
    sides[0].classList.add("back");
    sides[1].classList.add("front");
  }
}
