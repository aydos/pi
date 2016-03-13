// Fahri Aydos - aydos.com (2016-03-13)
// Leonard Euler
// https://en.wikipedia.org/wiki/Euler_product
var n = new Decimal(1)
function pi_step() {
	var p = pr[i] // begin with 3
	var u = new Decimal(p)
	var d = (p-1)%4==0 ? (p-1) : (p+1)
	var m = new Decimal(u.div(d))
	n = n.times(m)
}
function pi_calc() {
	pi_step()
	pi = n.times(4)
}