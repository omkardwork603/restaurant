let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick  = () =>{
	searchForm.classList.toggle('active');
}

 // toggle buttion
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

// scroll to top
window.onscroll = () =>{

	menu.classList.remove('fa-times');
	navbar.classList.remove('active');

if (window.scrollY > 60){
	document.querySelector('#scroll-top').classList.add('active');
}else{
	document.querySelector('#scroll-top').classList.remove('active');
	}
}

// loader open website
function loader(){
	document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
	setInterval(loader, 3000);
}

window.onload = fadeOut();
