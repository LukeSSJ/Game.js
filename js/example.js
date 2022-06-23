"use strict"

let player
let score = 0

function Player(x, y) {
	this.sprite = new Sprite("spr/player.png")
	this.rect = new Rect(32, 32)
}
Player.prototype.step = function() {
	if (Input.isPressed(KEY_LEFT)) this.x -= 4
	if (Input.isPressed(KEY_RIGHT)) this.x += 4
	if (Input.isPressed(KEY_UP)) this.y -= 4
	if (Input.isPressed(KEY_DOWN)) this.y += 4
	
	this.x = Math.min(640 - 32, Math.max(0, this.x))
	this.y = Math.min(480 - 32, Math.max(0, this.y))

	this.rect.setTopLeft(this.x, this.y)
}
Player.prototype.draw = function() {
	this.sprite.draw(this.x, this.y)
	
	Game.drawText("Score: " + score, 10, 20)
}


function Enemy(x, y) {
	this.sprite = new Sprite("spr/enemy.png")
	this.rect = new Rect(32, 32)
	this.rect.setTopLeft(x, y)
}
Enemy.prototype.step = function() {
	//if (Math.abs((this.x + 16) - (player.x + 16)) < 32 && Math.abs((this.y + 16) - (player.y + 16)) < 32) {
	if (this.rect.checkOverlap(player.rect)) {
		score += 10
		//return false
		this.x = Math.floor(Math.random() * 20) * 32
		this.y = Math.floor(Math.random() * 15) * 32
		this.rect.setTopLeft(this.x, this.y)
	}
}
Enemy.prototype.draw = function() {
	this.sprite.draw(this.x, this.y)
}

Game.start({
	canvas: document.getElementById("canvas"),
	clearColor: "#99ff99",
	background: new Sprite("spr/background.png"),
})
player = Game.addObject(Player, 64, 64)
Game.addObject(Enemy, 160, 96)

