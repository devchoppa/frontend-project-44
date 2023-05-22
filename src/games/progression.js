import mainSource from '../index.js';

const description = 'What number is missing in the progression?';

const progression = () => {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  const randomProgression = Math.floor(Math.random() * 5) + 2;
  const randomMember = Math.floor(Math.random() * 9) + 1;
  let correct;
  const getArray = () => {
    const result = [];
    for (let i = 0; i < 10; i += 1) {
      result.push(randomNumber + i * randomProgression);
      correct = randomNumber + randomMember * randomProgression;
    }
    result.splice(randomMember, 1, '..');
    return result.join(' ');
  };
  const question = `Question: ${getArray()}`;
  return [question, correct];
};

export default () => {
  mainSource(description, progression);
};
