const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};
form.addEventListener(
  'input',
  throttle(e => {
    formData.email = email.value;
    formData.message = message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  formData.email = email.value;
  formData.message = message.value;
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(STORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}
