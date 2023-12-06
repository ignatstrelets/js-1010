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
}

function send_query() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var x = parseInt(document.getElementById("x").value);
  var result = document.getElementById('result').innerHTML;
  if (result == 'Верно'){
    result = true
  } else {
    result = false
  }
  fetch('https://google.com?condition=x_in_range_a_b&a=' + a + '&b=' + b + '&x=' + x + '&result=' + result)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));
  console.log("ok")
  var msg = document.getElementById("message")
  msg.innerHTML = 'Отправлено'
}


