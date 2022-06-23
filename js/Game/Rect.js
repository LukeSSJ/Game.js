"use strict"

function Rect(w, h) {
	this.x = 0
	this.y = 0
	this.w = w
	this.h = h
	this.halfW = this.w / 2
	this.halfH = this.h / 2
}

Rect.prototype.setTopLeft = function(x, y) {
	this.x = x + this.halfW
	this.y = y + this.halfH
}

Rect.prototype.checkOverlap = function(rect) {
	return (Math.abs(this.x - rect.x) < (this.halfW + rect.halfW)
			&& Math.abs(this.y - rect.y) < (this.halfH + rect.halfH))
}
