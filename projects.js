/*
    will contain the JS for generating the project previews
*/

var projects = [
{
    name: "Join NU Track Club",
    date: "Summer 2020",
    description: "Developed a sign up page for NU Track Club",
    link: "projects/jointrack.html",
    image: "img/jointrack.JPG",
},
{
    name: "Pace Calculator",
    date: "Summer 2020",
    description: "Made a new running pace calculator after my favorite one was taken down",
    link: "projects/pacecalc.html",
    image: "img/pacecalc.JPG",
},
/* starting w two for now
{
    name: "COVID MLB Fantasy League",
    date: "Summer 2020",
    description: "Developed a sign up page for NU Track Club"
}
*/
];

function generateProjects(projects, projectSelector) {
    var projectPlace = document.querySelector(projectSelector);
    if (projectPlace) {
        if (projects instanceof Array) {
            for (let project of projects) {
                var html = 
                `<div class="project-entry-container">
                    <div class="project-entry-text">
                        <h2>${project.name}</h2>
                        <h3>${project.date}</h3>
                        <p>${project.description}</p>
                        <p><a href="${project.link}" class="read-more">Read More <i class="fas fa-long-arrow-alt-right"></i></a></p>
                    </div>
                    <div class="project-entry-img">
                        <img src="${project.image}">
                        <a href="${project.link}">Read More <i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>`;
                let container = document.createElement("div");
                container.className="project-list";
                container.innerHTML = html;
                container.tabIndex = projects.indexOf(project);
                projectPlace.append(container);
            }
        }
    }
}