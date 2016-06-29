function bouncer(arr) {
    var arrWithoutFalse = [];
    var arrLength = arr.length;

    for(var i = 0; i< arrLength; i++) {
        if(arr[i]) {
            arrWithoutFalse.push(arr[i]);
        }
    }
    return arrWithoutFalse;
}

bouncer([7, "ate", "", false, 9]);