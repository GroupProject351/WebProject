function openLogin() {
    document.getElementById('loginOverlay').classList.add('active');
}

function closeLogin() {
    document.getElementById('loginOverlay').classList.remove('active');
}

// close when clicking outside the box
document.getElementById('loginOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeLogin();
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    openLogin();
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    closeLogin();
})

// ===== REGISTER =====
document.getElementById('reg-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const username = document.getElementById('reg-username').value.trim();
    const email    = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;

    if (!username || !email || !password) {
        alert('يرجى ملء جميع الحقول');
        return;
    }

    if (localStorage.getItem('user_' + email)) {
        alert('هذا البريد الإلكتروني مسجّل مسبقاً');
        return;
    }

    // Save the user data
    localStorage.setItem('user_' + email, JSON.stringify({ username, password }));

    // Log them in immediately after registering
    localStorage.setItem('loggedIn_name', username);
    localStorage.setItem('loggedIn_email', email);

    closeLogin();
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    updateHeader();
});

// ===== LOGIN =====
document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const email    = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const stored = localStorage.getItem('user_' + email);

    if (!stored) {
        alert('هذا البريد الإلكتروني غير مسجّل');
        return;
    }

    const user = JSON.parse(stored);

    if (user.password !== password) {
        alert('كلمة المرور غير صحيحة');
        return;
    }

    localStorage.setItem('loggedIn_name', user.username);
    localStorage.setItem('loggedIn_email', email);

    closeLogin();
    wrapper.classList.remove('active-popup');
    updateHeader();
});

// ===== UPDATE HEADER =====
// This function shows the username + logout button after login
// It also runs on every page load to check if the user is already logged in
function updateHeader() {
    const name = localStorage.getItem('loggedIn_name');
    const btn  = document.querySelector('.btnLogin-popup');

    if (name) {
        btn.textContent = name + ' | خروج';
        btn.onclick = logout;
    }
}

// ===== LOGOUT =====
function logout() {
    localStorage.removeItem('loggedIn_name');
    localStorage.removeItem('loggedIn_email');
    location.reload();
}

// ===== RUN ON PAGE LOAD =====
// This line is important — it checks localStorage every time the page opens
// So if the user is already logged in, the header updates automatically
updateHeader();
