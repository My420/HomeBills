'use strict';

( function() {
var kitchenNew = document.querySelector("#waterKitchen");
var kitchenPrev = document.querySelector("#waterKitchenPrev");
var bathNew = document.querySelector("#waterBath");
var bathPrev = document.querySelector("#waterBathPrev");
var waterTarif = document.querySelector("#waterTarif");
var waterCost = document.querySelector("#waterCost");
var waterCosPrev = document.querySelector("#waterCostPrev");
var buttonWater = document.querySelector("#buttonWater");


var electricityNew = document.querySelector("#electricity");
var electricityPrev = document.querySelector("#electricityPrev");
var electricityTarif = document.querySelector("#electricityTarif");
var electricityCost = document.querySelector("#electricityCost");
var electricityCosPrev = document.querySelector("#electricityCostPrev");
var buttonElectricity= document.querySelector("#buttonElectricity" );


var gasNew = document.querySelector("#gas");
var gasPrev = document.querySelector("#gasPrev");
var gasTarif = document.querySelector("#gasTarif");
var gasCost = document.querySelector("#gasCost");
var gasCosPrev = document.querySelector("#gasCostPrev");
var buttonGas = document.querySelector("#buttonGas");

var currentValue = {
	new: 0,
	prev: 0,
	tarif: 0,
	cost: 0,	
};

var findElectricityTarif = function() {	
	if (currentValue.new - currentValue.prev <= 150){
		return 2.43;
	} else if(currentValue.new - currentValue.prev <= 800) {
		return 3.04;
	} else {
		return 4.95;
	}
};

var calckValue = function (text) {	  
	switch (text) {
		case "water":
		currentValue.new = (+kitchenNew.value) + (+bathNew.value);	
		currentValue.prev = (+kitchenPrev.value) + (+bathPrev.value);
		currentValue.tarif = (+waterTarif.value);
		currentValue.cost = ((currentValue.new - currentValue.prev) * currentValue.tarif).toFixed(2);
		waterCost.value = currentValue.cost; 		
		break;
		case "electricity":
		currentValue.new = (+electricityNew.value);		
		currentValue.prev = (+electricityPrev.value);
		currentValue.tarif = findElectricityTarif();
		currentValue.cost = ((currentValue.new - currentValue.prev) * currentValue.tarif).toFixed(2);
		electricityCost.value = currentValue.cost;
		electricityTarif.value = currentValue.tarif;
		break; 				 
	};	
};




buttonWater.addEventListener("click", function(evt) {
	evt.preventDefault();
	calckValue("water");

});

buttonElectricity.addEventListener("click", function(evt) {
	evt.preventDefault();
	calckValue("electricity");

});


})();