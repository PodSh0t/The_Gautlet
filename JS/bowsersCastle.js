function button() {
  var audio = document.getElementById("plin");
  audio.volume = 0.8;
  document.getElementById("nextBtn").classList.add("gone");
  document.getElementById("gate").classList.add("goUppy");
  setTimeout(textGo, 27000);
  setTimeout(enter, 6000);
  setTimeout(makeGone, 23000);
}
//after 6s makes gate gone
function enter() {
  document.getElementById("gate").classList.add("gone");
  document.getElementById("foregroundContainer").classList.add("expand");
}
// after 23s makes foreground gone
function makeGone() {
  document.getElementById("foregroundContainer").classList.add("gone");
}
// makes text appear when the beat drop 27s plus 4s fade
function textGo() {
  document.getElementById("text1").classList.add("fadeIn");
  text1.classList.remove("gone");
}
