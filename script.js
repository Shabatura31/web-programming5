const button = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');
button.addEventListener('click', () => {
 moreText.classList.toggle('d-none');
 button.textContent = moreText.classList.contains('d-none')
 ? 'Подробнее'
 : 'Скрыть';
});
ocument.querySelector('#theme')
 .addEventListener('click', () => {
 document.body.classList.toggle('dark-theme');
 });
document.querySelectorAll('.nav-link').forEach(link => {
 link.addEventListener('click', () => {
 document.querySelector('.nav-link.active')?.classList.remove('active');
 link.classList.add('active');
 });
});
form.addEventListener('submit', (event) => {
 event.preventDefault();
 if (!name.value || !email.value.includes('@') || !comment.value) {
 formMessage.textContent = 'Заполни все поля и проверь email';
 formMessage.className = 'text-danger';
 return;
 }
 formMessage.textContent = 'Спасибо, ' + name.value + '!';
 formMessage.className = 'text-success';
});