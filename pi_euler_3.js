// 2016-03-10 - Fahri Aydos - aydos.com
var nt = new Decimal(0)
var it = new Decimal(0)
var one = new Decimal(1)
var onethird = new Decimal(1).div(3)
function pi_series() {
	if (it.mod(2).equals(1)) {
		nt = nt.plus(one.div(it.mul(2).minus(1).pow(3)))
	} else {
		nt = nt.minus(one.div(it.mul(2).minus(1).pow(3)))
	}
}
function pi_calculate() {
	it = it.plus(1)
	pi_series()
	pi = nt.times(32).pow(onethird)
}