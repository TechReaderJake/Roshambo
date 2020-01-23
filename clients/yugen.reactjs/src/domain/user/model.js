
const UserModel = ({id, type, penname, firstname, lastname, email, password, picture}) => Object.freeze({
    id,
    type,
    penname,
    firstname,
    lastname,
    email,
    password,
    picture
})

module.exports = {
    UserModel,
}