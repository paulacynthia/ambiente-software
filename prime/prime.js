function Prime() {
  let numberFirst = document.getElementById("number-one");
  let res = document.getElementById("res");

  let isPrime = true;

  if (numberFirst.value < 0) {
    alert("Por favor, insira um número positivo.");
  } else {
    let number = Number(numberFirst.value);
    res.innerHTML = "";

    for (let j = 2; j < number; j++) {
      res.innerHTML = "";

      if (number % j == 0) {
        res.innerHTML += number + " não é um número primo";
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      res.innerHTML = "";
      res.innerHTML += number + " é um número primo";
      isPrime = true;
    }
  }
}

function Clear() {
  let numberFirst = document.getElementById("number-one");
  let res = document.getElementById("res");
  numberFirst.value = "";
  res.innerHTML = "";
}
