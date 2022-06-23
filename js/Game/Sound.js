"use strict"

function Sound(src) {
	this.audio = new Audio(src)
}

Sound.prototype.play = function() {
	this.audio.play()
}
