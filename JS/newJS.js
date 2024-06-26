function nuke() {
  document.getElementById("everything").style.display = "none";
  document.getElementById("postNuke").innerHTML = "Nice one idiot";
}
//math
function letsMultiply() {
  let x = document.getElementById("number").innerHTML;
  let y = x * 2;
  document.getElementById("number").innerHTML = y;
}
function letsDivide() {
  let x = document.getElementById("number").innerHTML;
  let y = x / 2;
  document.getElementById("number").innerHTML = y;
}
function plusOne() {
  let x = document.getElementById("number").innerHTML;
  x++;
  document.getElementById("number").innerHTML = x;
}
function minusOne() {
  let x = document.getElementById("number").innerHTML;
  x--;
  document.getElementById("number").innerHTML = x;
}
