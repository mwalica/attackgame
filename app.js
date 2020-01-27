ATTACK_VALUE = 10;
let attackCpu = 10;

const progressBarPlayer = document.querySelector("#progress-bar-player");
const progressBarCpu = document.querySelector("#progress-bar-cpu");
const btnAttack = document.querySelector("#btn-attack");
const btnEasy = document.querySelector("#btn-easy");
const btnNormal = document.querySelector("#btn-normal");
const btnHard = document.querySelector("#btn-hard");

const backdrop = document.querySelector(".backdrop");

const maxValue = 100;
const startValue = 100;

progressBarPlayer.max = maxValue;
progressBarPlayer.value = startValue;

progressBarCpu.max = maxValue;
progressBarCpu.value = startValue;

const renderAlert = winer => {
  const popupContent = document.createElement("div");
  popupContent.className = "popup-content";
  popupContent.innerHTML = `${winer} zwyciężył`;
  const popup = document.querySelector(".popup");
  popup.prepend(popupContent);
};

const attackFunc = (player, cpu) => {
  console.log(cpu);
  const damageCpu = Math.random() * player;
  const damagePlayer = Math.random() * cpu;
  progressBarPlayer.value -= damagePlayer;
  progressBarCpu.value -= damageCpu;

  if (progressBarPlayer.value <= 0 && progressBarCpu.value > 0) {
    renderAlert("Komputer");
    backdrop.style.display = "block";
  } else if(progressBarCpu.value <= 0 && progressBarPlayer.value > 0) {
    renderAlert("Gracz");
    backdrop.style.display = "block";
  } else if(progressBarCpu.value <= 0 && progressBarPlayer.value <= 0){
    renderAlert("Remis");
    backdrop.style.display = "block";
  }
};

console.log(progressBarPlayer.value);

btnAttack.addEventListener("click", () => attackFunc(ATTACK_VALUE, attackCpu));
