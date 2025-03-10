const factorial = require('./factorial')

module.exports = function cos(angle, terms)
{
    let sum = 0;
    for(let i = 0; i < terms; i++)
    {
        sum += (((-1)**i)*angle**(2*i))/factorial(2*i)
    }
    return sum
}

