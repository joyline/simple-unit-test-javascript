function addStrings(firstString, secondString) {
    if (typeof firstString !== 'string' || typeof secondString !== 'string') {
        return 'Input must be strings.';
    }

    return firstString + secondString;
}

module.exports = addStrings;
