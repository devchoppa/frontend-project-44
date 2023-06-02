const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomIndex = (collection) => Math.floor(Math.random() * (collection.length));
export { getRandomInt, getRandomIndex };
