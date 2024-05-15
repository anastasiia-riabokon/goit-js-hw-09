import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/css/iziToast.css';

let formData = {
  email: '',
  message: '',
};

const LS_KEY = 'feedback-form-state';

const ref = {
  form: document.querySelector('.feedback-form'),
};

const { form } = ref;

form.addEventListener('input', () => {
  formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  addDataToLocalStorage(LS_KEY, formData);

  if (formData.email.trim() !== '' || formData.message.trim() !== '') {
    const toast = document.querySelector('.iziToast');
    if (toast) {
      iziToast.hide({}, toast);
    }
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const dataEmail = event.target.elements.email.value;
  const dataMessage = event.target.elements.message.value;

  if (dataEmail.trim() === '' || dataMessage.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Fill please all fields',
      position: 'topCenter',
      closeOnEscape: true,
    });
  } else {
    console.log(formData);
    removeDataFromLocaleStorage(LS_KEY, formData);
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});

document.addEventListener('DOMContentLoaded', refillReload);

function refillReload() {
  const data = getDataFromLocalStorage(LS_KEY) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

function addDataToLocalStorage(key, value) {
  try {
    const stringifyData = JSON.stringify(value);
    localStorage.setItem(key, stringifyData);
  } catch (error) {
    console.log(error.message);
  }
}

function getDataFromLocalStorage(key) {
  try {
    const lsData = localStorage.getItem(key);
    return lsData === null ? undefined : JSON.parse(lsData);
  } catch (error) {
    console.log(error.message);
  }
}

function removeDataFromLocaleStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
}
