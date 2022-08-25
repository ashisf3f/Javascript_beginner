function addNum() {
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let add = num1 + num2;
  console.log(add);
  document.getElementById("ans").innerHTML = add;
}
function subNum() {
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let sub = num1 - num2;
  console.log(sub);
  document.getElementById("ans").innerHTML = sub;
}
function divNum() {
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let div = num1 / num2;
  console.log(div);
  document.getElementById("ans").innerHTML = div;
}
function mulNum() {
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let mul = num1 * num2;
  console.log(mul);
  document.getElementById("ans").innerHTML = mul;
}
