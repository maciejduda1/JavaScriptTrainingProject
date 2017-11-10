// Deklaracje zmiennych:
var newGameBtn = document.getElementById('js-newGameButton');                             //Guzik rozpoczynający grę w HTML

var pickRock = document.getElementById('js-playerPick_rock');                     		  // do zmiennej przypisujemy button z HTML - pickRock
var pickPaper = document.getElementById('js-playerPick_paper');            		  		  // do zmiennej przypisujemy button z HTML - pickPaper
var pickScissors = document.getElementById('js-playerPick_scissors');            		  // do zmiennej przypisujemy button z HTML - pickScisors

var gameState = 'notStarted',  //started // ended										  // tworzymy zmienne obiektowe o parametrach score i name, //w których przechowujemy dane gracza i wynik // zmienne: gameState, player, computer
	player = {																			  
		name: '',																		  
		score: 0
	},
	computer = {
		score: 0
	};
var newGameElem = document.getElementById('js-newGameElement');							  // tworzymy zmienne: newGameElem, pickElem, resultsElem
var pickElem = document.getElementById('js-playerPickElement');							  // zmiennym przypisujemy div z HTML zawierające buttony
var resultsElem = document.getElementById('js-resultsTableElement');
var winnerScreen = document.getElementById('js-winnerScreenElement');

var playerPointsElem = document.getElementById('js-playerPoints');							// tworzymy zmienne playerPointsElem, playerNameElem, computerPointsElem 
var playerNameElem = document.getElementById('js-playerName');								// zmiennym przypisujemy odpowiednie spany (linie) w ramach div tworzącego tablicę wyników ('js-resultsTableElement')
var computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');								// Tworzymy zmienne playerPickElem, computerPickElem, playerResultElem, computerResultElem
var computerPickElem = document.getElementById('js-computerPick');							// przypisujemy im kolejne spany (linie) z tabliczy wyników
var playerResultElem = document.getElementById('js-playerResult');							
var computerResultElem = document.getElementById('js-computerResult');

//Listenery:

newGameBtn.addEventListener('click', newGame);                                            // Przypisujemy mu nasłuchiwanie eventu - kliknięcia w newGame. co powoduje odpalenie
																						  // funkcji newGame - pobiera imię gracza i zaczyna grę. Szczegóły w linii 78-87.																  
pickRock.addEventListener('click', function() { playerPick('rock'); });					  // Na zmienną dodajemy listener eventu 'click'. Odpali on funkcję wewnątrz funkcji domyślnej
pickPaper.addEventListener('click', function() { playerPick('paper'); });				  // o parametrze 'rock', 'paper' lub 'scisors' - string! funkcja opisana w linii 97-98
pickScissors.addEventListener('click', function() { playerPick('scissors'); });

// Funkcje:

function setGameElements() {	
	winnerScreen.style.display = 'none';
	winnerScreen.style.textAlign = 'center';											  // Funkcja setGameElements:
	switch(gameState) {																	  // przyjmuje wartość zmiennej gameState (domyślnie 'notStarted' (opcja z default) - linia 14)
		case 'started':																	  // porównuje wartość zmiennej z przypadkami i w zależności od wartości zmiennej
			newGameElem.style.display = 'none';                                           // ukrywa lub pokazuje części HTML (divy) z linii 16-19
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			winnerScreen.style.display = 'none';
			break;
		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
			winnerScreen.style.display = 'block';
			break;
		case 'notStarted':
			break;                                            
			default:
				newGameElem.style.display = 'block';
				pickElem.style.display = 'none';
				resultsElem.style.display = 'none';
				winnerScreen.style.display = 'none';
	}
}

function newGame() {																		// funkcja newGame, odpalana po kilknięciu w przycisk newGameBtn
	player.name = prompt('Please enter your name', 'imię gracza');							// pyta o imię gracza i zapisuje w zmiennej player
	if (player.name) {																		// podanie danych powoduje szereg działań programu:
		player.score = computer.score = 0;													// 1. Ustala wartość wyniku w ramach zmiennej player i computer na 0
		gameState = 'started';																// 2. zmienia wartość zmiennej gameState na 'started' (istotne dla casów w funkcji setGameElements)
		setGameElements();																	// 3. Wywołuje funkcję setGameElements : patrz funkcja setGameElements (linia 50)
		playerNameElem.innerHTML = player.name;												// 4. zmienia kod wewnątrz elem HTML playerNameElem (linia 22) i przypisuje mu imię gracza
		setGamePoints(); 																	// 5. Uruchamia funkcję setGamePoints - linia 130 - funkcja do liczenia punktów
	}
}

function getComputerPick() {																// funkcja losująca dla komputera 
	var possiblePicks = ['rock', 'paper', 'scissors'];										// możliwe wyniki: 'rock', 'paper', 'scissors'
	return possiblePicks[Math.floor(Math.random()*3)];										// Math.random daje losową liczbę zmiennoprzecinkową (poniżej 1) * 3 = poniżej 3
}																							// Math.floor zaokrągla liczby zmiennoprzecinkowe w dół do całkowitej liczby (tu: 0, 1 , 2)
																							// dzięki temu zwracana wartość funkcji to zawsze jedna z 3 opcji!/////////
function playerPick(playerPick) {															// funkcja wyboru dla gracza i komputera - w linii 35-37 przypisaliśmy nasłuch na buttony odpowiedzialne za wybór opcji w grze
	var computerPick = getComputerPick();													//w związku z tym kliknięcie danej opcji powoduje odpalenie funkcji playerPick 
	playerPickElem.innerHTML = playerPick;													//z parametrem playerPick (string) wynikającym z kodu w linii 35-37 - 'rock', 'paper', 'scissors'
	computerPickElem.innerHTML = computerPick;
	checkRoundWinner(playerPick, computerPick);												// 1. tworzymy zmienną computerPick, a jej wartością jest wynik funkcji losujęcej dla komputera
}																							// 2. w tablicy wyników zmieniamy kod html, na wartość parametru playerPick(linia 35-37)
																							// 3. w tablicy wyników zmieniamy kod html, na wartość wynikającą z funkcji getComputerPick (zmiennej computerPick)
																							// 4. odpalamy funkcję sprawdzającą kto wygrał w grze checkRoundWinner z parametrami równymi zmiennym playerPick i computerPick!
function checkRoundWinner(playerPick, computerPick) {										// Funkcja sprawdzająca wygraną w grze przyjmująca jako parametry 2 zmienne 
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';							// 1. Ustala wartość wyniku na ' ' (zmienia kod HTML)
	 //var winnerIs = 'player';																// 2. W zależności od parametrów wejściowych zmienia wynik:
	if (playerPick == computerPick) {														// 3. Poprzez analizę przypadków, porównuje wartość parametrów playerPick i ComputerPick
		 // remis														  
	} else if (																				
		(computerPick == 'rock' &&  playerPick == 'scissors') ||
		(computerPick == 'scissors' &&  playerPick == 'paper') ||
		(computerPick == 'paper' &&  playerPick == 'rock')) {
		setResult(computerResultElem, computer); //winnerIs = 'computer';
	}
	else {
	setResult (playerResultElem, player);
	}
}

function setGamePoints() {																	// funkcja zmieniająca wynik w tablicy wyników
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
	if ((computer.score === 10) || (player.score === 10)) {
		var playerLooser = document.getElementById('js-winnerLooser');
		playerLooser.innerHTML = (computer.score === 10) ? "Przegrałeś!" : "Wygrałeś!";
		gameState = 'ended';
		setGameElements();
	} 
}

function setResult(resultElemDisplay, winningSide){
		resultElemDisplay.innerHTML = "Win!";
		winningSide.score++;
		setGamePoints();
}

// Odpalenie core gry (działają też listenery)

setGameElements(); 																			// uruchamiamy grę wywołując funkcję setGameElements. Auto start po uruchomieniu przeglądarki.


