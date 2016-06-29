function bouncer(arr) {
    function deleteFalse(element) {
        return element;
    }
    return arr.filter(deleteFalse);
}

bouncer([7, "ate", "", false, 9]);