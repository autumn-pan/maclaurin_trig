function tan(angle, terms)
{
    return sin(angle, terms)/cos(angle, terms)
}

function cot(angle, terms)
{
    return 1/tan(angle, terms)
}

function sec(angle, terms)
{
    return 1/cos(angle, terms)
}

function csc(angle, terms)
{
    return 1/sin(angle, terms)
}
module.exports = {tan, cot, sec, csc}