var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var text2 = 'T-Rex is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops'.toUpperCase();
var dinosaur2 = 'Misiek';
console.log(text.replace(text.split(' ')[0], dinosaur).substr(0, text.length / 2));
console.log(text.replace(text.split(' ')[0], dinosaur2).substr(0, text.length / 2));
console.log(text2.replace(text2.split(' ')[0], dinosaur2).substr(0, text.length / 2));
//Działa! 
// Powiem szczerze. Sam się zaskoczyłem tym, że to zadziałało :D Na czuja to wpisałem.
// Choć jak teraz o tym myślę, to ma to sens :) 
