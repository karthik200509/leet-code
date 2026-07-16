var intersect = function(n1, n2) {
    let res = [];

    for (let i = 0; i < n1.length; i++) {
        for (let j = 0; j < n2.length; j++) {
            if (n1[i] === n2[j]) {
                res.push(n1[i]);
                n2[j] = null;   // Mark as used
                break;
            }
        }
    }

    return res;
};