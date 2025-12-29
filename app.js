const LINK_ACESSO="https://t.me/DoramaFlix_VIPbot";

function acessar(nome){
try{fbq('track','Lead',{content_name:nome})}catch(e){}
window.open(LINK_ACESSO,'_blank')
}

const mensagens=[
"👀 Pessoas assistindo agora",
"🔥 Doramas em alta",
"⚡ Acesso liberado",
"🎬 Maratona acontecendo"
];

const box=document.getElementById("liveNotification");
let i=0;

setInterval(()=>{
box.textContent=mensagens[i%mensagens.length];
box.classList.add("show");
setTimeout(()=>box.classList.remove("show"),4000);
i++
},6000);
