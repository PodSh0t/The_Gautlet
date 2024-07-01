function show() {
    document.getElementById("playerID")
        .src = "../Resources/players.png";
        playerID.classList.add("rotate");
        playerID.style = "heigt:900px;width:900px;";
    document.getElementById("playerContainer")
        .classList.add("expand");
    document.getElementById("text2")
        .innerHTML = "Whoever Move First is Gay.";
        text2.style = "color:rgb(255, 255, 255)";
    document.getElementById("text1")
        .style.display = "none";
    document.getElementById("bttn")
        .style.display = "none";
};