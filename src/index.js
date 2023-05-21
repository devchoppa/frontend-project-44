import readlineSyns from 'readline-sync';

export const mainSource = (discription, gameRun) => {
  console.log('Welcome to the Braing Games!');
  const name = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(discription);

  for (let i = 0; i < 3; i += 1) {
    const [question, correct] = gameRun();
    console.log(`${question}`);
    const answer = readlineSyns.question('Answer: ');

    if (correct.toString() === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};