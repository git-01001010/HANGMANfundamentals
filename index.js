console.log('here');
const wordBank = require('./word-bank.json');
console.log(wordBank[0]);

const prompt = require('readline-sync');
const answer = prompt.question('May I have your name?');
console.log(answer);

