function countdown(seconds) {
  let remaining = seconds;

  const timer = setInterval(() => {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;

    const formattedTime =
      `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    console.log(formattedTime);

    if (remaining === 0) {
      clearInterval(timer);
      console.log("Time's up!");
    }

    remaining--;
  }, 1000);
}

// Example usage:
countdown(10);
