function reverseString(txt) {
    var textNew = txt.split('').reverse().join('');
    return textNew;
}

reverseString("hello world");