// Not sure which one is better yet, the class or the constant frozen function

export default class WorldModel {
    constructor(id, userId, name, description, picture)
    {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.picture = picture;
        Object.freeze(this);
    }
}

const WorldModel = ({id, userId, name, description, picture}) => Object.freeze({
    id,
    userId,
    name,
    description,
    picture
});

module.exports = {
    WorldModel,
}