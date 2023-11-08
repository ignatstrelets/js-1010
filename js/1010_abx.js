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
  fetch('https://google.com?a=' + a + '?b=' + b + '?x=' + x) .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.error(error)); 
}
