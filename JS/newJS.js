function nuke() {
  document.getElementById("everything").style.display = "none";
  document.getElementById("postNuke").innerHTML = "Nice one idiot";
  postNuke.style.display = "block";
}
//math
function multiply(n) {
  let x = +document.getElementById("number").innerHTML;
  let y = x * n;
  document.getElementById("number").innerHTML = y;
}
function addition(n) {
  let x = +document.getElementById("number").innerHTML;
  x += n;
  document.getElementById("number").innerHTML = x;
}
