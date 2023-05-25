import readlineSyns from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSyns.question('May I have your name?: ');

  console.log(`Hello, ${userName}!`);
};

export default greetUser;
