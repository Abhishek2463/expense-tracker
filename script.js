let balance = 0;
const list = document.getElementById('list');
const balanceEl = document.getElementById('balance');

function addTransaction(type) {
  const desc = document.getElementById('desc').value.trim();
  const amountInput = document.getElementById('amount');
  const amount = parseFloat(amountInput.value);

  if (!desc || isNaN(amount)) {
    alert("Please enter a valid description and amount.");
    return;
  }

  const li = document.createElement('li');
  li.classList.add(type);
  li.innerText = `${desc}: ₹${amount}`;
  list.appendChild(li);

  balance += (type === 'income' ? amount : -amount);
  balanceEl.innerText = `Balance: ₹${balance.toFixed(2)}`;

  // Reset input fields
  document.getElementById('desc').value = '';
  amountInput.value = '';
}
