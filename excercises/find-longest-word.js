function findLongestWord(sentence) {
    var words = sentence.split(' ');
    var myNewElement = "";
    function longestWord(element) {
        if(element.length > myNewElement.length) {
            myNewElement = element;
        }
    }
    words.forEach(longestWord);
    return myNewElement;
}
findLongestWord("Uczę się dobrze programować w JavaScript");