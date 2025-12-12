const targetDate = new Date("2026-02-27T00:00:00").getTime(); // nustatoma data, iki kada skaiciuos
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  //jei laikas baigesi
  if (distance <= 0) {
    countdownEl.innerHTML = "🎉 Egzaminai prasidėjo! Sėkmės! 🎉";
    countdownEl.classList.add('pulse');
    clearInterval(interval);
    return;
  }

  //cia boom boom skaiciavimai
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //cia bbz ka daro 
  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  countdownEl.classList.remove('pulse');
  countdownEl.offsetWidth;
  countdownEl.classList.add('pulse');

  setTimeout(() => countdownEl.classList.remove('pulse'), 420);
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);