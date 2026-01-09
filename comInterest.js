function calculateInterest() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value) / 100;
  const time = Number(document.getElementById("time").value);
  const times = Number(document.getElementById("times").value);

  if (principal <= 0 || rate <= 0 || time <= 0 || times <= 0) {
    document.getElementById("result").textContent =
      "Please enter valid positive values.";
    return;
  }

  const amount = principal * Math.pow(1 + rate / times, times * time);
  const interest = amount - principal;

  document.getElementById("result").textContent =
    `Total Amount: ${amount.toFixed(2)} | Interest: ${interest.toFixed(2)}`;
}
