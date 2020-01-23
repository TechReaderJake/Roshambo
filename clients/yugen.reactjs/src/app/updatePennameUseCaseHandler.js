const { updateUserPenname } = require("../domain/user/behaviors")

const updatePennameUseCaseHandler = ({ getUserOfId, saveUser }) => async ({id, penname}) => {
    if (typeof id !== typeof "") {
        throw new Error("Id must be a string")
    }

    const userData = getUserOfId()
    const newUserData = updateUserPenname({ userData, penname})
    await saveUser(newUserData)
}

module.exports = {
    updatePennameUseCaseHandler,
}