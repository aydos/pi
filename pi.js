/*
pi.js
Copyright 2011-2016 Fahri Aydos
http://aydos.com/pi
*/
importScripts("decimal.min.js")
var pi = new Decimal(0) // calculated pi
var pr = 0 //precision
var real //decimal part of real pi
this.onmessage = function(e) {
	pr = e.data.prec;
	Decimal.config({precision:pr+5})
	real = Decimal.acos(-1).toString().substr(2)
	importScripts(e.data.method+".js")
	pi_calc()
}

function pi_calc() {
	for (var i = 0; i < 10000; i++) {
		pi_calculate()
		var p = pi.toString()
		var k = pi_compare(p)
		if (k==pr) {
			this.postMessage({p:p,i:i,k:k})
			this.close()
		} else {
			this.postMessage({p:p,i:i,k:k})
		}
	}
}

function pi_compare(p) {
	if (!p.startsWith("3.")) {
		return 0
	}
	console.log(p)
	p = p.substr(2)
	for (var i=0;i<pr;i++) {
		if (p[i] != real[i]) {
			return i;
		}
	}
	return i;
}


