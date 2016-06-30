function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
	this.songs.push(song);
};

Playlist.prototype.play = function() {
	// get the current song 
	var currentSong = this.songs[this.nowPlayingIndex];
	currentSong.play();
	
};

Playlist.prototype.stop = function(){
	// get the current song 
	var currentSong = this.songs[this.nowPlayingIndex];
	currentSong.stop();
};

Playlist.prototype.next = function() {
	this.stop();
	this.nowPlayingIndex++;
	
	// Check if we're on the last song
	if(this.nowPlayingIndex === this.songs.length) {
		this.nowPlayingIndex = 0;
	}
	this.play();
};

Playlist.prototype.previous = function() {
	this.stop();
	this.nowPlayingIndex--;
	console.log(this.nowPlayingIndex);
	
	// Check if we're on the last song
	if(this.nowPlayingIndex < 0) {
		this.nowPlayingIndex = this.songs.length - 1;
	}
	this.play();
};

Playlist.prototype.renderInElement = function(list) {
	list.innerHTML = "";
	for(var i = 0; i < this.songs.length; i++) {
		list.innerHTML += this.songs[i].toHTML();
	}
};