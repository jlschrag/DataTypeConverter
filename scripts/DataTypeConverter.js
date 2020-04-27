var firstShortBox;
var secondShortBox;
var firstBinaryBox;
var secondBinaryBox;
var hexBox;
var floatBox;
var int32Box;
var uInt32Box;
var asciiBox;

var dateBox;
var timeBox;
var unixTimeBox;

const MILLISECONDS_IN_A_SECOND = 1000;

window.onload = function()
{
	document.getElementById('qunit').style.display = 'none';

	firstShortBox = document.getElementById('firstShort');
	secondShortBox = document.getElementById('secondShort');
	firstBinaryBox = document.getElementById('firstBinary');
	secondBinaryBox = document.getElementById('secondBinary');
	hexBox = document.getElementById('hexBox');
	floatBox = document.getElementById('floatBox');
	int32Box = document.getElementById('int32Box');
	uInt32Box = document.getElementById('uInt32Box');
	asciiBox = document.getElementById('asciiBox');
	
	dateBox = document.getElementById('dateBox');
	timeBox = document.getElementById('timeBox');
	unixTimeBox = document.getElementById('unixTimeBox');
}

function SwapShorts()
{
	var temp = firstShortBox.value;
	firstShortBox.value = secondShortBox.value;
	secondShortBox.value = temp;
	ShortChanged();
}

//incoming values expected to be signed 16 bit integers
function ShortChanged()
{
	var intArray = new Int16Array(2);
	intArray[0] = parseInt(firstShortBox.value);
	intArray[1] = parseInt(secondShortBox.value);

	SetValues(intArray.buffer);
}

function BinaryChanged()
{
	var intArray = new Int16Array(2);
	intArray[0] = parseInt(firstBinaryBox.value, 2);
	intArray[1] = parseInt(secondBinaryBox.value, 2);

	SetValues(intArray.buffer);
}

function HexChanged()
{	
	var intArray = new Int32Array(1);
	var hexString = hexBox.value;
	intArray[0] = parseInt(hexString, 16);
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

function AsciiChanged()
{
	var asciiArray = new Int8Array(4);
	asciiArray[3] = asciiBox.value.charCodeAt(0);
	asciiArray[2] = asciiBox.value.charCodeAt(1);
	asciiArray[1] = asciiBox.value.charCodeAt(2);
	asciiArray[0] = asciiBox.value.charCodeAt(3);

	SetValues(asciiArray.buffer);
}

function SetValues(rawValueBuffer)
{
	var floatArray = new Float32Array(rawValueBuffer);
	floatBox.value = floatArray[0].toString();
	
	var intArray = new Int32Array(rawValueBuffer);
	int32Box.value = intArray[0].toString();
	
	var uIntArray = new Uint32Array(rawValueBuffer);
	uInt32Box.value = uIntArray[0].toString();
	
	hexBox.value = Math.abs(intArray[0]).toString(16);
	
	LoadAsciiBox(rawValueBuffer);
	LoadShortBoxes(rawValueBuffer);
	PadBinaryBoxesWithZeros();
}

function PadBinaryBoxesWithZeros()
{
	firstBinaryBox.value = "0000000000000000".slice(0, 16 - firstBinaryBox.value.length)
						   + firstBinaryBox.value;
	secondBinaryBox.value = "0000000000000000".slice(0, 16 - secondBinaryBox.value.length)
							+ secondBinaryBox.value;
}

function LoadShortBoxes(rawValueBuffer)
{
	var shortArray = new Int16Array(rawValueBuffer, 0, 2);
	firstShortBox.value = shortArray[0];
	secondShortBox.value = shortArray[1];

	//Convert to Two's Complement if negative
	if (shortArray[0] < 0) firstBinaryBox.value = (0xFFFF + shortArray[0] + 1).toString(2);
	else firstBinaryBox.value = shortArray[0].toString(2);
	
	if (shortArray[1] < 0) secondBinaryBox.value = (0xFFFF + shortArray[1] + 1).toString(2);
	else secondBinaryBox.value = shortArray[1].toString(2);
}

//Parses ascii values from raw value buffer & fills ascii box
function LoadAsciiBox(rawValueBuffer)
{
	asciiBox.value = "";
	var eightBitArray = new Int8Array(rawValueBuffer, 0, 4);
	
	for (var i = 3; i >= 0; i--)
	{
		if (IsPrintableCharacter(eightBitArray[i]))
		{
			asciiBox.value += String.fromCharCode(eightBitArray[i]);
		}
		else asciiBox.value += ".";
	}
}

//determines if given character displays a visible symbol
function IsPrintableCharacter(characterCode)
{
	return characterCode >= 32
		   && characterCode != 127;
}

function DateTimeChanged()
{
	let dateTime = new Date(dateBox.value + 'T' + timeBox.value + 'Z');
	let unixSeconds = Math.round(dateTime.getTime() / MILLISECONDS_IN_A_SECOND);
	unixTimeBox.value = unixSeconds;
}

function UnixTimeChanged()
{
	let seconds = parseInt(unixTimeBox.value);
	let dateTime = new Date(seconds * MILLISECONDS_IN_A_SECOND);
	SetDateAndTimeBoxValues(dateTime);
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

function InitializeForm()
{
	firstShortBox.value = "0";
	secondShortBox.value = "0";
	firstBinaryBox.value = "0";
	secondBinaryBox.value = "0";
	hexBox.value = "0";
	floatBox.value = "0";
	int32Box.value = "0";
	uInt32Box.value = "0";

	let currentDateTime = new Date();
	SetDateAndTimeBoxValues(currentDateTime);
	unixTimeBox.value = Math.round(currentDateTime.getTime() / MILLISECONDS_IN_A_SECOND);
}

function SetDateAndTimeBoxValues(dateTime)
{
	dateBox.value = dateTime.toISOString().substring(0, 10);
	timeBox.value = dateTime.toISOString().substring(11, 19);
}

function ShowHideUnitTests()
{
	var element = document.getElementById('qunit');
	
	if(element.style.display === 'block') element.style.display = 'none';
	else element.style.display = 'block';
}