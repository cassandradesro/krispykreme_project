
console.log("Hello World from app.js, transpiled and concatenated!");

var $homepage = document.querySelector(".home-page"),
	$secondpage = document.querySelector(".second-page"),
	$thirdpage = document.querySelector(".third-page"),
	$fourthpage = document.querySelector(".fourth-page"),
	$select_Donuts = document.querySelector(".second-page .donuts"),
	// $select_Coffee = document.querySelector(".second-page .drinks"),
	$select_Single = document.querySelector(".single"),
	$select_HalfDozen = document.querySelector(".half-dozen"),
	$select_Dozen = document.querySelector(".dozen"),
	$donut_Box = document.querySelector(".donut-box"),
	$selected_Choice = document.querySelector(".fourth-page h1 span");



$homepage.addEventListener("click", function(){
	$homepage.classList.remove("active");
	console.log("homepage hidden");
	$secondpage.classList.add("active");
	console.log("second page showing");
	document.body.style.background = "#FDD9DB";

});

$select_Donuts.addEventListener("click", function(){
	$secondpage.classList.remove("active");
	console.log("second page hidden");
	$thirdpage.classList.add("active");
	console.log("third page showing");

});

$select_Single.addEventListener("click", function(){

	// document.querySelector("active").classList.remove("active");

	$thirdpage.classList.remove("active");
	console.log("third page hidden");
	$fourthpage.classList.add("active");
	console.log("fourth page showing, single selected");
	$selected_Choice.innerHTML = "donut";


});

$select_HalfDozen.addEventListener("click", function(){
	$thirdpage.classList.remove("active");
	console.log("third page hidden");
	$fourthpage.classList.add("active");
	console.log("fourth page showing, halfdoz selected");
	$selected_Choice.innerHTML = "half dozen";
	
});

$select_Dozen.addEventListener("click", function(){
	$thirdpage.classList.remove("active");
	console.log("third page hidden");
	$fourthpage.classList.add("active");
	console.log("fourth page showing, dozen selected");
	$selected_Choice.innerHTML = "dozen";
	


});
