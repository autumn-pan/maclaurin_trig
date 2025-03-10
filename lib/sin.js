const factorial = require('./factorial')

module.exports = function sin(angle, terms)
{
    let sum = 0;
    for(let i = 0; i < terms; i++)
    {
        sum += (((-1)**i)*angle**(2*i + 1))/factorial(2*i + 1)
    }
    return sum
}
