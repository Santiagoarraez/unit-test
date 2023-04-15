const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.11;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 133.8;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.006;
    // retornamos el valor
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
}
console.log(sum(3,7))

module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};