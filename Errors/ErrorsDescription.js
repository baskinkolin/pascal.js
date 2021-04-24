const ErrorsCodes = require('./ErrorsCodes.js');

module.exports = class ErrorsDescription
{
    constructor()
    {
        this.errorCodeMapper = new Map([
            [1, 'An error in primitive type'],
            [2, 'Name expected'],
            [3, 'Keyword \'program\' expected'],
            [ErrorsCodes.forbiddenCharacter, 'Forbidden character'],
        ]);
    }
    
    getErrorTextByCode(errorCode)
    {
        return  this.errorCodeMapper.has(errorCode) ?
                this.errorCodeMapper.get(errorCode) :
                null;
    }
}