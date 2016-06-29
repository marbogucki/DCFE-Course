function bouncer(arr) {
    function deleteFalse(arr) {
        return arr != false;
    }
    return arr.filter(deleteFalse);
}

bouncer([7, "ate", "", false, 9]);