// opdracht 1,2 en 3

const body = document.querySelector(".blue-background");
const changeBackground = document.getElementById("changebg");
const myButton = document.getElementById("mybutton")

const clicked = () =>{
    alert("button clicked")
}

const toggleColor = () =>{
    body.classList.toggle("red-background")
}



myButton.addEventListener("click",clicked)
changeBackground.addEventListener("click",toggleColor)


