let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

const MULTIPLIER = 10000;
const ANSWER_LENGTH = 4;

function guess() {
  let input = document.getElementById('user-guess');

  if (answer.value === '' || attempt.value === '') {
    setHiddenFields();
  }

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * MULTIPLIER);

  while (answer.value.length < ANSWER_LENGTH) {
    answer.value = "0" + answer.value;
  }

  attempt.value = "0";
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if (input.length != ANSWER_LENGTH) {
    setMessage("Guesses must be exactly 4 characters long.");

    return false;
  }

  return true;
}

}

//implement new functions here