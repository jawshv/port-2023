
var notebook = document.getElementById("notebook")

var notes = [
  "./notes/this_site.md"
]

notes.map((note) => {
  fetch(note)
    .then((res) => res.text())
    .then((text) => {
      content = markdown(text);
      var div = document.createElement("div");
      div.classList.add('post')
      div.innerHTML = content;
      notebook.appendChild(div)
    })
    .catch((e) => console.error(e));

})