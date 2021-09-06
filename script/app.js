document.getElementById("btn").addEventListener("click", function () {
    const emailField = document.getElementById("email");
    const email = emailField.value;
    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    if (email == "abc@gmail.com" && password == 123) {
        emailField.value = "";
        passwordField.value = "";
        document.getElementById("hints").style.display = "block";
        const hints = document.getElementById("hints");
        hints.innerHTML = `<div class="card-body">
        
        <h1 class="card-text">Login successful.</h1>
        
    </div>`
        var elementOne = document.getElementById("left-door-open");
        elementOne.classList.add("left-door-open");
        var elementTwo = document.getElementById("right-door-open");
        elementTwo.classList.add("right-door-open");

    }
    else if (email !== "abc@gmail.com" && password !== 123) {
        emailField.value = "";
        passwordField.value = "";
        document.getElementById("hints").style.display = "block";
        const hints = document.getElementById("hints");
        hints.innerHTML = `<div class="card-body">
        
        <p>Email: abc@gmail.com</p>
        <p>Password: 123</p>
        
    </div>`
        var elementOne = document.getElementById("left-door-open");
        elementOne.classList.remove("left-door-open");
        var elementTwo = document.getElementById("right-door-open");
        elementTwo.classList.remove("right-door-open");
    }
    else if (email == "" && password == "") {
        emailField.value = "";
        passwordField.value = "";
        document.getElementById("hints").style.display = "block";
        const hints = document.getElementById("hints");
        hints.innerHTML = `<div class="card-body">
        
        <p>Email: abc@gmail.com</p>
        <p>Password: 123</p>
        
    </div>`
    }
})
