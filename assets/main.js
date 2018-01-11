let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

const MULTIPLIER = 10000;
const ANSWER_LENGTH = 4;

function guess() {
  let input = document.getElementById('user-guess');

  if (answer.value === '' || attempt.value === '') {
    setHiddenFields();
  }

  if (validateInput(input.value)) {
    +attempt.value++;
  } else {
    return;
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

function getResults(input) {
  let result = '';
  let corrects = 0;

  for (var i = 0; i < input.length; i++) {
    if (answer.value.charAt(i) === input.charAt(i)) {
      result += `<span class="glyphicon glyphicon-ok">${input.charAt(i)}</span>`;
      corrects++;
      continue;
    }

    for (var j = 0; j < answer.value.length; j++) {
      if (answer.value.charAt(j) === input.charAt(i)) {
        result += `<span class="glyphicon glyphicon-transfer">${input.charAt(i)}</span>`;
        break;
      } else if (j === answer.value.length - 1) {
        result += `<span class="glyphicon glyphicon-remove">${input.charAt(i)}</span>`;
        break;
      }
    }
  }

  document.getElementById('results').innerHTML = `<div class="row">
    <span class="col-md-6">${result}</span><div class="col-md-6"></div></div>`;

  return (corrects === ANSWER_LENGTH) ? true : false;
}

}

//implement new functions here