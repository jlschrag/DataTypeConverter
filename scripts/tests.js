test ( "Shorts: 7", function() {
	ClearAll();
	firstShortBox.value = "7";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsSeven();
});
test ( "Binaries: 7", function() {
	ClearAll();
	firstBinaryBox.value = "111";
	secondBinaryBox.value = "0";
	secondBinaryBox.onchange();
	
	ResultsSeven();
});
test ( "Hex: 7", function() {
	ClearAll();
	hexBox.value = "7";
	hexBox.onchange();
	
	ResultsSeven();
});
test ( "Float: 7", function() {
	ClearAll();
	floatBox.value = "9.80908925027372e-45";
	floatBox.onchange();
	
	ResultsSeven();
});
test ( "Int32: 7", function() {
	ClearAll();
	int32Box.value = "7";
	int32Box.onchange();
	
	ResultsSeven();
});
test ( "UInt32: 7", function() {
	ClearAll();
	uInt32Box.value = "7";
	uInt32Box.onchange();
	
	ResultsSeven();
});

function ResultsSeven()
{
	deepEqual(firstShortBox.value, "7", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "111", "");
	deepEqual(secondBinaryBox.value, "0", "");
	deepEqual(hexBox.value, "7", "");
	deepEqual(floatBox.value, "9.80908925027372e-45", "");
	deepEqual(int32Box.value, "7", "");
	deepEqual(uInt32Box.value, "7", "");
}

//Tests to write:
//Max & min values of 16 bit signed int in both registers
//max & min values of 32 bit signed int
//max & min values of float
//all max values plus one
//all min values minus one