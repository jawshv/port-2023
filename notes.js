
var notebook = document.getElementById("notepage")
var nav = document.getElementById("nav")

var notes = {
  "this site": {
    "date":"09_18_2023",
    "title":"my diary",
    "url":"./notes/my_diary.md"
  },
  "my diary": {
    "date":"09_07_2023",
    "title":"this is a website",
    "url":"./notes/this_site.md"
  }
}

var entries = Object.entries(notes)

console.log(entries)

entries.map((note) => {
  console.log(note)
  if (note[1]['url']) {
  // create link
  var link = document.createElement("a");
  link.innerHTML = note[1].title;
  link.href = '#'+note[1].date;
  nav.appendChild(link)

  // for each post
  fetch(note[1].url)
    .then((res) => res.text())
    .then((text) => {
      // create post
      content = markdown(text);
      var div = document.createElement("div");
      div.classList.add('post')

      // create anchor
      var date = document.createElement("p");
      date.innerHTML = note[1].date;
      date.id = note[1].date;
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