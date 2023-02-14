const APP = document.getElementById("app");
const TILESCOUNT = 28;
const COLORS = ["blue", "red"];

addTiles();
function addTiles() {
  for (let i = 0; i < TILESCOUNT; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    APP.appendChild(tile);
  }
  setInterval(changeTilesColor, 100);
}

var i = 0;
function changeTilesColor() {
  const allTiles =
    document.querySelectorAll(".tile")[rndInt(0, TILESCOUNT - 1)];
  allTiles.style.background = COLORS[i];
  i = (i + 1) % COLORS.length;
}

function rndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener("click", detectClick);
function detectClick(e) {
  if (e.target.style.background === "red") {
    console.log("RED CLICK");
    e.target.style.background = "black";
  } else if (e.target.style.background === "blue") {
    console.log("BLUE CLICK");
    e.target.style.background = "black";
  }
}
