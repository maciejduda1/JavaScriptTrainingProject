var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries'); //<ul>

// Listeners
$('#search').click(searchCountries);

function searchCountries() {
	$('#full-info').css("display", "none");
	var countryName = $('#country-name').val(); 
	if (!countryName.length) countryName = 	'Poland';

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList		
	});
}

function showCountriesList(resp){
	countriesList.empty();
	resp.forEach(function(item){
		if (item.name.indexOf($('#country-name').val()[0].toUpperCase()) != -1){
			var newButton = $('<button>');
			newButton.text(item.name).appendTo($('<li>').appendTo(countriesList));
			
			newButton.click(function(){
				//console.log(newButton.text());
				var countryISelected = resp.filter(function(itemsToSearch){
					return itemsToSearch.name == newButton.text();
					});
				displayCountryInfo(countryISelected);
			});	
		}
	});	
}

function displayCountryInfo(whatCountryToShow){
	var flag = whatCountryToShow[0].flag ;
	var $capital = $('#capital');
	var $currency = $('#currency');
	var $population = $('#population');
	var $countryNameFull = $('#country-name-full');
	
	$capital.empty();
	$currency.empty();
	$population.empty();
	$('#flag').empty();
	$countryNameFull.empty();

	$countryNameFull.text(whatCountryToShow[0].name);
	$('<td>').text('stolica: ').appendTo($capital);
	$('<td>').text(whatCountryToShow[0].capital).appendTo($capital);
	$('<td>').text('waluta: ').appendTo($currency);
	$('<td>').text(whatCountryToShow[0].currencies[0].name).appendTo($currency);
	$('<td>').text('populacja: ').appendTo($population);
	$('<td>').text(whatCountryToShow[0].population).appendTo($population);
	$('#flag').prepend($('<img>', {src: flag, }).css('height', 'inherit').css('width', 'inherit'));

	$('#full-info').css("display", "flex");
}




