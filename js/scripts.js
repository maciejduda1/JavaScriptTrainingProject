var pageButton = document.getElementsByClassName('button');
// console.log(pageButton.length); - wyświetla ilość elementów z klasą button (3)
// console.log(pageButton); - wyświetla tablicę z 3 elementami <button.button>

for(i = 0; i != pageButton.length; i++) {
	console.log(pageButton[i].innerText);
}
// Powyżej, moja droga dochodzenia do rozwiązania ;) 