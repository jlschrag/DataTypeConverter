var binaryRegister1Box;
var binaryRegister2Box;
var hexValueBox;
var floatValueBox;
var I4ValueBox;
var UI4ValueBox;

window.onload = function()
{
	binaryRegister1Box = document.getElementById('binaryRegister1');
	binaryRegister2Box = document.getElementById('binaryRegister2');
	hexValueBox = document.getElementById('hexValue');
	floatValueBox = document.getElementById('floatValue');
	I4ValueBox = document.getElementById('I4Value');
	UI4ValueBox = document.getElementById('UI4Value');
}

function BinaryChanged()
{
	var numberOfPlaces = 16;

	var zero = "";
	for (var i = 0; i < numberOfPlaces; i++)
	{
		zero += "0";
	}
	
	var binaryString1 = zero + binaryRegister1Box.value;
	var binaryString2 = zero + binaryRegister2Box.value;
	binaryString1 = binaryString1.slice(-16);
	binaryString2 = binaryString2.slice(-16);
	var binaryString = binaryString1 + binaryString2;
alert(binaryString);
	var result = 0;
	
	for (var i = 0; i < numberOfPlaces; i++)
	{
		var character = binaryString.slice(i, i + 1);
		var bit = parseInt(character);
		result += bit*2^i;
	}
	
	
	var intArray = new Int32Array(1);
	intArray[0] = result;
	SetValues(intArray.buffer);
}

function HexChanged()
{
	var hexString = hexValueBox.value;
	var temp = parseInt(hexString, 16);
	
	var intArray = new Int32Array(1);
	intArray[0] = temp;
	SetValues(intArray.buffer);
}

function FloatChanged()
{
	var floatArray = new Float32Array(1);
	floatArray[0] = parseFloat(floatValueBox.value);
	SetValues(floatArray.buffer);
}

function I4Changed()
{
	var intArray = new Int32Array(1);
	intArray[0] = parseInt(I4ValueBox.value);
	SetValues(intArray.buffer);
}

function UI4Changed()
{
	var uIntArray = new Uint32Array(1);
	uIntArray[0] = parseInt(I4ValueBox.value);
	SetValues(uIntArray.buffer);
}

function SetValues(rawValueBuffer)
{
	var floatArray = new Int32Array(rawValueBuffer);
	floatValueBox.value = floatArray[0];
	
	var intArray = new Int32Array(floatArray.buffer);
	I4ValueBox.value = intArray[0];
	
	var uIntArray = new Uint32Array(rawValueBuffer);
	UI4ValueBox.value = uIntArray[0];
	
	hexValueBox.value = intArray[0].toString(16);
}