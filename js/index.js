function displaySavedName() {
  const savedName = localStorage.getItem("name");
  const savedNameDiv = document.getElementById("saved-name");

  if (savedName) {
    savedNameDiv.textContent = `Nome inserito: ${savedName}`;
  } else {
    savedNameDiv.textContent = "Nessun nome inserito";
  }
}

document.getElementById("save-button").addEventListener("click", () => {
  const name = document.getElementById("name-input").value;
  if (name) {
    localStorage.setItem("name", name);
    displaySavedName();
  }
});

document.getElementById("remove-button").addEventListener("click", () => {
  localStorage.removeItem("name");
  document.getElementById("name-input").value = "";
  displaySavedName();
});

displaySavedName();
