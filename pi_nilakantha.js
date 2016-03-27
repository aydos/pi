// Fahri Aydos - aydos.com (2016-03-27)
// Kelallur Nilakantha Somayaji (1444–1544)
// https://en.wikipedia.org/wiki/Pi
var n = new Decimal(0)
var d = new Decimal(2)
var one = new Decimal(1)
function pi_step() {
	var d1 = d.plus(1)
	var d2 = d.plus(2)
	if (i & 1) {
		n = n.plus(one.div(d.times(d1.times(d2))))
	} else {
		n = n.minus(one.div(d.times(d1.times(d2))))
	}
	d = d.plus(2)
}
function pi_calc() {
	pi_step()
	pi = n.times(4).plus(3)
}
function pi_math() {
	return "\\frac{\\pi-3}{4}=\\frac{1}{2\\times3\\times4}-\\frac{1}{4\\times5\\times6}+\\frac{1}{6\\times7\\times8}-\\cdots"
}