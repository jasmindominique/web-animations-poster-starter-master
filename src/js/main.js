// mountains

let mountainBk = document.querySelector(".mountain-bk");

let mountainFr = document.querySelector(".mountain-fr");

// text

let logo = document.querySelector(".logo");

let movieOne = document.querySelector(".movietitleone");

let movieTwo = document.querySelector(".movietitletwo");

// building

let buildOne = document.querySelector(".build-one");

let buildTwo = document.querySelector(".build-two");

let buildThree = document.querySelector(".build-three");

// mountainmen

let manLeft = document.querySelector(".man-left");

let manRight = document.querySelector(".man-right");

// moons

let moonLeft = document.querySelector(".moon-left");
let moonRight = document.querySelector(".moon-right");





let tl = new TimelineLite();

document.querySelector(".moon-left").addEventListener('click', function(){

	tl.to(mountainBk, 5, {y: 0, opacity: 1})
		.to(mountainFr, 2, {y:0})
		.to(movieOne, 1, {opacity:1})
		.to(movieTwo, 1, {opacity:1})
		.to(logo, 1, {x: 0, opacity: 1}
		.to(buildOne, 1, {opacity: 1})
		.to(buildTwo, 1, {opacity: 1});

	console.log("moon was clicked");

})

// document.querySelector('.moon-right').addEventListener('click', function(){

// 	tl.from(mountainBk, 5, {y: 0, opacity: 1})
// 		.from(mountainFr, 2, {y:0})
// 		.from(movieOne, 1, {opacity:1})
// 		.from(movieTwo, 1, {opacity:1})
// 		.from(logo, 1, {x: 0, opacity: 1}
// 		.from(buildOne, 1, {opacity: 1})
// 		.from(buildTwo, 1, {opacity: 1});

// 	console.log("right moon was clicked");

// })




// let tl = new TimelineLite();

// 	tl.to(mountainBk, 1, {y: 200}, 0.5);
// 		.to(mountainFr, 1, {y:.5, }, "-=.25");
// 		.from(logo, 1, {x:100, opacity:0}, 2);
// 		.from(movieOne, 1, {scale: 0.5, opacity:0}, "+=5");
// 		.from(movieTwo, 1, {scale: 0.5, opacity:0}, "-=5");