// JavaScript Document
console.log("howdy");

// Filter Systeem
// Bron https://codepen.io/shooft/pen/VwpvVYy
var optieAll = document.querySelector("#filter-all");
var optieGalaxy = document.querySelector("#filter-galaxy");
var optieSolar = document.querySelector("#filter-solar");

function filterLijst(event){
  let deLijst = document.querySelector("ul");
  let nieuweFilter = event.target.value;
  deLijst.className = "";
  deLijst.classList.add(nieuweFilter);
}

/* de radio buttons laten luisteren naar wijzigingen */
/* dan de functie filterList uitvoeren */
optieAll.addEventListener("change", filterLijst);
optieGalaxy.addEventListener("change", filterLijst);
optieSolar.addEventListener("change", filterLijst);
