const LINK_ACESSO = "https://t.me/DoramaFlix_VIPbot";

function acessar(nomeDorama) {
  try {
    if (typeof fbq === "function") {
      fbq("track", "Lead", { content_name: nomeDorama });
    }
  } catch (e) {}

  window.open(LINK_ACESSO, "_blank");
}

/* NOTIFICAÇÕES DINÂMICAS (ALEATÓRIO REAL) */
const mensagens = [
  "👀 {n} pessoas assistindo agora",
  "🔥 {n} fãs maratonando neste momento",
  "💬 {n} pessoas online agora",
  "🎬 {n} usuários assistindo agora",
  "⚡ {n} acessos ativos agora"
];

const box = document.getElementById("liveNotification");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarNotificacao() {
  if (!box) return;

  const n = rand(48, 327);
  const msg = mensagens[rand(0, mensagens.length - 1)].replace("{n}", n);

  box.textContent = msg;
  box.classList.add("show");

  setTimeout(() => {
    box.classList.remove("show");
  }, 4200);
}

function agendarProxima() {
  mostrarNotificacao();
  const proximoEmMs = rand(5000, 9000);
  setTimeout(agendarProxima, proximoEmMs);
}

/* start */
setTimeout(() => {
  agendarProxima();
}, rand(1200, 2500));
