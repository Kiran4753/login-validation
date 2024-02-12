


const loginBtn = document.querySelector('.login-btn')
const emailErrorMsg = document.querySelector('.email-error')
const passwordErrorMsg = document.querySelector('.password-error')

const emailInput = document.querySelector('.user-email')
const passwordInput = document.querySelector('.user-password')
const showPasswordBtn = document.querySelector('.showPassword')


emailInput.addEventListener('keyup', handleEmail)

function handleEmail(){
  if(emailInput.value === ''){
    emailErrorMsg.innerHTML = 'please enter email'
    emailErrorMsg.style.display = 'block'
    return false
  }

  let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
  if(!emailInput.value.match(validEmail)){
    emailErrorMsg.innerHTML = 'please enter valid email'
    emailErrorMsg.style.display = 'block'
    return false
  }

  emailErrorMsg.innerHTML = ''
  emailErrorMsg.style.display = 'none'
  return true
}


passwordInput.addEventListener('keyup', handlePassword)

function handlePassword(){
  if(passwordInput.value === ''){
    passwordErrorMsg.innerHTML = 'enter password'
    passwordErrorMsg.style.display = 'block'
    return false
  }

  let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/

  if(!passwordInput.value.match(validPassword)){
    passwordErrorMsg.innerHTML = 'must be 8 to 25 characters and contains at  one lowercase letter, one uppercase letter, one numeric digit, and one special character'
    passwordErrorMsg.style.display = 'block'
    return false
  }

  passwordErrorMsg.innerHTML = ''
  passwordErrorMsg.style.display = 'none'
  return true
}

showPasswordBtn.addEventListener('click', function(){
  if(showPasswordBtn.checked){
    passwordInput.type = 'text'
  }else{
    passwordInput.type = 'password'
  }
})

loginBtn.addEventListener('click', function(e){
  e.preventDefault()

  if(!handleEmail() || !handlePassword()){
    return false
  }
  return true
})