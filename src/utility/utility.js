const handleRegister = e =>{
    e.preventDefault();
    console.log('register')
    const email =e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
}

export default handleRegister