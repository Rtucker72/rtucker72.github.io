var dataOne;
var dataTwo;

function parseAndVerify(){
	var x = parseFloat(document.calcForm.fieldOne.value);
	var y = parseFloat(document.calcForm.fieldTwo.value);
	
	if (isNaN(x) && isNaN(y)) {
		return alert("Both data fields contain non-numeric values!");
	} else if (isNaN(x)) {
		return alert("Data field one does not contain a numeric value!");
	} else if (isNaN(y)) {
		return alert("Data field two does not contain a numeric value!");
	}
	
	dataOne = x;
	dataTwo = y;
}

function calculate(operation) {
	parseAndVerify();
	if (operation.value == "/"){
		document.calcForm.result.value = dataOne / dataTwo;
	} else if (operation.value == "*") {
		document.calcForm.result.value = dataOne * dataTwo;
	} else if (operation.value == "+") {
		document.calcForm.result.value = dataOne + dataTwo;
	} else if (operation.value == "-") {
		document.calcForm.result.value = dataOne - dataTwo;
	}
}

function checkArgument() {
	var argument = 2;
	if (document.getElementById("radioOne").checked) {
		argument = 1;
	}
	return argument;
}

function applyValue(number) {
	var x;
	
	if (number.value == 1) {
		x = 1;
	} else if (number.value == 2) {
		x = 2;
	} else if (number.value == 3) {
		x = 3;
	} else if (number.value == 4) {
		x = 4;
	} else if (number.value == 5) {
		x = 5;
	} else if (number.value == 6) {
		x = 6;
	} else if (number.value == 7) {
		x = 7;
	} else if (number.value == 8) {
		x = 8;
	} else if (number.value == 9) {
		x = 9;
	} else if (number.value == 0) {
		x = 0;
	} else if (number.value == ".") {
		x = ".";
	}
	
	if (checkArgument() == 1) {
		document.calcForm.fieldOne.value += x;
	} else {
		document.calcForm.fieldTwo.value += x;
	}
}

function clearForm() {
	document.calcForm.fieldOne.value = "";
	document.calcForm.fieldTwo.value = "";
	document.calcForm.result.value = "";
	alert("All data fields reset!")
}
