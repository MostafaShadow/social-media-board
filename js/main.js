const changeColor = document.getElementById("change-color");
const body = document.body;
const circle = document.querySelector(".circle");
const text = document.querySelector(".toggle-mode-text h3");

changeColor.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        circle.style.transform = "translateX(-4px)";
        body.classList.replace("light", "dark");
        changeColor.style.backgroundImage = "linear-gradient(to right, #378fe6, #3eda82)";
        text.innerHTML = "Light Mode";
        changeColor.backgroundImage = "linear-gradient()";
    }
    else {
        body.classList.replace("dark", "light");
        circle.style.transform = "translateX(25px)";
        text.innerHTML = "Dark Mode";
        changeColor.style.backgroundColor = "#ccc";
        changeColor.style.backgroundImage = "none";

    }
});

