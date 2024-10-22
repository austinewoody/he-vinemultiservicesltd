let hamburger = document.getElementById("hamburger");

let links = document.getElementById("links");

hamburger.addEventListener("click", function display(){
    if (links.style.display === "none" || links.style.display === ""){
        links.style.display = "block";
        links.classList.add("slide-right");
    }else{
        links.style.display = "none";
        links.classList.remove("slide-right");
    }
});


document.addEventListener("click", function display(event) {
    // If the click is outside the hamburger or links, close the menu
    if (!hamburger.contains(event.target) && !links.contains(event.target)) {
        links.style.display = "none";
    }
});

window.addEventListener("scroll", function display(){
    links.style.display = "none";
})