function toggleBox(element, units) {
  document
    .querySelectorAll(".box")
    .forEach((box) => box.classList.remove("active"));
  element.classList.add("active");

  let detailsDiv = element.querySelector(".details");
  detailsDiv.innerHTML = "";

  for (let i = 1; i <= units; i++) {
    let selectionGroup = document.createElement("div");
    selectionGroup.classList.add("selection-group");

    let label = document.createElement("span");
    label.textContent = `#${i}`;

    let sizeSelect = document.createElement("select");
    sizeSelect.innerHTML =
      "<option>Size: S</option><option>Size: M</option><option>Size: L</option>";

    let colorSelect = document.createElement("select");
    colorSelect.innerHTML =
      "<option>Color: Black</option><option>Color: White</option><option>Color: Blue</option>";

    selectionGroup.appendChild(label);
    selectionGroup.appendChild(sizeSelect);
    selectionGroup.appendChild(colorSelect);
    detailsDiv.appendChild(selectionGroup);
  }
}
