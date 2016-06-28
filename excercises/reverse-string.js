/**
 * Created by Marcin on 2016-06-08.
 */

function reverseString(txt) {
    var textNew = txt.split('').reverse().join('');
    console.log(textNew);
}

reverseString("hello world");