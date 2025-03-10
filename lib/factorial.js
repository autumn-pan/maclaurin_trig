module.exports = function factorial(n)
{
    if(n <= 0)
        return 1;
    let val = 1;
    while (n > 0)
    {
        val *= n;
        n--;
    }
    return val;
}