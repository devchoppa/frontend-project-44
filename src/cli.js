import readlineSyns from 'readline-sync';

export const getName = () => {
  const name = readlineSyns.question('May I have your name?: ');

  console.log(`Hello, ${name}!`);
};
