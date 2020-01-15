let characters = [],
  list = document.querySelector("#list"),
  search = document.querySelector("input");

fetch("https://swapi.co/api/people")
  .then(blob => blob.json())
  .then(data => {
    characters.push(...data.results)
  })

function render(filtered) {
  let html = filtered.map(filter => `<li>${filter.name}</li>`);
  html.forEach(li => list.innerHTML += li);
}

function filterText() {
  let filtered = characters.filter(character => {
    let characterLower = character.name.toLowerCase();
    return characterLower.includes(this.value.toLowerCase());
  })

  list.innerHTML = ""
  if (search.value === '') {
    list.style.display = "none";
  } else if (filtered.length === 0) {
    list.innerHTML = "<li style='background:red; color: white;'>Input does not match</li>"
  } else {
    list.style.display = "block";
    render(filtered);
  }
}

search.addEventListener("keyup", filterText)