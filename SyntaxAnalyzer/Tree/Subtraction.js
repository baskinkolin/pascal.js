const BinaryOperation = require('./BinaryOperation.js');

module.exports = class Subtraction extends BinaryOperation
{
    constructor(symbol, left, right)
    {
        super(symbol, left, right)
    }
}