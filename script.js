let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

function saveAccounts() {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function findAccount(accNum) {
  return accounts.find(acc => acc.accNum === accNum);
}

function openAccount() {
  const accNum = document.getElementById("accNum").value;
  const name = document.getElementById("name").value;
  const balance = parseFloat(document.getElementById("balance").value);

  if (findAccount(accNum)) {
    alert("Account already exists!");
    return;
  }

  accounts.push({ accNum, name, balance });
  saveAccounts();
  alert("Account created successfully!");
}

function deposit() {
  const accNum = document.getElementById("accNum").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const acc = findAccount(accNum);

  if (!acc) return alert("Account not found!");
  acc.balance += amount;
  saveAccounts();
  alert("Deposited successfully!");
}

function withdraw() {
  const accNum = document.getElementById("accNum").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const acc = findAccount(accNum);

  if (!acc) return alert("Account not found!");
  if (acc.balance < amount) return alert("Insufficient balance!");
  acc.balance -= amount;
  saveAccounts();
  alert("Withdrawn successfully!");
}

function enquiry() {
  const accNum = document.getElementById("accNum").value;
  const acc = findAccount(accNum);
  const resultDiv = document.getElementById("result");

  if (!acc) {
    resultDiv.innerHTML = "<p>Account not found!</p>";
  } else {
    resultDiv.innerHTML = `<p>Name: ${acc.name}</p><p>Balance: ₹${acc.balance}</p>`;
  }
}
