let form = document.querySelector("form")
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const email = document.getElementById("email");
const button = document.getElementById("submit");
let mensagem = document.getElementById("message");
let phone = document.getElementById("phone_number")

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true
    }
    return false
}

function validatePhone(phone){
    if (/^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/.test(phone)){
        return true
    }
    return false
}

function validate() {

    let isValid = false
    const myForm = document.myForm
    if (myForm.email.value == "") {
        alert("Provide a valid email address!")
        document.myForm.email.focus()
    } else if (validateEmail(myForm.email.value) !== true){
        alert("Provide a valid email address!")
        document.myForm.email.focus()
    }else if (myForm.password.value == "") {
        alert("Provide a valid password!")
        document.myForm.password.focus()
    } else if (myForm.phone_number.value == "") {
        alert("Provide a valid phone number")
        document.myForm.phone.focus()
    }else if(!validatePhone(myForm.phone_number.value)){
        alert("Provide a valid phone number!")
        document.myForm.phone_number.focus()   
    } else if (myForm.confirm_password.value !== myForm.password.value) {
        mensagem.textContent = "* Passwords do not match."
        password.style.border = "0.6px solid red";
        confirm_password.style.border = "0.6px solid red";
    } else if (myForm.first_name.value == "") {
        alert("Provide your name")
        document.myForm.first_name.focus()
    } else if (myForm.last_name.value == "") {
        alert("Provide your last name")
        document.myForm.last_name.focus()
    } else {
        isValid = true
        mensagem.textContent = "Successful registration!"
        mensagem.style.color = "#4695bd";
        mensagem.style.paddingTop = "5px";
    }

    return isValid
}

form.addEventListener("submit", evento=>{
    let isValid = validate()
    if(isValid == true) {
        alert('Data successfully registered');  
    }else{
        evento.preventDefault();
    }
});