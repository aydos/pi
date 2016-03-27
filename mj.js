/*
mj.js
Copyright 2011-2016 Fahri Aydos
http://aydos.com/pi
*/
function Decimal() {}
importScripts("decimal.min.js")
this.onmessage=function(e) {
	importScripts(e.data.se+".js")
	mj = pi_math()
	this.postMessage({mj:mj})
}
