const { UserModel } = require('./data')

const getUserOfId = (getUserOfIdImpl = async (id) => 
{
    throw new Error("Can't retrieve user of id ${id} : missing implmentation")
}) => async id => {
    try {
        const userData = await getUserOfId(id)
        return UserModel(userData)
    } catch(err) {
        throw new Error("Unable to retrieve User with id ${id}.")
    }
}

module.exports = {
    getUserOfId,
}