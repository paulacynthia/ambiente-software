function GreatestCommonDivisor() {
  let numberFirst = document.getElementById("number-one");
  let numberSecond = document.getElementById("number-two");
  let res = document.getElementById("res");

  let numberOne = Number(numberFirst.value);
  let numberTwo = Number(numberSecond.value);

  let bigger;
  let GCD;

  GCD = 1;

  let valueFinalOne = numberOne;
  let valueFinalTwo = numberTwo;

  bigger = numberOne;

  if (numberOne > numberTwo) {
    bigger = numberOne;
  } else if (numberOne < numberTwo) {
    bigger = numberTwo;
  } else {
    res.innerHTML += `Os números são iguais! <br><br>`;
  }

  for (let i = 2; i <= bigger; i++) {
    res.innerHTML = "";

    while (numberOne % i == 0 && numberTwo % i == 0) {
      numberOne = numberOne / i;
      numberTwo = numberTwo / i;

      GCD = GCD * i;
    }
  }

  res.innerHTML += `MDC (${valueFinalOne},${valueFinalTwo}) = ${GCD}`;
}

function Clear() {
  let numberFirst = document.getElementById("number-one");
  let numberSecond = document.getElementById("number-two");
  let res = document.getElementById("res");

  numberFirst.value = "";
  numberSecond.value = "";
  res.innerHTML = "";
}
