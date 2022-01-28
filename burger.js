// start menu bar

let menu = document.querySelector("#menu-bar")
let navbar = document.querySelector(".navbar")

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})

window.onscroll = () => {
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

// End menu bar

// start slider box

let mybox = document.querySelectorAll(".box-slider")

function removeClasses(){
    mybox.forEach(box=>{
        box.classList.remove("active")
    })
}

mybox.forEach(box => {
    box.addEventListener("click", function () {
        removeClasses();
        box.classList.add("active");
    })
    removeClasses();
})

// end slider box

// start the cart
 

// end the cart

// start loader

function loader() {
    document.querySelector(".loader").classList.add("fade-out")
    
}

function fadeout(){
    setInterval(loader, 3000)
}

window.onload = fadeout();

// End loader