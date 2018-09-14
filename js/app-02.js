/* 02 - FORM VALIDATION :: YOUR CODE BELOW */

// console.log("pipipipo");

// form elige todas las etiquetas de formularios, sustituye el getElementById
// Se declara la variable que señala al elemento del dom
var registerForm =document.forms['registration-form']
// console.log(registerForm);

// se agrega el listyner para el evento que en este caso es el boton y su click

document.querySelector(".btn").addEventListener("click", function Validation(e){
  e.preventDefault()
  // console.log('yeeiii');

var userName = registerForm.elements.username.value
  // console.log(textValidation)
var textValidation = registerForm.querySelector('.validation--username')
// elements selecciona los elementos de u  formulario y value imprime lo que el iusuario ingresa al inpit

if ( userName === ''){
      textValidation.textContent = 'Username cannot be blank'
} else if(userName !== ''){
     textValidation.textContent = 'Success'
}

var password = registerForm.elements.userpassword.value
// console.log(password);
var textValidationPassword = registerForm.querySelector('.validation--user-password')
// console.log(textValidationPassword);
if (password.length < 8){
  textValidationPassword.textContent ='Password must have a minimun of 8 characters'
} else if(password.length >= 8){
  textValidationPassword.textContent = 'Success'
}

var confirmPassword = registerForm.elements.confirmpassword.value
// console.log(confirmPassword);
var textConfirmPassword = registerForm.querySelector('.validation--confirm-password')
if (confirmPassword === password && confirmPassword !== ''){
  textConfirmPassword.textContent = 'Success'
} else {
  textConfirmPassword.textContent = 'Passwords must match'
}

var taxiIdNum = registerForm.elements.taxid.value
// console.log(taxiIdNum);
var idNumConfirmation = registerForm.querySelector('.validation--tax-id')

if(taxiIdNum.length === 10 && /^([0-9]{10})$/i.test(taxiIdNum)){
   idNumConfirmation.textContent = 'Success'
} else if (taxiIdNum === '') {
   idNumConfirmation.textContent = 'Must provide Tax ID Number'
} else {
  idNumConfirmation.textContent = 'Taxi Id number must be only numbers and is 10 digits'
}


var accountType = registerForm.elements.account
// console.log(accountType);
var selectOption =accountType.options[accountType.selectedIndex]
// console.log(selectOption);
var  confirmAccountType = registerForm.querySelector('.validation--account')

if(selectOption.value === ""){
  confirmAccountType.textContent = 'Must select account type'
} else {
  confirmAccountType.textContent ='Success'
}


var serviceTerms = registerForm.elements.termsofservice
// console.log(serviceTerms.checked);
var confirmTerms = registerForm.querySelector('.validation--terms-of-service')
// console.log(confirmTerms);
if (serviceTerms.checked === true){
  confirmTerms.textContent = 'Success'
} else {
   confirmTerms.textContent = 'Must approve terms of service'
}

})
