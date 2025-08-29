const fibonacci = function (n) {

    let count;
    if (typeof n == 'string') {
        count = parseInt(n)
    } else {
        count = n;
    }

    if (n < 0) {
        return 'OOPS'
    }

    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    let firstPrev = 1;
    let secondPrev = 0;
    let current;
    for (let i = 1; i < n; i++) {
        current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return current;

};

// Do not edit below this line
module.exports = fibonacci;
