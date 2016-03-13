// Fahri Aydos - aydos.com (2016-03-11)
// Other
var nt = new Decimal(0)
var it = new Decimal(0)
var one = new Decimal(1)
var up = new Decimal(0)
var dw = new Decimal(3)
var mt = new Decimal(1).div(3)
function pi_step() {
	if (it.equals(1)) {
		nt = one
	} else if (it.equals(2)) {
		nt = one.plus(mt)
	} else {
		up = up.plus(2)
		dw = dw.plus(2)
		mt = mt.times(up.div(dw))
		nt = nt.plus(mt)
	}
	console.log(it.toNumber(), up.toNumber(), dw.toNumber(), mt.toString())
	console.log(nt.toString())
}
function pi_calculate() {
	it = it.plus(1)
	pi_step()
	pi = nt.times(2)
}
