function ResultsZero()
{
	deepEqual(firstShortBox.value, "0", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "0", "");
	deepEqual(secondBinaryBox.value, "0", "");
	deepEqual(hexBox.value, "0", "");
	deepEqual(floatBox.value, "0", "");
	deepEqual(int32Box.value, "0", "");
	deepEqual(uInt32Box.value, "0", "");
}

test ( "Shorts: Zero", function() {
	ClearAll();
	firstShortBox.value = "0";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsZero();
});
test ( "Binaries: Zero", function() {
	ClearAll();
	firstBinaryBox.value = "0";
	secondBinaryBox.value = "0";
	secondBinaryBox.onchange();
	
	ResultsZero();
});
test ( "Hex: Zero", function() {
	ClearAll();
	hexBox.value = "0";
	hexBox.onchange();
	
	ResultsZero();
});
test ( "Float: Zero", function() {
	ClearAll();
	floatBox.value = "0";
	floatBox.onchange();
	
	ResultsZero();
});
test ( "Int32: Zero", function() {
	ClearAll();
	int32Box.value = "0";
	int32Box.onchange();
	
	ResultsZero();
});
test ( "UInt32: Zero", function() {
	ClearAll();
	uInt32Box.value = "0";
	uInt32Box.onchange();
	
	ResultsZero();
});

//------------------------------------------------------------------

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

//------------------------------------------------------------------

function ResultsNegativeSeven()
{
	deepEqual(firstShortBox.value, "-7", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "1111111111111001", "");
	deepEqual(secondBinaryBox.value, "0", "");
	deepEqual(hexBox.value, "fff9", "");
	deepEqual(floatBox.value, "9.182568706874094e-41", "");
	deepEqual(int32Box.value, "65529", "");
	deepEqual(uInt32Box.value, "65529", "");
}

test ( "Shorts: -7", function() {
	ClearAll();
	firstShortBox.value = "-7";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsNegativeSeven();
});
test ( "Binaries: -7", function() {
	ClearAll();
	firstBinaryBox.value = "1111111111111001";
	secondBinaryBox.value = "0";
	secondBinaryBox.onchange();
	
	ResultsNegativeSeven();
});
test ( "Hex: -7", function() {
	ClearAll();
	hexBox.value = "fff9";
	hexBox.onchange();
	
	ResultsNegativeSeven();
});
test ( "Float: -7", function() {
	ClearAll();
	floatBox.value = "9.182568706874094e-41";
	floatBox.onchange();
	
	ResultsNegativeSeven();
});
test ( "Int32: -7", function() {
	ClearAll();
	int32Box.value = "65529";
	int32Box.onchange();
	
	ResultsNegativeSeven();
});
test ( "UInt32: -7", function() {
	ClearAll();
	uInt32Box.value = "65529";
	uInt32Box.onchange();
	
	ResultsNegativeSeven();
});

//------------------------------------------------------------------

function ResultsFirstShortMax()
{
	deepEqual(firstShortBox.value, "32767", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "111111111111111", "");
	deepEqual(secondBinaryBox.value, "0", "");
	deepEqual(hexBox.value, "7fff", "");
	deepEqual(floatBox.value, "4.591634678053128e-41", "");
	deepEqual(int32Box.value, "32767", "");
	deepEqual(uInt32Box.value, "32767", "");
}

test ( "Shorts: FirstShortMax", function() {
	ClearAll();
	firstShortBox.value = "32767";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsFirstShortMax();
});
test ( "Binaries: FirstShortMax", function() {
	ClearAll();
	firstBinaryBox.value = "111111111111111";
	secondBinaryBox.value = "0";
	secondBinaryBox.onchange();
	
	ResultsFirstShortMax();
});
test ( "Hex: FirstShortMax", function() {
	ClearAll();
	hexBox.value = "7fff";
	hexBox.onchange();
	
	ResultsFirstShortMax();
});
test ( "Float: FirstShortMax", function() {
	ClearAll();
	floatBox.value = "4.591634678053128e-41";
	floatBox.onchange();
	
	ResultsFirstShortMax();
});
test ( "Int32: FirstShortMax", function() {
	ClearAll();
	int32Box.value = "32767";
	int32Box.onchange();
	
	ResultsFirstShortMax();
});
test ( "UInt32: FirstShortMax", function() {
	ClearAll();
	uInt32Box.value = "32767";
	uInt32Box.onchange();
	
	ResultsFirstShortMax();
});

//------------------------------------------------------------------

function ResultsFirstShortMin()
{
	deepEqual(firstShortBox.value, "-32768", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "1000000000000000", "");
	deepEqual(secondBinaryBox.value, "0", "");
	deepEqual(hexBox.value, "8000", "");
	deepEqual(floatBox.value, "4.591774807899561e-41", "");
	deepEqual(int32Box.value, "32768", "");
	deepEqual(uInt32Box.value, "32768", "");
}

test ( "Shorts: FirstShortMin", function() {
	ClearAll();
	firstShortBox.value = "-32768";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsFirstShortMin();
});
test ( "Binaries: FirstShortMin", function() {
	ClearAll();
	firstBinaryBox.value = "1000000000000000";
	secondBinaryBox.value = "0";
	secondBinaryBox.onchange();
	
	ResultsFirstShortMin();
});
test ( "Hex: FirstShortMin", function() {
	ClearAll();
	hexBox.value = "8000";
	hexBox.onchange();
	
	ResultsFirstShortMin();
});
test ( "Float: FirstShortMin", function() {
	ClearAll();
	floatBox.value = "4.591774807899561e-41";
	floatBox.onchange();
	
	ResultsFirstShortMin();
});
test ( "Int32: FirstShortMin", function() {
	ClearAll();
	int32Box.value = "32768";
	int32Box.onchange();
	
	ResultsFirstShortMin();
});
test ( "UInt32: FirstShortMin", function() {
	ClearAll();
	uInt32Box.value = "32768";
	uInt32Box.onchange();
	
	ResultsFirstShortMin();
});

//------------------------------------------------------------------

function ResultsSecondShortMax()
{
	deepEqual(firstShortBox.value, "0", "");
	deepEqual(secondShortBox.value, "32767", "");
	deepEqual(firstBinaryBox.value, "0", "");
	deepEqual(secondBinaryBox.value, "111111111111111", "");
	deepEqual(hexBox.value, "7fff0000", "");
	deepEqual(floatBox.value, "NaN", "");
	deepEqual(int32Box.value, "2147418112", "");
	deepEqual(uInt32Box.value, "2147418112", "");
}

test ( "Shorts: SecondShortMax", function() {
	ClearAll();
	firstShortBox.value = "0";
	secondShortBox.value = "32767";
	secondShortBox.onchange();
	
	ResultsSecondShortMax();
});
test ( "Binaries: SecondShortMax", function() {
	ClearAll();
	firstBinaryBox.value = "0";
	secondBinaryBox.value = "111111111111111";
	secondBinaryBox.onchange();
	
	ResultsSecondShortMax();
});
test ( "Hex: SecondShortMax", function() {
	ClearAll();
	hexBox.value = "7fff0000";
	hexBox.onchange();
	
	ResultsSecondShortMax();
});
test ( "Int32: SecondShortMax", function() {
	ClearAll();
	int32Box.value = "2147418112";
	int32Box.onchange();
	
	ResultsSecondShortMax();
});
test ( "UInt32: SecondShortMax", function() {
	ClearAll();
	uInt32Box.value = "2147418112";
	uInt32Box.onchange();
	
	ResultsSecondShortMax();
});

//------------------------------------------------------------------

function ResultsSecondShortMin()
{
	deepEqual(firstShortBox.value, "0", "");
	deepEqual(secondShortBox.value, "-32768", "");
	deepEqual(firstBinaryBox.value, "0", "");
	deepEqual(secondBinaryBox.value, "1000000000000000", "");
	deepEqual(hexBox.value, "80000000", "");
	deepEqual(floatBox.value, "0", "");
	deepEqual(int32Box.value, "-2147483648", "");
	deepEqual(uInt32Box.value, "2147483648", "");
}

test ( "Shorts: SecondShortMin", function() {
	ClearAll();
	firstShortBox.value = "0";
	secondShortBox.value = "-32768";
	secondShortBox.onchange();
	
	ResultsSecondShortMin();
});
test ( "Binaries: SecondShortMin", function() {
	ClearAll();
	firstBinaryBox.value = "0";
	secondBinaryBox.value = "1000000000000000";
	secondBinaryBox.onchange();
	
	ResultsSecondShortMin();
});
test ( "Hex: SecondShortMin", function() {
	ClearAll();
	hexBox.value = "80000000";
	hexBox.onchange();
	
	ResultsSecondShortMin();
});
test ( "Int32: SecondShortMin", function() {
	ClearAll();
	int32Box.value = "-2147483648";
	int32Box.onchange();
	
	ResultsSecondShortMin();
});
test ( "UInt32: SecondShortMin", function() {
	ClearAll();
	uInt32Box.value = "2147483648";
	uInt32Box.onchange();
	
	ResultsSecondShortMin();
});

//------------------------------------------------------------------

function ResultsBothShortsMax()
{
	deepEqual(firstShortBox.value, "32767", "");
	deepEqual(secondShortBox.value, "32767", "");
	deepEqual(firstBinaryBox.value, "111111111111111", "");
	deepEqual(secondBinaryBox.value, "111111111111111", "");
	deepEqual(hexBox.value, "7fff7fff", "");
	deepEqual(floatBox.value, "NaN", "");
	deepEqual(int32Box.value, "2147450879", "");
	deepEqual(uInt32Box.value, "2147450879", "");
}

test ( "Shorts: BothShortsMax", function() {
	ClearAll();
	firstShortBox.value = "32767";
	secondShortBox.value = "32767";
	secondShortBox.onchange();
	
	ResultsBothShortsMax();
});
test ( "Binaries: BothShortsMax", function() {
	ClearAll();
	firstBinaryBox.value = "111111111111111";
	secondBinaryBox.value = "111111111111111";
	secondBinaryBox.onchange();
	
	ResultsBothShortsMax();
});
test ( "Hex: BothShortsMax", function() {
	ClearAll();
	hexBox.value = "7fff7fff";
	hexBox.onchange();
	
	ResultsBothShortsMax();
});
test ( "Int32: BothShortsMax", function() {
	ClearAll();
	int32Box.value = "2147450879";
	int32Box.onchange();
	
	ResultsBothShortsMax();
});
test ( "UInt32: BothShortsMax", function() {
	ClearAll();
	uInt32Box.value = "2147450879";
	uInt32Box.onchange();
	
	ResultsBothShortsMax();
});

//Tests to write:
//max & min values of 32 bit signed int
//max & min values of float
//all max values plus one
//all min values minus one