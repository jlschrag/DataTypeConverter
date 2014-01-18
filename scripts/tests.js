test ( "test1", function() {
	int32Box.value = "7";
	Int32Changed();
	
	deepEqual(firstShortBox.value, "7", "");
	deepEqual(secondShortBox.value, "0", "");
	deepEqual(firstBinaryBox.value, "111", "");
	deepEqual(secondBinaryBox.value, "0", "");
	deepEqual(hexBox.value, "7", "");
	deepEqual(floatBox.value, "9.80908925027372e-45", "");
	deepEqual(int32Box.value, "7", "");
	deepEqual(uInt32Box.value, "7", "");
});