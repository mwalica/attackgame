ATTACK_VALUE = 10;
let attackCpu = 10;

const progressBarPlayer = document.querySelector("#progress-bar-player");
const progressBarCpu = document.querySelector("#progress-bar-cpu");
const btnAttack = document.querySelector("#btn-attack");
const btnClose = document.querySelector("#btn-close");

const backdrop = document.querySelector(".backdrop");
const popupContent = document.createElement("div");

const maxValue = 100;
const startValue = 100;

progressBarPlayer.max = maxValue;
progressBarPlayer.value = startValue;

progressBarCpu.max = maxValue;
progressBarCpu.value = startValue;

const renderAlert = winer => {
  popupContent.className = "popup-content";
  popupContent.innerHTML = winer;
  const popup = document.querySelector(".popup");
  popup.prepend(popupContent);
};

const closeAlert = () => {
  progressBarPlayer.value = startValue;
  progressBarCpu.value = startValue;
  backdrop.style.display = "none";
};

const attackFunc = (player, cpu) => {
  console.log(cpu);
  const damageCpu = Math.random() * player;
  const damagePlayer = Math.random() * cpu;
  progressBarPlayer.value -= damagePlayer;
  progressBarCpu.value -= damageCpu;

  if (progressBarPlayer.value <= 0 && progressBarCpu.value > 0) {
    renderAlert("Computer win!");
    backdrop.style.display = "block";
  } else if (progressBarCpu.value <= 0 && progressBarPlayer.value > 0) {
    renderAlert("You win!");
    backdrop.style.display = "block";
  } else if (progressBarCpu.value <= 0 && progressBarPlayer.value <= 0) {
    renderAlert("Draw - no winner");
    backdrop.style.display = "block";
  }
};

console.log(progressBarPlayer.value);

btnAttack.addEventListener("click", () => attackFunc(ATTACK_VALUE, attackCpu));
btnClose.addEventListener("click", closeAlert);
