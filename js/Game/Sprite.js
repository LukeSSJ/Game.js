"use strict"

function Sprite(src) {
	this.ready = false
	this.img = new Image()
	this.img.onload = () => {
		this.ready = true
	}
	this.img.src = src
	this.width = 32
	this.height = 32
}

Sprite.prototype.draw = function(x, y) {
	if (this.ready) {
		Game.ctx.drawImage(this.img, x, y)
	}
}

Sprite.prototype.drawTiled = function(x, y, w, h) {
	if (this.ready) {
		for (let i = 0; i < w; i += this.width) { 
			for (let j = 0; j < h; j += this.width) { 
				Game.ctx.drawImage(this.img, x + i, y + j)
			}
		}
	}
}
