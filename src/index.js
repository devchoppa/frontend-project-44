import readlineSyns from 'readline-sync';

const mainSource = (description, gameRun) => {
  console.log('Welcome to the Braing Games!');
  const name = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

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
export default mainSource;
