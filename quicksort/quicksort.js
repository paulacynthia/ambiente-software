let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");

let valores = [];

function isNumber(n) {
  if (Number(n) >= 0 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function Adicionar() {
  if (isNumber(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor inválido ou já encontrado na lista!");
  }
  num.value = "";
  num.focus();
}

function Clear() {
  let num = document.querySelector("input#fnum");
  let lista = document.querySelector("select#flista");

  num.innerHTML = "";
  lista.innerHTML = "";
  res.innerHTML = "";
}

function QuickSort() {
  var items = valores;
  function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }
  var sortedArray = quickSort(items, 0, items.length - 1);

  res.innerHTML += `<p>Os valores ordenados são: ${sortedArray}</p>`;
}
