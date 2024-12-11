
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("light-mode");

    const themeSwitch = document.createElement("button");
    themeSwitch.textContent = "Змінити тему";
    document.body.appendChild(themeSwitch);

    themeSwitch.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    });
});


//If you really need Jquery
/*
$(document).ready(function(){

})
 */