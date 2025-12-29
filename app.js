const LINK_ACESSO = "https://t.me/DoramaFlix_VIPbot";

function trackLead(nome) {
  try {
    if (typeof fbq === "function") fbq("track", "Lead", { content_name: nome });
  } catch (e) {}
}

function abrirLink(nome) {
  trackLead(nome);
  window.open(LINK_ACESSO, "_blank");
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalBtn = document.getElementById("modalBtn");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

let modalNomeAtual = "";

function abrirModal(imgSrc, nome) {
  modalNomeAtual = nome;
  modalTitle.textContent = nome;
  modalImg.src = imgSrc;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function fecharModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  modalNomeAtual = "";
}

modalBtn.addEventListener("click", () => {
  if (modalNomeAtual) abrirLink(modalNomeAtual);
});

modalClose.addEventListener("click", fecharModal);
modalBackdrop.addEventListener("click", fecharModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const nome = card.getAttribute("data-title") || "Dorama";
    const img = card.getAttribute("data-img") || "";
    if (img) abrirModal(img, nome);
  });
});

const box = document.getElementById("liveNotification");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const frases = [
  (n) => `👀 ${n} pessoas assistindo agora`,
  (n) => `🔥 ${n} maratonando neste momento`,
  (n) => `⚡ ${n} acessos ativos agora`,
  (n) => `🎬 ${n} online na DoramaFlix`
];

function tickNotification() {
  const n = rand(48, 327);
  const msg = frases[rand(0, frases.length - 1)](n);
  box.textContent = msg;
  box.classList.add("show");
  setTimeout(() => box.classList.remove("show"), 4200);
}

setInterval(tickNotification, rand(5500, 9000));
tickNotification();
