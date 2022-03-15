const findProtoProperty = (property, inputObj) => Object.getPrototypeOf(inputObj)[property];

module.exports = findProtoProperty;
