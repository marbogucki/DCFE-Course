/**
 * Created by Marcin on 2016-06-28.
 */

function bouncer(arr) {
    var arrWithoutFalse = [];
    for(var i = 0; i< arr.length; i++) {
        if(arr[i] != false) {
            arrWithoutFalse.push(arr[i]);
        }
    }
    return arrWithoutFalse;
}

bouncer([7, "ate", "", false, 9]);