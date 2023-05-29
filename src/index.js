import readlineSyns from 'readline-sync';

const roundsCount = 3;
const run = (description, getTask) => {
  console.log('Welcome to the Braing Games!');
  const userName = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSyns.question('Answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default run;
