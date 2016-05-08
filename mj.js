/*
mj.js
Copyright 2011-2016 Fahri Aydos
http://aydos.com/pi
*/
function Decimal() {
	this.div = function() {}
	this.sqrt = function() {}
	return this
}
this.onmessage=function(e) {
	importScripts(e.data.se+".js")
	mj = pi_math()
	this.postMessage({mj:mj})
}