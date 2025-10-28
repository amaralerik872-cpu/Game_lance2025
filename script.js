// ===============================
// 🎮 Game lance 2025 - Script JS
// Autor: Erik do Amaral da Silva
// ===============================

// Mostrar o botão "Voltar ao topo" quando o usuário rolar a página
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Função para rolar suavemente até o topo
document.getElementById("btnTopo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===============================
// 🌙 Alternar entre modo escuro e claro
// ===============================
const toggleTema = document.getElementById("toggleTema");

// Verifica se há um tema salvo no navegador
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark-mode");
  toggleTema.textContent = "☀️";
}

// Ao clicar no botão, troca o tema
toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleTema.textContent = "☀️";
    localStorage.setItem("tema", "dark");
  } else {
    toggleTema.textContent = "🌙";
    localStorage.setItem("tema", "light");
  }
});

// ===============================
// ✨ Efeito suave de entrada dos cards
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
