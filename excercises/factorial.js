/**
 * Created by Marcin on 2016-06-09.
 */
function factorial(num) {
    var result = 1;
    for(var i = 1; i<=num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));