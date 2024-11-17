const form = document.getElementById("levelForm");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const levelTitle = document.getElementById("levelTitle");
const levelImage = document.getElementById("levelImage");
const levelMessage = document.getElementById("levelMessage");

const levels = [
  { name: "Ferro", xpMin: 0, xpMax: 1000, image: "/assets/images/iron.png", message: "Você está começando a jornada!" },
  { name: "Bronze", xpMin: 1001, xpMax: 2000, image: "/assets/images/bronze.png", message: "Continue evoluindo!" },
  { name: "Prata", xpMin: 2001, xpMax: 5000, image: "/assets/images/silver.png", message: "Você está brilhando!" },
  { name: "Ouro", xpMin: 5001, xpMax: 7000, image: "/assets/images/gold.png", message: "O caminho é dourado!" },
  { name: "Platina", xpMin: 7001, xpMax: 8000, image: "/assets/images/platinum.png", message: "Quase lá!" },
  { name: "Ascendente", xpMin: 8001, xpMax: 9000, image: "/assets/images/ascendente.png", message: "Você está no topo!" },
  { name: "Imortal", xpMin: 9001, xpMax: 10000, image: "/assets/images/imortal.png", message: "A eternidade é sua!" },
  { name: "Radiante", xpMin: 10001, xpMax: Infinity, image: "/assets/images/radiant.png", message: "Você alcançou a perfeição!" },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const xp = parseInt(document.getElementById("xp").value, 10);
  const name = document.getElementById("name").value;

  const level = levels.find(l => xp >= l.xpMin && xp <= l.xpMax);

  if (level) {
    levelTitle.textContent = `${name}, seu nível é: ${level.name}`;
    levelImage.src = level.image;
    levelMessage.textContent = level.message;
    popup.classList.remove("hidden");
  }
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});