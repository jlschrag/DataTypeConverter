var firstShortBox;
var secondShortBox;
var firstBinaryBox;
var secondBinaryBox;
var hexValueBox;
var floatValueBox;
var I4ValueBox;
var UI4ValueBox;

window.onload = function()
{
	firstShortBox = document.getElementById('firstShort');
	secondShortBox = document.getElementById('secondShort');
	firstBinaryBox = document.getElementById('firstBinary');
	secondBinaryBox = document.getElementById('secondBinary');
	hexValueBox = document.getElementById('hexValue');
	floatValueBox = document.getElementById('floatValue');
	I4ValueBox = document.getElementById('I4Value');
	UI4ValueBox = document.getElementById('UI4Value');
}

function SwapRegisters()
{
	alert("Register swap not yet implemented");
}

//incoming values expected to be signed 16 bit integers
function RegistersChanged()
{
	var temp = parseInt(firstShortBox.value);
	var intArray = new Int16Array(2);
	intArray[0] = temp;

	temp = parseInt(secondShortBox.value);
	intArray[1] = temp;

	SetValues(intArray.buffer);
}

function BinaryChanged()
{
	var intArray = new Int16Array(2);
	var temp = parseInt(firstBinaryBox.value, 2);
	intArray[0] = temp;

	temp = parseInt(secondBinaryBox.value, 2);
	intArray[1] = temp;

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
	uIntArray[0] = parseInt(UI4ValueBox.value);
	SetValues(uIntArray.buffer);
}

function SetValues(rawValueBuffer)
{
	var floatArray = new Float32Array(rawValueBuffer);
	floatValueBox.value = floatArray[0].toString();
	
	var intArray = new Int32Array(rawValueBuffer);
	I4ValueBox.value = intArray[0].toString();
	
	var uIntArray = new Uint32Array(rawValueBuffer);
	UI4ValueBox.value = uIntArray[0].toString();
	
	hexValueBox.value = intArray[0].toString(16);
	
	var shortArray = new Int16Array(rawValueBuffer, 0, 2);
	firstShortBox.value = shortArray[0];
	secondShortBox.value = shortArray[1];
	firstBinaryBox.value = shortArray[0].toString(2);
	secondBinaryBox.value = shortArray[1].toString(2);
}