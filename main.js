function operate(a , b, callback){
    return callback(a,b)
}

function multipy(a,b){
    return a * b
}

function division(a,b){
    return a / b
}

console.log("multipy" ,operate(2,9 , multipy))

console.log("division" ,operate(18,9 , division))

