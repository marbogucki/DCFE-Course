function woozyBoozy(obj, count) {
    for (var i = 1; i <= count; i++) {
        var info = "";
        for (var key in obj) {
            if( !( i % obj[key] ) ) {
                info += key + " ";
            }
        }
        console.log(info || i);
    }
}
woozyBoozy({
    'Fizz': 3,
    'Buzz': 5,
    'Wooz': 7
}, 200);