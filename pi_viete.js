// 2016-03-10 - Fahri Aydos - aydos.com
var nt = new Decimal(0)
var it = new Decimal(0)
var half = new Decimal(1).div(2)
var two = new Decimal(2)
var hsq = half.sqrt()
function pi_series() {
	if (it.equals(1)) {
		nt = hsq
	} else {
		hsq = hsq.times(half).plus(half).sqrt()
		nt = nt.times(hsq)
	}
}
function pi_calculate() {
	it = it.plus(1)
	pi_series()
	pi = two.div(nt)
}