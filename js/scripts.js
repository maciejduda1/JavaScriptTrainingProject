function Phone(brand, price, color, oes) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.oes = oes;
	this.getWarrantyCost = function(){
		return price * 0.1;
	};
	this.extVarrancy = price * 0.1; 

}

Phone.prototype.printInfo = function(){
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.' + 'the cost of extended varrancy is ' + this.getWarrantyCost()); 
};

Phone.prototype.oesVersion = function(){
	console.log('The oes of ' + this.brand + ' is: ' + this.oes);
};

Phone.prototype.extendedVarrancyPrice = function(){
	console.log('the extended Varrancy Price of this phone is: ' + this.extVarrancy);
};

var samsungGalaxyS6 = new Phone("Samsung", 1500, "black", "Android");
var iPhone6S = new Phone("Apple", 2250, "silver", "Iphone");  
var onePlusOne = new Phone("加科技", 800, "yellow", "Android");

iPhone6S.printInfo();
iPhone6S.oesVersion();
iPhone6S.extendedVarrancyPrice();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();