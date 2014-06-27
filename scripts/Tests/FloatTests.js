function ResultsFloatMax()
{
	deepEqual(firstShortBox.value,	"-1",						"");
	deepEqual(secondShortBox.value, "32639",					"");
	deepEqual(firstBinaryBox.value, "1111111111111111", 		"");
	deepEqual(secondBinaryBox.value,"0111111101111111",			"");
	deepEqual(hexBox.value,			"7f7fffff",					"");
	deepEqual(floatBox.value,		"3.4028234663852886e+38", 	"");
	deepEqual(int32Box.value,		"2139095039", 				"");
	deepEqual(uInt32Box.value,		"2139095039", 				"");
}

test ( "Shorts: FloatMax", function() {
	firstShortBox.value = "-1";
	secondShortBox.value = "32639";
	secondShortBox.onchange();
	
	ResultsFloatMax();
});
test ( "Binaries: FloatMax", function() {
	firstBinaryBox.value = "1111111111111111";
	secondBinaryBox.value = "0111111101111111";
	secondBinaryBox.onchange();
	
	ResultsFloatMax();
});
test ( "Hex: FloatMax", function() {
	hexBox.value = "7f7fffff";
	hexBox.onchange();
	
	ResultsFloatMax();
});
test ( "Float: FloatMax", function() {
	floatBox.value = "3.4028234663852886e+38";
	floatBox.onchange();
	
	ResultsFloatMax();
});
test ( "Int32: FloatMax", function() {
	int32Box.value = "2139095039";
	int32Box.onchange();
	
	ResultsFloatMax();
});
test ( "UInt32: FloatMax", function() {
	uInt32Box.value = "2139095039";
	uInt32Box.onchange();
	
	ResultsFloatMax();
});

function ResultsFloatMinPositive()
{
	deepEqual(firstShortBox.value,	"-1",						"");
	deepEqual(secondShortBox.value, "127",						"");
	deepEqual(firstBinaryBox.value, "1111111111111111", 		"");
	deepEqual(secondBinaryBox.value,"0000000001111111",			"");
	deepEqual(hexBox.value,			"7fffff",					"");
	deepEqual(floatBox.value,		"1.1754942106924411e-38",	"");
	deepEqual(int32Box.value,		"8388607", 					"");
	deepEqual(uInt32Box.value,		"8388607", 					"");
}

test ( "Shorts: FloatMinPositive", function() {
	firstShortBox.value = "";
	secondShortBox.value = "";
	secondShortBox.onchange();
	
	ResultsFloatMinPositive();
});
test ( "Binaries: FloatMinPositive", function() {
	firstBinaryBox.value = "";
	secondBinaryBox.value = "";
	secondBinaryBox.onchange();
	
	ResultsFloatMinPositive();
});
test ( "Hex: FloatMinPositive", function() {
	hexBox.value = "";
	hexBox.onchange();
	
	ResultsFloatMinPositive();
});
test ( "Float: FloatMinPositive", function() {
	floatBox.value = "";
	floatBox.onchange();
	
	ResultsFloatMinPositive();
});

test ( "Int32: FloatMinPositive", function() {
	int32Box.value = "";
	int32Box.onchange();
	
	ResultsFloatMinPositive();
});
test ( "UInt32: FloatMinPositive", function() {
	uInt32Box.value = "";
	uInt32Box.onchange();
	
	ResultsFloatMinPositive();
});