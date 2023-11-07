function verify_abx() {
  var result = document.getElementById('result');
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var x = parseInt(document.getElementById("x").value);
  console.log(a,b,x)
  if ((x >= a) && (x <= b)) {
    result.innerHTML = 'Верно';
  } else {
    result.innerHTML = 'Неверно';
  }
  //Здесь может быть код для отправки значений переменных a, b, x
  //на удалённый сервер заданным способом.
}
