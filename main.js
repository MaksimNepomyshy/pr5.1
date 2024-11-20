const loginButton = document.querySelector('.button-login');
const authModal = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginInput = document.getElementById('login');
const loginError = document.getElementById('loginError');
const userName = document.querySelector('.user-name');
const buttonAuth = document.querySelector('.button-auth');
const buttonOut = document.querySelector('.button-out');

// Функція показу модального вікна
function showAuthModal() {
    authModal.style.display = 'block';
}

// Функція закриття модального вікна
function closeAuthModal() {
    authModal.style.display = 'none';
    loginInput.style.borderColor = ''; // Скидання червоної рамки
    loginError.style.display = 'none'; // Сховати помилку
    loginInput.value = '';
}

// Функція авторизації
function authorize(login) {
    localStorage.setItem('userName', login);
    userName.textContent = login;
    userName.style.display = 'inline';
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'inline'; // Показати кнопку "Вийти"
}

// Функція виходу
function logout() {
    localStorage.removeItem('userName');
    userName.textContent = '';
    userName.style.display = 'none';
    buttonAuth.style.display = 'inline'; // Показати кнопку "Увійти"
    buttonOut.style.display = 'none';  // Приховати кнопку "Вийти"
}

// Функція перевірки стану авторизації
function checkAuth() {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        authorize(storedUserName);
    }
}

// Дії при кліку на кнопку авторизації
loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Запобігання перезавантаження сторінки

    const login = loginInput.value.trim(); // Отримання логіну без пробілів

    if (!login) {
        loginInput.style.borderColor = 'red';
        loginError.style.display = 'block'; // Показуємо повідомлення
        return;
    }

    closeAuthModal();
    authorize(login);
});

// Обробники подій
buttonAuth.addEventListener('click', showAuthModal);
buttonOut.addEventListener('click', logout);
closeAuth.addEventListener('click', closeAuthModal);
document.addEventListener('DOMContentLoaded', checkAuth);
