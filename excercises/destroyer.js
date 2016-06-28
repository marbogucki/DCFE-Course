/**
 * Created by Marcin on 2016-06-15.
 */

function destroyer(arrNumbers) {
    var arrayOfArguments = Array.prototype.slice.call(arguments);
    var arrayNumber = arrayOfArguments.shift();
    var filterArray  = arrayNumber.filter(deleteNumber);

    function deleteNumber(arrayNumber) {
    	 return arrayOfArguments.indexOf(arrayNumber) < 0;
    }
    return filterArray;
}

destroyer([2, 5, 6, 7, 3], 2, 3, 5);