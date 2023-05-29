const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomIndex = (string) => Math.round(Math.random() * (string.length - 1));
export { getRandomInt, getRandomIndex };
