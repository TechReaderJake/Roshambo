const { getUserOfId: createGetUserOfId } = require("../domain/user/getUserOfId")
const { saveUser: createSaveUser } = require("../domain/user/saveUser")

const getUserOfId = inMemoryDatabase => createGetUserOfId(id => inMemoryDatabase[id])
const saveUser = inMemoryDatabase => createSaveUser(userState => inMemoryDatabase[userState.id] = userState)

module.exports = {
    getUserOfId,
    saveUser
}