const loginCard = document.getElementById('loginCard');
const signupCard = document.getElementById('signupCard');

function showSignup() {
    loginCard.classList.remove('active');
    loginCard.classList.add('hidden-bottom');
    
    signupCard.classList.remove('hidden-top');
    signupCard.classList.add('active');
}

function showLogin() {
    signupCard.classList.remove('active');
    signupCard.classList.add('hidden-top');
    
    loginCard.classList.remove('hidden-bottom');
    loginCard.classList.add('active');
}