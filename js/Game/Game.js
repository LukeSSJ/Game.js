"use strict"

const Game = {
	canvas: null,
	ctx: null,
	objectList: [],
}

// Game start
Game.start = function(options) {
	Game.canvas = options.canvas

	Game.objects = options.objects || {}
	Game.sounds = options.sounds || {}

	Game.clearColor = options.clearColor || "#ffffff"
	Game.background = options.background || false

	Game.ctx = Game.canvas.getContext('2d')
	
	Game.objectList = []

	Input.init()
	
	const FPS = 60
	setInterval(Game.step, 1000 / FPS)
}

// Game step
Game.step = function() {
	Game.ctx.fillStyle = Game.clearColor
	Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.height)

	if (Game.background) {
		Game.background.drawTiled(0, 0, 640, 480)
	}

	for (let i = Game.objectList.length - 1; i >= 0;  i--) {
		if (Game.objectList[i].step) {
			const result = Game.objectList[i].step()
			if (result === false) {
				Game.objectList.splice(i, 1)
			}
		}
	}

	window.requestAnimationFrame(Game.draw)
}

// Draw everything
Game.draw = function() {
	for (let i = Game.objectList.length - 1; i >= 0;  i--) {
		if (Game.objectList[i].draw) Game.objectList[i].draw()
	}
}

// Add object
Game.addObject = function(objectType, x, y) {
	const obj = new objectType(x, y)
	obj.x = x
	obj.y = y
	Game.objectList.push(obj)
	return obj
}

// Draw text
Game.drawText = function(text, x, y) {
	Game.ctx.font = "20px Arial";
	Game.ctx.fillStyle = "#ffffff"
	Game.ctx.fillText(text, x, y);
}

