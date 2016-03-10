// 2016-03-10 - Fahri Aydos - aydos.com
var nt = new Decimal(0)
var it = new Decimal(0)
var one = new Decimal(1)
function pi_series() {
	nt = nt.plus(one.div(it.pow(2)))
}
function pi_calculate() {
	it = it.plus(1)
	pi_series()
	pi = nt.times(6).sqrt()
}