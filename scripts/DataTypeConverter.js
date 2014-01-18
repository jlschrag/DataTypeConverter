var firstShortBox;
var secondShortBox;
var firstBinaryBox;
var secondBinaryBox;
var hexBox;
var floatBox;
var int32Box;
var uInt32Box;

window.onload = function()
{
	firstShortBox = document.getElementById('firstShort');
	secondShortBox = document.getElementById('secondShort');
	firstBinaryBox = document.getElementById('firstBinary');
	secondBinaryBox = document.getElementById('secondBinary');
	hexBox = document.getElementById('hexBox');
	floatBox = document.getElementById('floatBox');
	int32Box = document.getElementById('int32Box');
	uInt32Box = document.getElementById('uInt32Box');
}

function SwapRegisters()
{
	alert("Register swap not yet implemented");
}

//incoming values expected to be signed 16 bit integers
function ShortChanged()
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
	var hexString = hexBox.value;
	var temp = parseInt(hexString, 16);
	
	var intArray = new Int32Array(1);
	intArray[0] = temp;
	SetValues(intArray.buffer);
}

function FloatChanged()
{
	var floatArray = new Float32Array(1);
	floatArray[0] = parseFloat(floatBox.value);
	SetValues(floatArray.buffer);
}

function Int32Changed()
{
	var intArray = new Int32Array(1);
	intArray[0] = parseInt(int32Box.value);
	SetValues(intArray.buffer);
}

function UInt32Changed()
{
	var uIntArray = new Uint32Array(1);
	uIntArray[0] = parseInt(uInt32Box.value);
	SetValues(uIntArray.buffer);
}

function SetValues(rawValueBuffer)
{
	var floatArray = new Float32Array(rawValueBuffer);
	floatBox.value = floatArray[0].toString();
	
	var intArray = new Int32Array(rawValueBuffer);
	int32Box.value = intArray[0].toString();
	
	var uIntArray = new Uint32Array(rawValueBuffer);
	uInt32Box.value = uIntArray[0].toString();
	
	hexBox.value = intArray[0].toString(16);
	
	var shortArray = new Int16Array(rawValueBuffer, 0, 2);
	firstShortBox.value = shortArray[0];
	secondShortBox.value = shortArray[1];
	firstBinaryBox.value = shortArray[0].toString(2);
	secondBinaryBox.value = shortArray[1].toString(2);
}

function ClearAll()
{
	var elements = document.getElementsByTagName("input");
	for (var i=0; i < elements.length; i++)
	{
		if (elements[i].type == "text")
		{
			elements[i].value = "";
		}
	}
}