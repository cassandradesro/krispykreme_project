console.log("we see you donut.js")

var donutsArray = [
	//all the donuts as an object
	{
		filename: "apple_fritter.png",
		nice_name: "Apple Fritter",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "cake_batter.png",
		nice_name: "Cake Batter",
		description: "Lorem ipsum",
		filters: ["cake"],
	},{
		filename: "cake.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["cake"],
	},{
		filename: "cake_glazed_blueberry.png",
		nice_name: "Blueberry Cake Donut",
		description: "Lorem ipsum",
		filters: ["cake"],
	},{
		filename: "cake_glazed_blueberry.png",
		nice_name: "Glazed Blueberry Cake Donut",
		description: "Lorem ipsum",
		filters: ["glazed", "cake"],
	},{
		filename: "cake_powdered.png",
		nice_name: "Powdered Donut",
		description: "Lorem ipsum",
		filters: ["powdered", "cake"],
	},{
		filename: "cake_powdered_cinnamon.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["cake", "powdered", "cinnamon"],
	},{
		filename: "chocolate_glazed_iced.png",
		nice_name: "Chocolate Glazed Donut",
		description: "Lorem ipsum",
		filters: ["glazed", "chocolate"],
	},{
		filename: "chocolate_iced_cake.png",
		nice_name: "Chocolate Iced Cake Donut",
		description: "Lorem ipsum",
		filters: ["chocolate", "cake"],
	},{
		filename: "chocolate_iced_custard.png",
		nice_name: "Chocolate Iced Custard Donut",
		description: "Lorem ipsum",
		filters: ["chocolate","custard"],
	},{
		filename: "chocolate_iced_kreme.png",
		nice_name: "Chocolate Iced Kreme Filled Donut",
		description: "Lorem ipsum",
		filters: ["chocolate", "kreme"],
	},{
		filename: "cinnamon_bun.png",
		nice_name: "Cinnamon Bun",
		description: "Lorem ipsum",
		filters: ["cinnamon"],
	},{
		filename: "cinnamon_sugar.png",
		nice_name: "Cinnamon Sugar",
		description: "Lorem ipsum",
		filters: ["cinnamon"],
	},{
		filename: "cruller_glazed.png",
		nice_name: "Cruller Glazed Donut",
		description: "Lorem ipsum",
		filters: ["glazed", "cruller"],
	},{
		filename: "cruller_glazed_chocolate.png",
		nice_name: "Cruller Glazed Chocolate Donut",
		description: "Lorem ipsum",
		filters: ["cruller", "glazed", "chocolate"],
	},{
		filename: "double_dark_chocolate.png",
		nice_name: "Double Dark Chocolate Donut",
		description: "Lorem ipsum",
		filters: ["chocolate"],
	},{
		filename: "dulce_de_leche.png",
		nice_name: "Dulce de Leche Donut",
		description: "Lorem ipsum",
		filters: ["specialty"],
	},{
		filename: "filled_apple.png",
		nice_name: "Apple Filled Donut",
		description: "Lorem ipsum",
		filters: ["filled"],
	},{
		filename: "filled_chocolate_rasberry.png",
		nice_name: "Chocolate Rasberry Filled Donut",
		description: "Lorem ipsum",
		filters: ["filled", "chocolate"],
	},{
		filename: "glazed_cinnamon.png",
		nice_name: "Glazed Cinnamon Donut",
		description: "Lorem ipsum",
		filters: ["glazed", "cinnamon"],
	},{
		filename: "glazed_filled_kreme.png",
		nice_name: "Glazed Filled Kreme Donut",
		description: "Lorem ipsum",
		filters: ["glazed", "filled"],
	},{
		filename: "glazed_filled_lemon.png",
		nice_name: "Glazed Filled Lemon Donut",
		description: "Lorem ipsum",
		filters: ["glazed", "filled"],
	},{
		filename: "glazed_filled_rasberry.png",
		nice_name: "Glazed Filled Rasberry Donut",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "glazed_maple.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "glazed_original.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "glazed_sourcream.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "iced_chocolate_sprinkles.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "iced_strawberry.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "iced_strawberry_sprinkles.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "ny_cheesecake.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "oreo.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "original_donut.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "powdered_filled_blueberry.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "powdered_filled_strawberry.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "powdered_lemon_kreme.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "twist_cinnamon.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	},{
		filename: "white_chocolate_drizzle.png",
		nice_name: "Glazed Original",
		description: "Lorem ipsum",
		filters: ["glazed"],
	}
];




///random button//////
var $donutBoxGrid = document.querySelector(".donut-grid");
var $donutListGrid = document.querySelector(".donut-list-grid");



var getDonutsInBox = function(){
	for (var i = 0; i < 12; i++) {
		var donutsArray = donutsArray[i];
		var randomDonut = donutsArray[Math.floor(Math.random()*donutsArray.length)];
		console.log(randomDonut);
		var img = document.createElement("img");
		img.setAttribute("src", "dist/img/" + randomDonut.filename);
		$donutGrid.appendChild(img);
	}
};

var getADonut = function(){
	for (var i = 0; i < donutsArray.length; i++) {
		var $donutsArray = donutsArray[i];
		var img = document.createElement("img");
		img.setAttribute("src", "dist/img/" + $donutsArray.filename);
		$donutListGrid.appendChild(img);
	}
};

document.querySelector(".randomize-btn").addEventListener("click", function(){
	$donutGrid.innerHTML = "";
	getDonutsInBox();
});

getADonut();
















