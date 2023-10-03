
var notebook = document.getElementById("notepage")
var nav = document.getElementById("nav")

var notes = [
  {
    "date":"09_18_2023",
    "title":"my diary",
    "url":"./notes/my_diary.md"
  },
  {
    "date":"09_07_2023",
    "title":"this is a website",
    "url":"./notes/this_site.md"
  },
]

notes.sort((a, b) => b.date.localeCompare(a.date))

notes.map((note) => {
  console.log(note['url'])
  if (note.url) {
  // create link
  var link = document.createElement("a");
  link.innerHTML = note.title;
  link.href = '#'+note.date;
  nav.appendChild(link)

  // for each post
  fetch(note.url)
    .then((res) => res.text())
    .then((text) => {
      // create post
      content = markdown(text);
      var div = document.createElement("div");
      div.classList.add('post')

      // create anchor
      var date = document.createElement("p");
      date.innerHTML = note.date;
      date.id = note.date;
      date.classList.add('date')
      div.appendChild(date)

      // create content
      var post = document.createElement("div");
      post.innerHTML = content;
      div.appendChild(post)

      notebook.appendChild(div)
    })
    .catch((e) => console.error(e));
  }
})