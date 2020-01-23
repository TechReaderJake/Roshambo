const { UserModel } = require('./model')

const updateUserPenname = ({UserModel, penname}) =>
{
    if(typeof email !== typeof "") {
        throw new Error("email should be a valid string")
    }
    return UserModel({
        ...UserModel,
        penname
    })
}

module.exports = {
    updateUserPenname,
}