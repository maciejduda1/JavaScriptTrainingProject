var tabManName = ['Adam', 'Wojtek', 'Tomasz', 'Fabian', 'Artur', 'Przemek'];
var tabWomanName = ['Kasia', 'Sandra', 'Angelika', 'Sylwia', 'Kinga', 'Karolina'];

// Dodaję tablice do siebie 
var tabAllNames = tabManName.concat(tabWomanName);
console.log(tabAllNames); //działa!

//Tworzymy funkcję dodającą dane do tablicy o ile już nie ma w niej duplikatu dodawanych danych!
var newName = 'Marian';

function tableAdd(newName) {
	if (tabAllNames.indexOf(newName) === -1) {
		return tabAllNames.push(newName);
	}
	else {
		return console.log('Duplikat!');
	}
}

console.log(tableAdd(newName)); //zgodnie z funkcją push, jako wartość funkcja zwraca długość tablicy. W przypadku duplikatu, zwraca wartość Undefined.
console.log(tabAllNames); // jak widać, po wywołaniu funkcji, tablica się zmieniła - rozrosła
