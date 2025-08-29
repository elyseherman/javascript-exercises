const palindromes = function (str) {

    let i = 0;
    let j = str.length - 1;

    while (i <= j) {
        if (/^[A-Za-z0-9]$/.test(str[i]) && /^[A-Za-z0-9]$/.test(str[j])) {
            if (str[i].toLowerCase() != str[j].toLowerCase()) {
                return false
            }
            else {
                i += 1;
                j -= 1;
            }
        } else if (! /^[A-Za-z0-9]$/.test(str[i])) {
            i++;
        }
        else if (! /^[A-Za-z0-9]$/.test(str[j])) {
            j--;
        }
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
