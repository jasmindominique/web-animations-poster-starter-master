"use strict";

// mountains

var mountainBk = document.querySelector(".mountain-bk");

var mountainFr = document.querySelector(".mountain-fr");

// text

var logo = document.querySelector(".logo");

var movieOne = document.querySelector(".movietitleone");

var movieTwo = document.querySelector(".movietitletwo");

// building

var buildOne = document.querySelector(".build-one");

var buildTwo = document.querySelector(".build-two");

var buildThree = document.querySelector(".build-three");

// mountainmen

var manLeft = document.querySelector(".man-left");

var manRight = document.querySelector(".man-right");

// moons

var moonLeft = document.querySelector(".moon-left");
var moonRight = document.querySelector(".moon-right");

var tl = new TimelineLite();

document.querySelector('.moon-left').addEventListener('click', function () {

	tl.to(mountainBk, 5, { y: 0, opacity: 1 }).to(mountainFr, 2, { y: 0 }).to(movieOne, 1, { opacity: 1 }).to(movieTwo, 1, { opacity: 1 });
	// .to(logo, 1, {x: 0, opacity: 1}
	// .to(buildOne, 1, {x: 0})
	// .to(buildTwo, 1, {x: 0})
	// .to(buildThree, 1, {x: 0});


	console.log("moon was clicked");
});

// let tl = new TimelineLite();

// 	tl.to(mountainBk, 1, {y: 200}, 0.5);
// 		.to(mountainFr, 1, {y:.5, }, "-=.25");
// 		.from(logo, 1, {x:100, opacity:0}, 2);
// 		.from(movieOne, 1, {scale: 0.5, opacity:0}, "+=5");
// 		.from(movieTwo, 1, {scale: 0.5, opacity:0}, "-=5");
//# sourceMappingURL=main.js.map
