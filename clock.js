function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero if needed
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  document.getElementById('clock').textContent =
    `${hours}:${minutes}:${seconds}`;
}

// Run immediately, then every second
updateClock();
setInterval(updateClock, 1000);
