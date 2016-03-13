// Fahri Aydos - aydos.com (2016-03-10)
// 1748 - Leonhard Euler (1707-1783)
var n = new Decimal(0)
var one = new Decimal(1)
function pi_step() {
	n = n.plus(one.div(i*i))
}
function pi_calc() {
	pi_step()
	pi = n.times(6).sqrt()
}