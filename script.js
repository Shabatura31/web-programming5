const button = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

if (button) {
  button.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      button.textContent = 'Скрыть';
    } else {
      moreText.style.display = 'none';
      button.textContent = 'Подробнее';
    }
  });
}

const themeToggle = document.querySelector('#themeToggle');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  if (themeToggle) themeToggle.textContent = 'Светлая тема';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = 'Светлая тема';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = 'Тёмная тема';
    }
  });
}
// --- ПРОВЕРКА ОБРАТНОЙ СВЯЗИ ---
document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("feedbackForm");
    
    if (!form) return; 

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const reviewInput = document.getElementById("review");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const reviewError = document.getElementById("reviewError");
    const generalError = document.getElementById("generalError");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        let isValid = true;

        // 1. Имя не пустое
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Пожалуйста, укажите имя.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // 2. Почта содержит @
        if (!emailInput.value.includes("@")) {
            emailError.textContent = "Почта должна содержать символ '@'.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // 3. Отзыв больше 10 символов
        if (reviewInput.value.trim().length <= 10) {
            reviewError.textContent = "Отзыв должен быть длиннее 10 символов.";
            isValid = false;
        } else {
            reviewError.textContent = "";
        }

        if (!isValid) {
            generalError.textContent = "Пожалуйста, проверьте корректность заполнения полей.";
            generalError.classList.add("show");
        } else {
            generalError.classList.remove("show");
            alert("Успех! Сообщение отправлено (пока имитация).");
            form.reset(); 
        }
    });
});