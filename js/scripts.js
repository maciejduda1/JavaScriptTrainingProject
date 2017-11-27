var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries'); //<ul>

// Listeners
$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val(); //input ; val() - Get the current value of the first element in the set of matched elements or set the value of every matched element.

	if (!countryName.length) countryName = 	'Poland';

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp){
	countriesList.empty(); // czyści listę krajów po poprzednim zapytaniu
	resp.forEach(function(item){     // forEach() przejdzie po każdym elemencie resp i wykona finction()
		$('<li>').text(item.name).appendTo(countriesList);
	});
}