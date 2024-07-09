function show() {
  document.getElementById("text1").style.display = "none";
  document.getElementById("bttn").style.display = "none";
  document.getElementById("playerID").src = "../Resources/players.png";
  playerID.classList.add("expand");
  playerID.style = "heigt:900px;width:900px;";
  document.getElementById("playerContainer").classList.add("rotate");
  document.getElementById("text2").innerHTML = "Whoever Move First is Gay.";
  text2.classList.add("expand");
  document.getElementById("reload").style.display = "";
}
