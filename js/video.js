var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100;
});


document.querySelector('#pause').addEventListener('click', function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector('#slower').addEventListener('click', function() {
	console.log('Slow Down');
	video.playbackRate *= 0.95;
	console.log('Current Speed is: ' + video.playbackRate);
});

document.querySelector('#faster').addEventListener('click', function() {
	console.log('Speed Up');
	video.playbackRate *= 1.05;
	console.log('Current Speed is: ' + video.playbackRate);
});


document.querySelector('#skip').addEventListener('click', function() {
	if (video.currentTime + 15 <= video.duration) {
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector('#mute').addEventListener('click', function() {
	if (video.muted === false) {
		video.muted = true;
		console.log(video.volume);
		document.querySelector('#mute').innerHTML = 'Unmute';
		document.querySelector('#volume').innerHTML = 0;
	} else {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
		document.querySelector('#volume').innerHTML = video.volume * 100;
	}
});

document.querySelector('#slider').addEventListener('input', (e) => {
	video.volume = e.currentTarget.value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100;
})


document.querySelector('#vintage').addEventListener('click', function() {
	document.getElementById('orig').classList.add('.oldSchool');
});

document.querySelector('#orig').addEventListener('click', function() {
	document.getElementById('vintag').classList.remove('.oldSchool');
});