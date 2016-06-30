function Media(title, duration) {
	this.title = title;
	this.duration = duration;
	isPlaying = false;
}

Media.prototype.play = function() {
	this.isPlaying = true;
};

Media.prototype.stop = function() {
	this.isPlaying = false;
};
