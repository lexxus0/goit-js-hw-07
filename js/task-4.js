const registerForm = document.querySelector(".login-form");

registerForm.addEventListener('submit', fooSubmit);

function fooSubmit(e) {
    e.preventDefault();
    const form = e.target.elements;
    const formValueObject = {
        email: form.email.value.trim(),
        password: form.password.value.trim(),
    }

    if(formValueObject.email == '' || formValueObject.password == ''){
      alert('All form fields must be filled in');
    }
    else{
        console.log(`Email is: ${formValueObject.email}
Password is: ${formValueObject.password}`);
            e.target.reset();
    } // здається вивід в консоль ТЗ не потребувало, але залишив вам/собі для перевірки
}


