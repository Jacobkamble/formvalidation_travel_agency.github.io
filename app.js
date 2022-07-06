console.log("welcome to travel");

const username = document.getElementById('username');
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const btn = document.getElementById('sub');
const success = document.getElementById("success");
const failure = document.getElementById("failure");
const form = document.getElementById("myform");


let isUsernameValid = false;
let isPhoneValid = false;
let isEmailValid = false;


username.addEventListener('blur', function () {

    const reg = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;

    let str = username.value;

    if (reg.test(str)) {
        username.classList.remove("is-invalid");
        isUsernameValid = true;
    }
    else {
        username.setAttribute("class", 'is-invalid form-control');
        isUsernameValid = false;
    }


})

phone.addEventListener('blur', () => {
    const reg = /^([0-9]){10}$/;
    let str = phone.value;
    if (reg.test(str)) {
        phone.classList.remove("is-invalid");
        isPhoneValid = true;
    }
    else {
        phone.setAttribute("class", 'is-invalid form-control');
        isPhoneValid = false;
    }
});

email.addEventListener("blur", () => {

    const reg = /^([_\-/.0-9a-zA-Z]+)@([_\-/.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;

    if (reg.test(str)) {
        email.classList.remove("is-invalid");
        isEmailValid = true;
    }
    else {
        email.setAttribute("class", 'is-invalid form-control');
        isEmailValid = false;
    }

});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    //sent data to  

    if (isUsernameValid && isPhoneValid && isEmailValid) {
        success.setAttribute("style", 'display:block');
        failure.setAttribute("style", 'display:none');
        form.reset();
    }
    else {
        failure.setAttribute("style", 'display:block');
        success.setAttribute("style", 'display:none');
    }

})
