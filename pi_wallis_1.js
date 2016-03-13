// Fahri Aydos - aydos.com (2016-03-11)
// 1655 - John Wallis (1616-1703)
// https://en.wikipedia.org/wiki/Wallis_product
var n = new Decimal(1)
var u = 2
var d = 1
function pi_step() {
	n = n.times(u*u)
	n = n.div(d*(d+2))
	u += 2
	d += 2
}
function pi_calc() {
	pi_step()
	pi = n.times(2)
}