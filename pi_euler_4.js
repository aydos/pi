// Fahri Aydos - aydos.com (2016-03-10)
// Leonhard Euler (1707-1783)
var n = new Decimal(0)
var t = new Decimal(0)
var one = new Decimal(1)
var onefourth = new Decimal(1).div(4)
function pi_step() {
	t = t.plus(1)
	n = n.plus(one.div(t.pow(4)))
}
function pi_calc() {
	pi_step()
	pi = n.times(90).pow(onefourth)
}