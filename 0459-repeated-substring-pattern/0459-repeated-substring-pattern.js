var repeatedSubstringPattern = function(s) {
    let n = s.length;

    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            let sub = s.slice(0, len);

            if (sub.repeat(n / len) === s) {
                return true;
            }
        }
    }

    return false;
};