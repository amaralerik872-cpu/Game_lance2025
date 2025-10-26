// ====== CONTAGEM REGRESSIVA ======
document.querySelectorAll('.countdown').forEach(el => {
  const targetDate = new Date(el.dataset.date).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      el.innerHTML = "Já lançado ✅";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    el.innerHTML = `${days}d ${hours}h restantes`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000 * 60 * 60);
});

// ====== ANIMAÇÃO DE REVELAR AO ROLAR ======
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
reveal(); // Executa no carregamento inicial
