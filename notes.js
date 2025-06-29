
var notebook = document.getElementById("notepage")
var nav = document.getElementById("nav")

var notes = [
  // {
  //   "date": "04-24-2024",
  //   "title": "hla retrospective",
  //   "url": "./notes/hla.md"
  // },
  // {
  //   "date": "09-18-2023",
  //   "title": "my diary",
  //   "url": "./notes/my_diary.md"
  // },
  {
    "date": "09-07-2023",
    "title": "this is a website",
    "url": "./notes/this_site.md"
  },
]

// get each post from .md
const getNotes = async () => {

  posts = []

  const getContent = notes.map((note, id) => {
    if (note.url) {

      // create link
      var link = document.createElement("a");
      link.innerHTML = `<span>${note.title}</span>    <span>${note.date}</span>`;
      link.href = '#' + note.date;
      nav.appendChild(link)

      // for each post
      return fetch(note.url)
        .then((res) => res.text())
        .then((text) => {
          content = markdown(text);
          posts.push([content, note.date, id])
        })
    }
  })

  return Promise.all(getContent).then(() => {
    return posts
  });

}


const buildNotes = async () => {
  const posts = await getNotes();

  console.log('retrieving posts')

  // make sure in chronological order
  posts.sort((a, b) => a[2] - b[2])

  // render each post
  posts.map((note) => {
    // create post

    var div = document.createElement("div");
    div.classList.add('post')

    // create anchor
    var date = document.createElement("p");
    date.innerHTML = note[1];
    date.id = note[1];
    date.classList.add('date')
    div.appendChild(date)

    // create content
    var post = document.createElement("div");
    post.innerHTML = note[0];
    div.appendChild(post)

    notebook.appendChild(div)

  })
}

buildNotes();