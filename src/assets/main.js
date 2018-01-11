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

}

//implement new functions here