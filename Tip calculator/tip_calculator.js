document.getElementById("calculate").addEventListener("click", function () {
  const billAmount = parseFloat(document.getElementById("bill-amount").value);
  const tipPercentage = parseFloat(
    document.getElementById("tip-percentage").value
  );

  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }

  const tipAmount = billAmount * tipPercentage;
  const totalBill = billAmount + tipAmount;

  document.getElementById(
    "tip-amount"
  ).textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
  document.getElementById(
    "total-bill"
  ).textContent = `Total Bill: $${totalBill.toFixed(2)}`;
});
