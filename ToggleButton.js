var ToggleButtonPrototype = Object.create(HTMLButtonElement.prototype);

ToggleButtonPrototype.createdCallback = function() {
	console.info("created");
	
	this.textContent = "ToggleButton Created.";
};

ToggleButtonPrototype.enteredViewCallback = function() {
	console.info("Entered view");
};

ToggleButtonPrototype.leftViewCallback = function() {
	console.info("Left view");
};

ToggleButtonPrototype.attributeChangedCallback = function(attributeName) {
	console.info("Attribute changed", attributeName);
};

var ToggleButton = document.register("toggle-button", { 
	prototype: ToggleButtonPrototype,
	extends: "button"
});
