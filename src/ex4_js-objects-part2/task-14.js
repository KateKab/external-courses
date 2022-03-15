const randomizeRange = (min, max) => Math.trunc(min + Math.random() * (max - min));

module.exports = randomizeRange;
