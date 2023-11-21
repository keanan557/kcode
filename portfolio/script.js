/*change letters
let type = new Typed('#changing-text',{
	strings : ['Front-end Developer'],
	typeSpeed: 30,
	backSpeed: 30,
	loop: 3,
}) */

/*hamburger js*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
	
}))

