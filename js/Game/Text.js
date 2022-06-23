"use strict"

function Text(text) {
	this.text = text
}

Text.prototype.setText = function() {
}

Text.prototype.draw = function(x, y) {
	Game.ctx.font = "30px Arial";
	Game.ctx.strokeText(this.text, x, y);
}
