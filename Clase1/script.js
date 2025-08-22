const tareaInput = document.getElementById('demoTareaInput');
const agregarBtn = document.getElementById('demoAgregarBtn');
const listaTareas = document.getElementById('demoListaTareas');

agregarBtn.addEventListener('click', function () {
  const nuevaTareaTexto = tareaInput.value.trim();
  if (nuevaTareaTexto === '') return;

  const nuevaTareaLi = document.createElement('li');
  nuevaTareaLi.textContent = nuevaTareaTexto;
  listaTareas.appendChild(nuevaTareaLi);

  tareaInput.value = '';
  tareaInput.focus();
});