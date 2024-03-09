// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click', () =>{
//         nav.classList.add('active');
//     })
// }

// if (close) {
//     close.addEventListener('click', () =>{
//         nav.classList.remove('active');
//     })
// }


function toggleForm(formId) {
    const accountForm = document.getElementById('account-form');
    const loginForm = document.getElementById('login-form');

    if (formId === 'login-form') {
        accountForm.style.display = 'none';
        loginForm.style.display = 'block';
    } else {
        accountForm.style.display = 'block';
        loginForm.style.display = 'none';
    }
}

