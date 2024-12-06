import style from "./style.css"

console.log("hello");

const project = document.querySelector('.projects')
const everyproj = document.querySelectorAll('.project-screenshot')
console.log(project);

project.addEventListener('mouseover', (e) => {
    // console.log(e.target);
    if (e.target.classname === "project") {
        alert("jello")
        // everyproj.forEach((el, i) => {
        // });
    }
});