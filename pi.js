/*
pi.js
Copyright 2011-2016 Fahri Aydos
http://aydos.com/pi
*/
importScripts("decimal.min.js")
var pi=new Decimal(0) // calculated pi
var pr= [2,3,5,7,11,13,17,19] // primes
var i=0  //current iteration
var real //decimal part of real pi
var dc = 0 // decimal count
var it = 0 // max iteration
var sl = 0 // slow down in ms
this.onmessage=function(e) {
	dc = new Decimal(e.data.dc).toNumber()
	it = e.data.it
	sl = e.data.sl
	if (e.data.pr>0) {
		primes(it+6)
	}
	Decimal.config({precision:dc+6})
	real = Decimal.acos(-1).toString().substr(2)
	importScripts(e.data.se+".js")
	pi_calculate()
}
function pi_calculate() {
	i++;
	pi_calc()
	var p = pi.toString()
	var k = pi_compare(p)
	this.postMessage({p:p,i:i,k:k})
	if((k==dc)||(i==it)){
		return
	}
	setTimeout(pi_calculate, sl)
}
function pi_compare(p) {
	if (!p.startsWith("3.")) {
		return 0
	}
	p = p.substr(2)
	for (var i=0; i<dc; i++) {
		if (p[i] != real[i]) {
			return i
		}
	}
	return i
}
function primes(it) {
	var i = pr[pr.length-1]
	while(pr.length<it) {
		i+=2
		var q = Math.floor(Math.sqrt(i))
		for (var j=0;j<pr.length;j++) {
			if (i%pr[j]==0) {
				break
			}
		}
		if (j>=pr.length) {
			pr.push(i)
		}
	}
}