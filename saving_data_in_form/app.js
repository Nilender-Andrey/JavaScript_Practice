document.addEventListener('DOMContentLoaded', () => {
  let formData = {};
  const LS = localStorage;

  const form = document.querySelector('form');

  // Получаем данные из формы

  form.addEventListener('input', (event) => {
    if (event.target.type === 'checkbox') {
      formData[event.target.name] = event.target.checked;
    } else {
      formData[event.target.name] = event.target.value;
    }

    LS.setItem('formData', JSON.stringify(formData));
  });

  // восстанавливаем данные

  if (LS.getItem('formData')) {
    formData = JSON.parse(LS.getItem('formData'));

    Object.entries(formData).forEach(([key, value]) => {
      if (form.elements[key].type === 'checkbox') {
        form.elements[key].checked = value;
      } else {
        form.elements[key].value = value;
      }
    });
  }
});
