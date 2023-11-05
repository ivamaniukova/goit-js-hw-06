const regForm = document.querySelector(".login-form");
regForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email}, Password: ${password}`);
  const data = {
    "Email": email,
    "Password": password,
  }
  console.log(data);
  form.reset();
});
