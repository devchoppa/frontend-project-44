import { mainSource } from '../index.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const gameEven = () => {
  const randomNumber = Math.floor(Math.random() * 30) + 1;
  const question = (`Question: ${randomNumber}`);
  const correct = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [question, correct];
};

mainSource(discription, gameEven);
