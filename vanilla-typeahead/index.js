let characters = [],
  list = document.querySelector("#list"),
  search = document.querySelector("input");

fetch("https://swapi.co/api/people")
  .then(blob => blob.json())
  .then(data => {
    characters.push(...data.results)
    // console.log(data)
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
    list.classList.add("hide");
  } else {
    list.classList.remove("hide");
    render(filtered);
  }
  // console.log(filtered)
}

search.addEventListener("keyup", filterText)