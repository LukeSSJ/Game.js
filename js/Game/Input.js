"use strict"

const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 38
const KEY_DOWN = 40

const Input = {
	isDown: {},
}

Input.init = function() {
	window.addEventListener("keydown", Input.keydown)
	window.addEventListener("keyup", Input.keyup)
}

Input.keydown = function(e) {
	const code = e.which || e.keyCode
	Input.isDown[code] = true
}

Input.keyup = function(e) {
	const code = e.which || e.keyCode
	Input.isDown[code] = false
}

Input.isPressed = function(code) {
	return Input.isDown[code]
}
