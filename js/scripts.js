var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var jokeparagraph = document.getElementById('joke');

button.addEventListener('click', function(){
	getJoke();
});

function getJoke(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		jokeparagraph.innerHTML = response.value.joke;
	});
	xhr.send();
}

getJoke();