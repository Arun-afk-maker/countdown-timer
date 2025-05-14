let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); // reset any previous countdown

  const targetDate = new Date(document.getElementById("datetime-picker").value);
  const output = document.getElementById("output");

  if (isNaN(targetDate)) {
    output.textContent = "Please enter a valid date.";
    return;
  }

  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      output.textContent = "⏰ Time's up!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    output.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
