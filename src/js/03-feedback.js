const formRef = document.querySelector('.feedback-form');
var throttle = require('lodash.throttle');

let feedBackForm = {};

checkLocalStorage();

formRef.addEventListener('input', throttle(setDataToLocalStorage, 500));
formRef.addEventListener('submit', sendData);

function setDataToLocalStorage(e) {
  const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
  if (dataFromLocalStorage) {
    feedBackForm = JSON.parse(dataFromLocalStorage);
  }
  feedBackForm[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedBackForm));
}

function checkLocalStorage() {
  const dataFromLocalStorage = localStorage.getItem('feedback-form-state');

  if (dataFromLocalStorage !== null) {
    const { message, email } = JSON.parse(dataFromLocalStorage);
    if (message) {
      formRef.elements.message.value = message;
    }
    if (email) {
      formRef.elements.email.value = email;
    }
  }
}

function sendData(e) {
  e.preventDefault();
  formRef.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}
