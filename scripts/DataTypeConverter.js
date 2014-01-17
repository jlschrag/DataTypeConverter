var binaryRegister1Box;
var binaryRegister2Box;
var hexValueBox;
var floatValueBox;
var I4ValueBox;
var UI4ValueBox;

function onLoad()
{	
	binaryRegister1Box = document.getElementById('binaryRegister1').value;
	binaryRegister2Box = document.getElementById('binaryRegister2').value;
	hexValueBox = document.getElementById('hexValue').value;
	floatValueBox = document.getElementById('floatValue').value;
	I4ValueBox = document.getElementById('I4Value').value;
	UI4ValueBox = document.getElementById('UI4Value').value;
	alert("Load");
}

//Convert binary to raw value & place in UI4 box
function BinaryChanged()
{
	var numberOfPlaces = 32;

	var zero = "";
	for (var i = 0; i < numberOfPlaces; i++)
	{
		zero += "0";
	}
	
	var binaryString = zero + binaryRegister1Box.value + binaryRegister2Box.value;
	binaryString = binaryString.slice(-32);
	
	var result = 0;
	
	for (var i = 0; i < numberOfPlaces; i++)
	{
		result += binaryString[i]*2^i;
	}
	UI4ValueBox.value = result;
	UI4Changed();
}

function UI4Changed()
{
	var rawValue = UI4ValueBox.value;
	hexValueBox.value = rawValue.toString(16);
	//set I4Value
	//set float value
	
}

function HexChanged()
{
	var hexString = hexValueBox.value;
	UI4ValueBox.value = parseInt(hexString, 16);
}