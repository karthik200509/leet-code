/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let res=""
    let str=n.toString()
    for(let i=0;i<str.length;i++){
        if(str[i]!=="0"){
         res+= str[i]
        }
    }
    let num= Number(res)
    let r = num
    let sum=0;
    while(num>0){
       let last = num%10;
       sum+= last;
       num = Math.floor(num/10);
    }
    return r*sum

};