//Ensure that an entry of zero in any textbox
//yields a zero in all other textboxes
function ResultsZero()
{
	deepEqual(firstShortBox.value, "0", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "0000000000000000", "");
	deepEqual(secondBinaryBox.value, "0000000000000000", "");
	deepEqual(hexBox.value, "0", "");
	deepEqual(floatBox.value, "0", "");
	deepEqual(int32Box.value, "0", "");
	deepEqual(uInt32Box.value, "0", "");
}

test ( "Shorts: Zero", function() {
	firstShortBox.value = "0";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsZero();
});
test ( "Binaries: Zero", function() {
	firstBinaryBox.value = "0000000000000000";
	secondBinaryBox.value = "0000000000000000";
	secondBinaryBox.onchange();
	
	ResultsZero();
});
test ( "Hex: Zero", function() {
	hexBox.value = "0";
	hexBox.onchange();
	
	ResultsZero();
});
test ( "Float: Zero", function() {
	floatBox.value = "0";
	floatBox.onchange();
	
	ResultsZero();
});
test ( "Int32: Zero", function() {
	int32Box.value = "0";
	int32Box.onchange();
	
	ResultsZero();
});
test ( "UInt32: Zero", function() {
	uInt32Box.value = "0";
	uInt32Box.onchange();
	
	ResultsZero();
});

//Ensure that a value of seven entered in any textbox
//in the appropriate format results in the appropriate
//value in all other textboxes
function ResultsSeven()
{
	deepEqual(firstShortBox.value, "7", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "0000000000000111", "");
	deepEqual(secondBinaryBox.value, "0000000000000000", "");
	deepEqual(hexBox.value, "7", "");
	deepEqual(floatBox.value, "9.80908925027372e-45", "");
	deepEqual(int32Box.value, "7", "");
	deepEqual(uInt32Box.value, "7", "");
}

test ( "Shorts: 7", function() {
	firstShortBox.value = "7";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsSeven();
});
test ( "Binaries: 7", function() {
	firstBinaryBox.value = "0000000000000111";
	secondBinaryBox.value = "0000000000000000";
	secondBinaryBox.onchange();
	
	ResultsSeven();
});
test ( "Hex: 7", function() {
	hexBox.value = "7";
	hexBox.onchange();
	
	ResultsSeven();
});
test ( "Float: 7", function() {
	floatBox.value = "9.80908925027372e-45";
	floatBox.onchange();
	
	ResultsSeven();
});
test ( "Int32: 7", function() {
	int32Box.value = "7";
	int32Box.onchange();
	
	ResultsSeven();
});
test ( "UInt32: 7", function() {
	uInt32Box.value = "7";
	uInt32Box.onchange();
	
	ResultsSeven();
});

//Ensure that a value of negative seven entered in any textbox
//results in the appropriate value in all other textboxes
function ResultsNegativeSeven()
{
	deepEqual(firstShortBox.value, "-7", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "1111111111111001", "");
	deepEqual(secondBinaryBox.value, "0000000000000000", "");
	deepEqual(hexBox.value, "fff9", "");
	deepEqual(floatBox.value, "9.182568706874094e-41", "");
	deepEqual(int32Box.value, "65529", "");
	deepEqual(uInt32Box.value, "65529", "");
}

test ( "Shorts: -7", function() {
	firstShortBox.value = "-7";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsNegativeSeven();
});
test ( "Binaries: -7", function() {
	firstBinaryBox.value = "1111111111111001";
	secondBinaryBox.value = "0000000000000000";
	secondBinaryBox.onchange();
	
	ResultsNegativeSeven();
});
test ( "Hex: -7", function() {
	hexBox.value = "fff9";
	hexBox.onchange();
	
	ResultsNegativeSeven();
});
test ( "Float: -7", function() {
	floatBox.value = "9.182568706874094e-41";
	floatBox.onchange();
	
	ResultsNegativeSeven();
});
test ( "Int32: -7", function() {
	int32Box.value = "65529";
	int32Box.onchange();
	
	ResultsNegativeSeven();
});
test ( "UInt32: -7", function() {
	uInt32Box.value = "65529";
	uInt32Box.onchange();
	
	ResultsNegativeSeven();
});

//Ensure that entering the maximum value for a 16 bit integer
//in any textbox (in the appropriate format)
//results in the maximum 16 bit integer value
//in all other textboxes (again in the appropriate format)
function ResultsFirstShortMax()
{
	deepEqual(firstShortBox.value, "32767", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "0111111111111111", "");
	deepEqual(secondBinaryBox.value, "0000000000000000", "");
	deepEqual(hexBox.value, "7fff", "");
	deepEqual(floatBox.value, "4.591634678053128e-41", "");
	deepEqual(int32Box.value, "32767", "");
	deepEqual(uInt32Box.value, "32767", "");
}

test ( "Shorts: FirstShortMax", function() {
	firstShortBox.value = "32767";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsFirstShortMax();
});
test ( "Binaries: FirstShortMax", function() {
	firstBinaryBox.value = "0111111111111111";
	secondBinaryBox.value = "0000000000000000";
	secondBinaryBox.onchange();
	
	ResultsFirstShortMax();
});
test ( "Hex: FirstShortMax", function() {
	hexBox.value = "7fff";
	hexBox.onchange();
	
	ResultsFirstShortMax();
});
test ( "Float: FirstShortMax", function() {
	floatBox.value = "4.591634678053128e-41";
	floatBox.onchange();
	
	ResultsFirstShortMax();
});
test ( "Int32: FirstShortMax", function() {
	int32Box.value = "32767";
	int32Box.onchange();
	
	ResultsFirstShortMax();
});
test ( "UInt32: FirstShortMax", function() {
	uInt32Box.value = "32767";
	uInt32Box.onchange();
	
	ResultsFirstShortMax();
});

//Ensure that entering the minimum value for a 16 bit integer
//in any textbox (in the appropriate format)
//results in the minimum 16 bit integer value
//in all other textboxes (again in the appropriate format)
function ResultsFirstShortMin()
{
	deepEqual(firstShortBox.value, "-32768", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "1000000000000000", "");
	deepEqual(secondBinaryBox.value, "0000000000000000", "");
	deepEqual(hexBox.value, "8000", "");
	deepEqual(floatBox.value, "4.591774807899561e-41", "");
	deepEqual(int32Box.value, "32768", "");
	deepEqual(uInt32Box.value, "32768", "");
}

test ( "Shorts: FirstShortMin", function() {
	firstShortBox.value = "-32768";
	secondShortBox.value = "0";
	secondShortBox.onchange();
	
	ResultsFirstShortMin();
});
test ( "Binaries: FirstShortMin", function() {
	firstBinaryBox.value = "1000000000000000";
	secondBinaryBox.value = "0000000000000000";
	secondBinaryBox.onchange();
	
	ResultsFirstShortMin();
});
test ( "Hex: FirstShortMin", function() {
	hexBox.value = "8000";
	hexBox.onchange();
	
	ResultsFirstShortMin();
});
test ( "Float: FirstShortMin", function() {
	floatBox.value = "4.591774807899561e-41";
	floatBox.onchange();
	
	ResultsFirstShortMin();
});
test ( "Int32: FirstShortMin", function() {
	int32Box.value = "32768";
	int32Box.onchange();
	
	ResultsFirstShortMin();
});
test ( "UInt32: FirstShortMin", function() {
	uInt32Box.value = "32768";
	uInt32Box.onchange();
	
	ResultsFirstShortMin();
});

//Ensure that entering the maximum value for a 16 bit integer
//in the second Int16 textbox results in the
//appropriate value in all other text boxes and vice versa
function ResultsSecondShortMax()
{
	deepEqual(firstShortBox.value, "0", "");
	deepEqual(secondShortBox.value, "32767", "");
	deepEqual(firstBinaryBox.value, "0000000000000000", "");
	deepEqual(secondBinaryBox.value, "0111111111111111", "");
	deepEqual(hexBox.value, "7fff0000", "");
	deepEqual(floatBox.value, "NaN", "");
	deepEqual(int32Box.value, "2147418112", "");
	deepEqual(uInt32Box.value, "2147418112", "");
}

test ( "Shorts: SecondShortMax", function() {
	firstShortBox.value = "0";
	secondShortBox.value = "32767";
	secondShortBox.onchange();
	
	ResultsSecondShortMax();
});
test ( "Binaries: SecondShortMax", function() {
	firstBinaryBox.value = "0000000000000000";
	secondBinaryBox.value = "0111111111111111";
	secondBinaryBox.onchange();
	
	ResultsSecondShortMax();
});
test ( "Hex: SecondShortMax", function() {
	hexBox.value = "7fff0000";
	hexBox.onchange();
	
	ResultsSecondShortMax();
});
test ( "Int32: SecondShortMax", function() {
	int32Box.value = "2147418112";
	int32Box.onchange();
	
	ResultsSecondShortMax();
});
test ( "UInt32: SecondShortMax", function() {
	uInt32Box.value = "2147418112";
	uInt32Box.onchange();
	
	ResultsSecondShortMax();
});

//Ensure that entering the minimum value for a 16 bit integer
//in the second Int16 textbox results in the
//appropriate value in all other text boxes and vice versa
function ResultsSecondShortMin()
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

test ( "Shorts: SecondShortMin", function() {
	firstShortBox.value = "0";
	secondShortBox.value = "-32768";
	secondShortBox.onchange();
	
	ResultsSecondShortMin();
});
test ( "Binaries: SecondShortMin", function() {
	firstBinaryBox.value = "0000000000000000";
	secondBinaryBox.value = "1000000000000000";
	secondBinaryBox.onchange();
	
	ResultsSecondShortMin();
});
test ( "Hex: SecondShortMin", function() {
	hexBox.value = "80000000";
	hexBox.onchange();
	
	ResultsSecondShortMin();
});
test ( "Int32: SecondShortMin", function() {
	int32Box.value = "-2147483648";
	int32Box.onchange();
	
	ResultsSecondShortMin();
});
test ( "UInt32: SecondShortMin", function() {
	uInt32Box.value = "2147483648";
	uInt32Box.onchange();
	
	ResultsSecondShortMin();
});

//Ensure that entering the maximum value for a 16 bit integer
//in both Int16 textboxes results in the appropriate value
//in all other textboxes & vice versa
function ResultsBothShortsMax()
{
	deepEqual(firstShortBox.value, "32767", "");
	deepEqual(secondShortBox.value, "32767", "");
	deepEqual(firstBinaryBox.value, "0111111111111111", "");
	deepEqual(secondBinaryBox.value, "0111111111111111", "");
	deepEqual(hexBox.value, "7fff7fff", "");
	deepEqual(floatBox.value, "NaN", "");
	deepEqual(int32Box.value, "2147450879", "");
	deepEqual(uInt32Box.value, "2147450879", "");
}

test ( "Shorts: BothShortsMax", function() {
	firstShortBox.value = "32767";
	secondShortBox.value = "32767";
	secondShortBox.onchange();
	
	ResultsBothShortsMax();
});
test ( "Binaries: BothShortsMax", function() {
	firstBinaryBox.value = "0111111111111111";
	secondBinaryBox.value = "0111111111111111";
	secondBinaryBox.onchange();
	
	ResultsBothShortsMax();
});
test ( "Hex: BothShortsMax", function() {
	hexBox.value = "7fff7fff";
	hexBox.onchange();
	
	ResultsBothShortsMax();
});
test ( "Int32: BothShortsMax", function() {
	int32Box.value = "2147450879";
	int32Box.onchange();
	
	ResultsBothShortsMax();
});
test ( "UInt32: BothShortsMax", function() {
	uInt32Box.value = "2147450879";
	uInt32Box.onchange();
	
	ResultsBothShortsMax();
});
//------------------------------------------------------------------

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
	ClearAll();
	firstShortBox.value = "-1";
	secondShortBox.value = "32767";
	secondShortBox.onchange();
	
	ResultsIntMax();
});
test ( "Binaries: IntMax", function() {
	ClearAll();
	firstBinaryBox.value = "1111111111111111";
	secondBinaryBox.value = "0111111111111111";
	secondBinaryBox.onchange();
	
	ResultsIntMax();
});
test ( "Hex: IntMax", function() {
	ClearAll();
	hexBox.value = "7fffffff";
	hexBox.onchange();
	
	ResultsIntMax();
});
test ( "Int32: IntMax", function() {
	ClearAll();
	int32Box.value = "2147483647";
	int32Box.onchange();
	
	ResultsIntMax();
});
test ( "UInt32: IntMax", function() {
	ClearAll();
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
	ClearAll();
	firstShortBox.value = "0";
	secondShortBox.value = "-32768";
	secondShortBox.onchange();
	
	ResultsIntMin();
});
test ( "Binaries: IntMin", function() {
	ClearAll();
	firstBinaryBox.value = "0000000000000000";
	secondBinaryBox.value = "1000000000000000";
	secondBinaryBox.onchange();
	
	ResultsIntMin();
});
test ( "Hex: IntMin", function() {
	ClearAll();
	hexBox.value = "80000000";
	hexBox.onchange();
	
	ResultsIntMin();
});
test ( "Int32: IntMin", function() {
	ClearAll();
	int32Box.value = "-2147483648";
	int32Box.onchange();
	
	ResultsIntMin();
});
test ( "UInt32: IntMin", function() {
	ClearAll();
	uInt32Box.value = "2147483648";
	uInt32Box.onchange();
	
	ResultsIntMin();
});

function ResultsDateTime()
{
	deepEqual(dateBox.value, "2018-12-31", "");
	deepEqual(timeBox.value, "02:13:56", "");
	deepEqual(unixTimeBox.value, "1546222436", "");
}

test ("DateTime: DateTime inputs produce correct unix time.", function() {
	ClearAll();
	let testDate = new Date('12/31/2018 2:13:56 AM UTC');
	SetDateAndTimeBoxValues(testDate);
	dateBox.onchange();
	
	ResultsDateTime();
});

test ("DateTime: Unix time input produces correct date/time.", function() {
	ClearAll();
	unixTimeBox.value = "1546222436";
	unixTimeBox.onchange();
	
	ResultsDateTime();
});

//Tests to write:
//max & min values of float
//all max values plus one
//all min values minus one

//This test exists only to clear the text boxes
test ( "Testing Complete", function() {
	deepEqual(1, 1, "Testing Complete");
	InitializeForm();
});