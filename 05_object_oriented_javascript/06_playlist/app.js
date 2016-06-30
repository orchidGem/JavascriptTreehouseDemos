var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");
var hereComesTheSun1 = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine1 = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");
var hereComesTheSun2 = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine2 = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");
var hereComesTheSun3 = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine3 = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");
var hereComesTheSun4 = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine4 = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(hereComesTheSun1);
playlist.add(walkingOnSunshine1);
playlist.add(hereComesTheSun2);
playlist.add(walkingOnSunshine2);
playlist.add(hereComesTheSun3);
playlist.add(walkingOnSunshine3);

var playlistElements = document.getElementById("playlist");
playlist.renderInElement(playlistElements);

var playButton = document.getElementById("play");
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElements);
};

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElements);
}

var prevButton = document.getElementById("previous");
prevButton.onclick = function() {
	playlist.previous();
	playlist.renderInElement(playlistElements);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElements);
}