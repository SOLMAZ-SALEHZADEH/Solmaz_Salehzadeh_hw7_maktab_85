function onChange() {
    const password = document.querySelector('input[name=password]');
    console.log(password)
    const confirm = document.querySelector('input[name=confirm]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }



//   question 6
function submitForm(event){
    // event.preventDefault()
    console.log(event)
    console.log("hi")
}