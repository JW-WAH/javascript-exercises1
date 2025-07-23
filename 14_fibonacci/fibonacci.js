const fibonacci = function(number) {
    let j = 0
    let k = 1
    let l = 1
    for(i=0;i<number;i++){
    l=j+k
    k=j
    j=l
    }
if (number < 0) {
    return "OOPS"
}else{
    return j
}

};

// Do not edit below this line
module.exports = fibonacci;
