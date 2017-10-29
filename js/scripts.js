var a = prompt('podaj a: ');
var b = prompt('podaj b: ');
var value = - (a * a) - (2 * a * b) + (b * b);

console.log (value);
if (value < 0) {
	console.log(' wynik jest mniejszy niż 0, gdyż wynosi ' + value);
	alert(' wynik jest mniejszy niż 0, gdyż wynosi ' + value);
}
else if (value > 0) {
	console.log(' wynik jest większy niż 0, gdyż wynosi ' + value);
	alert(' wynik jest większy niż 0, gdyż wynosi ' + value);
}
else {
	console.log('wynik wynosi 0');
	alert ('wynik wynosi 0!');
}
