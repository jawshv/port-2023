
const getProjects = fetch('./projects.json')
        .then((response) => response.json())
        .then((json) => {
            return json.Content
        });


const createDiv = (proj) => {
    const projectParent = document.getElementById('projects')
    console.log(proj)
    const indproject = document.createElement("div");
    const newContent = document.createTextNode(proj[0].name);
    console.log(newContent)
    indproject.appendChild(newContent);
    projectParent.appendChild(indproject)
}



const appendProjects = () => {
    getProjects.then((e) => {
        console.log(e)

        Object.values(e[0]).map((proj) => {
            createDiv(proj)
        })
        
    })
}

appendProjects()


const testy = () => {
    console.log('wow')
}
