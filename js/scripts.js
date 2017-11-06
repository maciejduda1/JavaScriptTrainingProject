var tabManName = ['Adam', 'Wojtek', 'Tomasz', 'Fabian', 'Artur', 'Przemek'];
var tabWomanName = ['Kasia', 'Sandra', 'Angelika', 'Sylwia', 'Kinga', 'Karolina'];

// Dodaję tablice do siebie 
var tabAllNames = tabManName.concat(tabWomanName);
console.log(tabAllNames); //działa!

//Tworzymy funkcję dodającą dane do tablicy o ile już nie ma w niej duplikatu dodawanych danych!
//var newName = 'Marian';


function tableAdd(tableName, newName) {
	if (tableName.indexOf(newName) === -1) {
		 tableName.push(newName);
		 return ('Do tablicy dodano nowy zapis: ' + newName + ' Obecnie w tablicy znajdują się następujące elementy: ' + tableName );
	}
	else {
		return ('Starasz się dodać duplikat! Nie ma na to zgody w tym mieście! :)  ' + ' Aktualna zawartość tablicy się nie zmieniła i wynosi: ' + tableName );
	}
}

console.log(tableAdd(['Adam', 'Wojtek', 'Tomasz', 'Fabian', 'Artur', 'Przemek'], 'Tomasz')); // dodano duplikat
console.log(tableAdd(['Adam', 'Wojtek', 'Tomasz', 'Fabian', 'Artur', 'Przemek'], 'Maciek')); //dodano nowy zapis

