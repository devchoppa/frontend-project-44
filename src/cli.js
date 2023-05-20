import readlineSyns from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSyns.question('May I have your name?: ');

  console.log(`Hello, ${name}!`);
};
