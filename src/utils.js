const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomIndex = (arr) => Math.round(Math.random() * (arr.length - 1));
export { getRandomInt, getRandomIndex };
