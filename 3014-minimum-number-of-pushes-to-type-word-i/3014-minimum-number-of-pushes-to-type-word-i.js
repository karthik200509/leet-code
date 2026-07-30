/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let res = 0;

    for(let i=0;i<word.length;i++){
        if(i<8){
            res += 1
        }else if(i<16){
            res += 2
        }else if(i<24){
            res += 3
        }else {
            res += 4
        }
    }
    return res;
};