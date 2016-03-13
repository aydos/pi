// Fahri Aydos - aydos.com (2016-03-13)
// John Wallis (1616-1703)
var n = new Decimal(1)
var one = new Decimal(1)
var two = new Decimal(2)
function pi_step() {
	var k = new Decimal(i*2)
	n = n.times(one.minus(one.div(k.times(k))))
}
function pi_calc() {
	pi_step()
	pi = two.div(n)
}