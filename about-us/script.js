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