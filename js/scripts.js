function drawTree (treeHeight){
	for (var i = 0; i < treeHeight; i++) {
		var star = '';
		for (var  j = treeHeight; j != i; j--) {
			star += '*';
		}
		console.log(star);
	}
return 'Choinka odwrócona :>';
}
console.log(drawTree(3));

// 1. deklaruję funkcję drawTree i nadaję jej parametr treeHeight
// 2. Tworzę pętlę for, w której parametr startowy i wynosi 0, 
//    zaś funkcja kończy się gdy parametr i osiąga wartość treeHeight - parametr funkcji
// 3. Za każdą iteracją pętli deklaruję zmienną star - pustego stringa
// 4. Za każdą iteracją pętli (i) przbiegam pętlę (j).
// 5. Pętla (j) ma początkową wartość równą parametrowi funkcji (treeHeight).
//    Pętla powtarza się tak długo jak długo parametr pętli (j) jest różny od parametru pętli (i)
//    Za każdą iteracją pętli (j) do zmiennej star dodaję kolejną gwiazdkę.
//    Za każdą iteracją pętli (j) dekrementuję od jej wartości liczbę 1.
//    To oznacza, że dla parametru funkcji drawTree(3), pętla (j):
//    - zaczyna od j=3, które nie jest równe i=0 (pierwszy obieg pętli (i))
//    - do zmiennej star (pustej) dodaje gwiazdkę w 1-wszej iteracji
//    - następuje dekrementacja pętli (j)
//    - j=2 co nadal nie jest równe zero, więc następuje kolejna iteracja funkcji (j)
//    - do zmiennej star zostaje dodana kolejna gwiazdka [ star ='**']
//    - następuje dekrementacja pętli (j)
//    - j=1 co nadal nie jest równe i=0, więc następuje kolejna iteracja funkcji (j)
//    - do zmiennej star zostaje dodana kolejna gwiazdka [ star ='***']
//    - następuje dekrementacja funkcji (j)
//    - j=0 co jest równe i=0, a zatem funkcja się kończy.
//    - (spełniono warunek i != j [i różne od j = false, gdyż i = j = 0])
// 6. Następuje kolejna iteracja funkcji (i) po inkrementacji wartości i o 1
// 7. Dla kolejnej iteracji powtarzany jest krok 3 (pusty string), krok 4 (przebiegi pętli (j))
//    oraz krok 5. Przy czym w kroku piątym:
//    - zaczyna się od j=3 ale kończy na j=1 a nie 0, gdyż i w tej iteracji pętli (i) nie jest równe 0 a 1.
//    - dlatego każda kolejna iteracja rysuje mniej gwiazdek :)

function drawTree2 (treeHeight1){
	for (var i = 0; i < treeHeight1; i++) {
		var star = '';
		for (var  j = -1; j != i; j++) {
			star += '* ';
		}
		console.log(star);
	}
return 'Choinka normalna :>';
}
console.log(drawTree2(4));