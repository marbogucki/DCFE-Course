function destroyer(arrNumbers) {
    var arrayOfArguments = Array.prototype.slice.call(arguments);
    var arrayNumber = arrayOfArguments.shift();
    function deleteNumber(arrayNumber) {
    	 return arrayOfArguments.indexOf(arrayNumber) < 0;
    }
    return arrayNumber.filter(deleteNumber);
}

destroyer([2, 5, 6, 7, 3], 2, 3, 5);