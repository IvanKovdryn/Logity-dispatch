const trucksCols = document.querySelectorAll(".services-col");

for (let i = 0; i < trucksCols.length; i++) {
  if (i % 2 !== 0) {
    trucksCols[i].classList.add("reverse");
  }
  console.log(trucksCols);
}
