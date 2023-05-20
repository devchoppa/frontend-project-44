import readlineSyns from 'readline-sync';

export const gameEven = () => {
  console.log('Welcome to the Braing Games!');
  const name = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSyns.question('Answer: ');
    const correntYes = randomNumber % 2 === 0 && answer === 'yes';
    const correntNo = randomNumber % 2 !== 0 && answer === 'no';
    const result = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (correntYes || correntNo) {
      console.log('Corrent!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
