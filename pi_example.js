// your name and date of file is the first line
// the owner of the serie is second line
// reference is third line

// variables
// define variable for this series
// use n for nth value of the serie
var n = new Decimal(0) // if summation use Decimal(0)
//var n = new Decimal(1) // if multiplication use Decimal(1)

// if there
var one = new Decimal(1)
var onefourth = new Decimal(1).div(4)


var x = 9007199254740992;
// DONT redefine these global variables:
// pi, pr, i, real, dc, it, sl


// to display mathematical formula
//http://mathjax.github.io/MathJax-RespEq/Semantics-Lab/walker/?1;100;HTML-CSS;complexity;false;syntactic;none;blue;black;pi%20/%204%20%3D%201%20-1/3%20+%201/5
function pi_math() {
	return "\\pi=3.14159\\cdots"
}
// test your equation here:
//    http://mathjax.github.io/MathJax-RespEq/Semantics-Lab/walker/
// CAUTION for \ : Original formula is
//    \pi=3.14159\cdots
// here we use \\ for each \
//    \\pi=3.14159\\cdots