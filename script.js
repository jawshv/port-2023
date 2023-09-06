
const getProjects = fetch('./projects.json')
        .then((response) => response.json())
        .then((json) => {
            return json.Content
        });


// this builds a div for the project to live in
const createDiv = (proj) => {
    var linkText = document.createTextNode(proj.copy) ;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.appendChild(linkText);
    a.href = proj.link;
    li.classList.add('project')
    li.appendChild(a);
    return(li)
}

// this walks through each project and runs createDiv on it
const appendProjects = () => {
    getProjects.then((e) => {
        projects = Object.values(e[0]).reverse()
        keys = Object.keys(e[0]).reverse()

        projects.map((proj, i) => {
            const allprojects = document.getElementById('projects')
            proj.map((wow) => {
                var a = document.getElementById(keys[i])
                if (a == null) {
                    a = document.createElement("div")
                    a.setAttribute("id", keys[i]);
                    allprojects.appendChild(a)
                }
               
                var okey = createDiv(wow)
                a.appendChild(okey);
            })
        })
        
    })
}

appendProjects()


const testy = () => {
    console.log('wow')
}
