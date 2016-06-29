function findLongestWord(sentence) {
    var words = sentence.split(' ');
    var maxLengthEl = words[0].length;
    var myNewElement;
    
    var wordsLength = words.length;
    for(var i = 0; i < wordsLength; i++) {
        if(words[i].length > maxLengthEl) {
            maxLengthEl = words[i].length;
            myNewElement = words[i];
        }
    }
    return myNewElement;
}
findLongestWord("Uczę się dobrze programować w JavaScript");