document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'abhinav';
    const validPassword = 'abhi123';

    if (username === validUsername && password === validPassword) {
        document.getElementById('result').innerHTML = `Username is: ${username} and Password is ${password}.`;
    } else {
        document.getElementById('result').innerHTML = 'Invalid username or password.';
    }
});
