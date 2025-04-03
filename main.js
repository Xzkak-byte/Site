document.getElementById('main-form').addEventListener("submit", Formcheck);

class Person {
    constructor(name, email, password, gender) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.gender = gender;
    }
}

function check(fields) {
    return fields.every(field => field !== "");
}

function displayMessage(type, messages) {
    let warningDiv = document.getElementById('warning');
    warningDiv.innerHTML = ""; 
    warningDiv.classList.remove('success', 'error'); 
    warningDiv.classList.add(type);
    messages.forEach(msg => {
        warningDiv.innerHTML += `<p>${msg}</p>`; 
    });
}

function perehod() {
    window.location.href = "LeaningJS2.html";
}

function Formcheck(event) {
    let logincheck = new Person("Mirfayz","yaneznayu92@gmail.com","29011804didi","Мужской");
    event.preventDefault();
    let errors = []; 
    let el = document.getElementById('main-form');
    let name = el.name.value.trim();
    let email = el.email.value.trim();
    let pass = el.password.value.trim();
    let repass = el.copypass.value.trim();
    let gender = el.gender.value;
    if (!check([name, email, pass, repass, gender])) errors.push("Заполните все поля.");
    if (name.length <= 1 || name.length > 16) errors.push("Имя должно содержать от 2 до 16 символов.");
    if (pass !== repass) errors.push("Пароли не совпадают.");
    const person = new Person(name,email,pass,gender);
    if (errors.length > 0) 
        displayMessage('error', errors);
    else if (person.name !== logincheck.name || 
        person.email !== logincheck.email || 
        person.password !== logincheck.password || 
        person.gender !== logincheck.gender) {
        displayMessage('error',["Пользователь не найден"]);
    }
    else {
        displayMessage('success', ["Все прошло успешно!"]);
        setTimeout(() => {window.location.href = "https://mult-porno.vip/hentai"},1000);
        el.reset();
    }
}

document.getElementById('name').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});

document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});