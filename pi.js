/*
pi.js
Copyright 2011-2016 Fahri Aydos
http://aydos.com/pi
*/
importScripts("decimal.js")
var pi = new Decimal(0) // calculated pi
var pr = 0 //precision
var ic = 0 //iteration count
var real //decimal part of real pi
this.onmessage = function(e) {
	pr = new Decimal(e.data.pr).toNumber()
	ic = e.data.ic
	Decimal.config({precision:pr+5})
	real = Decimal.acos(-1).toString().substr(2)
	importScripts(e.data.s+".js")
	pi_calc()
}
function pi_calc() {
	for (var i=0;i<=ic;i++) {
		pi_calculate()
		var p = pi.toString()
		var k = pi_compare(p)
		this.postMessage({p:p,i:i,k:k})
		if (k==pr) {
			break;
		}
	}
}
function pi_compare(p) {
	if (!p.startsWith("3.")) {
		return 0
	}
	p = p.substr(2)
	for (var i=0;i<pr;i++) {
		if (p[i] != real[i]) {
			return i;
		}
	}
	return i;
}


