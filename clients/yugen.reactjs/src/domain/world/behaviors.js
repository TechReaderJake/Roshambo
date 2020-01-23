const { WorldModel } = require('./model')

const updateWorld = ({ worldModel, newWorld}) => {
    return new WorldModel(newWorld);
}