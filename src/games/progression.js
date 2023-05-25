import run from '../index.js';

const description = 'What number is missing in the progression?';
const rangeProgression = 10;
const stepProgression = 5;
const rangeStartNumber = 20;
const runProgression = () => {
  const randomNumber = Math.floor(Math.random() * rangeStartNumber) + 1;
  const randomProgression = Math.floor(Math.random() * stepProgression) + 2;
  const randomMember = Math.floor(Math.random() * (rangeProgression - 1)) + 1;
  let correctAnswer;
  const getArray = () => {
    const result = [];
    for (let i = 0; i < rangeProgression; i += 1) {
      result.push(randomNumber + i * randomProgression);
      correctAnswer = randomNumber + randomMember * randomProgression;
    }
    result.splice(randomMember, 1, '..');
    return result.join(' ');
  };
  const question = `Question: ${getArray()}`;
  return [String(question), String(correctAnswer)];
};

export default () => {
  run(description, runProgression);
};
