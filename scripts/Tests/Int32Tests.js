function ResultsIntMax()
{
	deepEqual(firstShortBox.value, "-1", "");
	deepEqual(secondShortBox.value, "32767", "");
	deepEqual(firstBinaryBox.value, "1111111111111111", "");
	deepEqual(secondBinaryBox.value, "0111111111111111", "");
	deepEqual(hexBox.value, "7fffffff", "");
	deepEqual(floatBox.value, "NaN", "");
	deepEqual(int32Box.value, "2147483647", "");
	deepEqual(uInt32Box.value, "2147483647", "");
}

test ( "Shorts: IntMax", function() {
	firstShortBox.value = "-1";
	secondShortBox.value = "32767";
	secondShortBox.onchange();
	
	ResultsIntMax();
});
test ( "Binaries: IntMax", function() {
	firstBinaryBox.value = "1111111111111111";
	secondBinaryBox.value = "0111111111111111";
	secondBinaryBox.onchange();
	
	ResultsIntMax();
});
test ( "Hex: IntMax", function() {
	hexBox.value = "7fffffff";
	hexBox.onchange();
	
	ResultsIntMax();
});
test ( "Int32: IntMax", function() {
	int32Box.value = "2147483647";
	int32Box.onchange();
	
	ResultsIntMax();
});
test ( "UInt32: IntMax", function() {
	uInt32Box.value = "2147483647";
	uInt32Box.onchange();
	
	ResultsIntMax();
});
//------------------------------------------------------------------

function ResultsIntMin()
{
	deepEqual(firstShortBox.value, "0", "");
	deepEqual(secondShortBox.value, "-32768", "");
	deepEqual(firstBinaryBox.value, "0000000000000000", "");
	deepEqual(secondBinaryBox.value, "1000000000000000", "");
	deepEqual(hexBox.value, "80000000", "");
	deepEqual(floatBox.value, "0", "");
	deepEqual(int32Box.value, "-2147483648", "");
	deepEqual(uInt32Box.value, "2147483648", "");
}

test ( "Shorts: IntMin", function() {
	firstShortBox.value = "0";
	secondShortBox.value = "-32768";
	secondShortBox.onchange();
	
	ResultsIntMin();
});
test ( "Binaries: IntMin", function() {
	firstBinaryBox.value = "0000000000000000";
	secondBinaryBox.value = "1000000000000000";
	secondBinaryBox.onchange();
	
	ResultsIntMin();
});
test ( "Hex: IntMin", function() {
	hexBox.value = "80000000";
	hexBox.onchange();
	
	ResultsIntMin();
});
test ( "Int32: IntMin", function() {
	int32Box.value = "-2147483648";
	int32Box.onchange();
	
	ResultsIntMin();
});
test ( "UInt32: IntMin", function() {
	uInt32Box.value = "2147483648";
	uInt32Box.onchange();
	
	ResultsIntMin();
});