var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops'.toUpperCase();
console.log(dinosaur);


console.log(text.replace('Velociraptor', dinosaur));

var newText = text.replace('Velociraptor', dinosaur)

console.log(newText.substr(0, text.length / 2));