function whatNumberIsIt(n){
    const MESSAGE = 'Input number is '

    switch (n) {

        case  Infinity: return MESSAGE + 'Number.POSITIVE_INFINITY'
        case -Infinity: return MESSAGE + 'Number.NEGATIVE_INFINITY'

        case Number.MAX_VALUE: return MESSAGE + 'Number.MAX_VALUE'
        case Number.MIN_VALUE: return MESSAGE + 'Number.MIN_VALUE'

        case Number(n): return MESSAGE + n
    
        default: return MESSAGE + 'Number.NaN'
    }

}

console.log(whatNumberIsIt(1/0))//"Input number is Number.POSITIVE_INFINITY");
console.log(whatNumberIsIt(100))//"Input number is 100");
console.log(whatNumberIsIt(1.7976931348623157e+308))//"Input number is Number.MAX_VALUE");
console.log(whatNumberIsIt(5e-324))//"Input number is Number.MIN_VALUE");
console.log(whatNumberIsIt(-Number.MAX_VALUE*2))//"Input number is Number.NEGATIVE_INFINITY");
console.log(whatNumberIsIt(NaN))//"Input number is Number.NaN");
console.log(whatNumberIsIt(Infinity+1))//   "Input number is Number.POSITIVE_INFINITY");