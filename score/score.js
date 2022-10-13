function contar() {
  let number1 = document.getElementById("start");
  let number2 = document.getElementById("end");
  let pass = document.getElementById("pass");
  let res = document.getElementById("res");

  if (
    number1.value.length == 0 ||
    number2.value.length == 0 ||
    pass.value.length == 0
  ) {
    alert("[ERRO] Preencha todos os campos!");
    res.innerHTML = `Impossível contar! \u{1F613}`;
  } else {
    res.innerHTML = "Contando: <br> ";

    let i = Number(number1.value);
    let f = Number(number2.value);
    let p = Number(pass.value);

    if (p <= 0) {
      window.alert("Passo inválido! Reconsiderando passo como 1...");
      p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} -`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} -`;
      }
    }

    res.innerHTML += `\u{1F3C1}`;
  }
}

function Clear() {
  let number1 = document.getElementById("start");
  let number2 = document.getElementById("end");
  let pass = document.getElementById("pass");
  let res = document.getElementById("res");

  number1.value = "";
  number2.value = "";
  pass.value = "";
  res.innerHTML = "";
}
