import readlineSyns from 'readline-sync';

export const gameEven = () => {
  console.log('Welcome to the Braing Games!');
  const name = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counterCorr = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSyns.question('Answer: ');
    if (randomNumber % 2 === 0 && answer === 'yes') {
      console.log('Corrent!');
      counterCorr += 1;
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      console.log('Corrent!');
      counterCorr += 1;
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
      break;
    }
    if (counterCorr === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
