"use strict";

// --- Fullscreen utilities ---
var is_fullscreen = false;

function open_fullscreen() {
	let game = document.getElementById("game-area");
	if (is_fullscreen) {
		is_fullscreen = false;
		if (is_mobile_device()) {
			game.style.position = "absolute";
			document.getElementById("mobile-back-button").style.display = "none";
			document.getElementById("game-player").style.display = "none";
		} else {
			if (game.requestFullscreen) { game.requestFullscreen(); }
			else if (game.mozRequestFullScreen) { game.mozRequestFullScreen(); }
			else if (game.webkitRequestFullscreen) { game.webkitRequestFullscreen(); }
			else if (game.msRequestFullscreen) { game.msRequestFullscreen(); }
		}
	} else {
		is_fullscreen = true;
		if (is_mobile_device()) {
			document.getElementById("game-player").style.display = "block";
			game.style.position = "fixed";
			document.getElementById("mobile-back-button").style.display = "flex";
		} else {
			if (game.requestFullscreen) { game.requestFullscreen(); }
			else if (game.mozRequestFullScreen) { game.mozRequestFullScreen(); }
			else if (game.webkitRequestFullscreen) { game.webkitRequestFullscreen(); }
			else if (game.msRequestFullscreen) { game.msRequestFullscreen(); }
		}
	}
}

function is_mobile_device() {
	if (navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	} else {
		return false;
	}
}

// --- Mobile play init ---
if ($('iframe#game-area').length) {
	// load_leaderboard removed - no backend
	drag_back_btn(document.getElementById("mobile-back-button"));
	if (is_mobile_device()) {
		if ($('#allow_mobile_version').length) {
			document.getElementById('mobile-play').style.display = 'block';
			document.getElementById('game-player').style.display = 'none';
		}
	}
}

function drag_back_btn(elem) {
	let is_drag = false;
	let pos_1 = 0, pos_2 = 0;
	let last_y = elem.style.top;
	let touchstart_y = 0;

	elem.addEventListener("touchend", function (e) {
		if (is_drag) { is_drag = false; }
	}, false);

	elem.addEventListener("touchmove", function (e) {
		e.preventDefault();
		let touch = e.changedTouches[0];
		if (!is_drag) {
			if (touchstart_y < touch.clientY + 5 || touchstart_y > touch.clientY - 5) {
				pos_2 = e.clientY;
				is_drag = true;
			}
		}
		if (is_drag) {
			pos_1 = pos_2 - touch.clientY;
			pos_2 = touch.clientY;
			elem.style.top = (pos_2) + "px";
		}
	}, false);

	elem.addEventListener("touchstart", function (e) {
		let touch = e.changedTouches[0];
		last_y = elem.style.top;
		touchstart_y = touch.clientY;
	}, false);

	elem.addEventListener("click", function (e) {
		e.preventDefault();
		if (last_y == elem.style.top) {
			open_fullscreen();
		}
	}, false);
}

// Not used - requires backend API
function load_leaderboard(conf) {
	console.log("load_leaderboard is disabled (no backend API)");
}

// Not used - requires backend API
function show_leaderboard(data) {
	console.log("show_leaderboard is disabled (no backend API)");
}

// --- jQuery event bindings ---
$(document).ready(function () {
	// "Load More" button - disabled (requires backend)
	$('#load-more1').click((e) => {
		e.preventDefault();
		console.log("load-more is disabled (no backend API)");
	});

	// Favorite button - disabled (requires backend)
	$('.b-action #favorite').on('click', function (e) {
		e.preventDefault();
		console.log("favorite is disabled (no backend API)");
	});

	// Upvote button - disabled (requires backend)
	$('.b-action #upvote').on('click', function (e) {
		e.preventDefault();
		console.log("upvote is disabled (no backend API)");
	});

	// Downvote button - disabled (requires backend)
	$('.b-action #downvote').on('click', function (e) {
		e.preventDefault();
		console.log("downvote is disabled (no backend API)");
	});

	// User avatar dropdown toggle
	$('.user-avatar').on('click', function () {
		let element = $(this).next();
		if (element.is(":hidden")) {
			element.removeClass('hidden');
		} else element.addClass('hidden');
	});

	// Horizontal scroll controls
	$('#btn_prev').on('click', function () {
		$('.profile-gamelist ul').animate({ scrollLeft: '-=150' }, 300, 'swing');
	});
	$('#btn_next').on('click', function () {
		$('.profile-gamelist ul').animate({ scrollLeft: '+=150' }, 300, 'swing');
	});
	$('#f_prev').on('click', function () {
		$('.favorite-gamelist ul').animate({ scrollLeft: '-=150' }, 300, 'swing');
	});
	$('#f_next').on('click', function () {
		$('.favorite-gamelist ul').animate({ scrollLeft: '+=150' }, 300, 'swing');
	});
	$('#t-prev').on('click', function () {
		$('.list-1-wrapper').animate({ scrollLeft: '-=150' }, 300, 'swing');
	});
	$('#t-next').on('click', function () {
		$('.list-1-wrapper').animate({ scrollLeft: '+=150' }, 300, 'swing');
	});

	// Delete comment - disabled (requires backend)
	$('.delete-comment').on('click', function () {
		console.log("delete-comment is disabled (no backend API)");
	});

	// Comments section - disabled (requires backend)
	if ($('#comments').length) {
		console.log("comments are disabled (no backend API)");
	}
});
