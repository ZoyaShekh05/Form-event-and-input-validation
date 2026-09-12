//                <------------Section 2 – Basic Form Validation------------->

//                  <------------7. Validate a Required Name Field------------->

const form = document.querySelector("#form") ;
const userName = document.querySelector("#username") ;
const error = document.querySelector("#error") ;

form.addEventListener("submit" , (e) =>{
    e.preventDefault() ;
    error.textContent = "" ;

    if(userName.value.trim() === ""){
         error.textContent = "Name is required" ;
    }
}) ;

//                   <------------8. Validate Email Field------------>

const form2 = document.querySelector("#form") ;
const email = document.querySelector("#email") ;
const error2 = document.querySelector("#error") ;

form.addEventListener("submit" , (e) =>{
    e.preventDefault() ;
    if (email.value === "") {
        error.textContent = "Email is required.";
    }
})


//                      <-------------9. Validate Password Length------------>


  const form3 = document.getElementById("form");
    const password = document.getElementById("password");
    const error3 = document.getElementById("error");

    form3.addEventListener("submit", (e) => {
        e.preventDefault();

        if (password.value.length < 6) {
            error3.textContent = "Password must be at least 6 characters.";
        }
    });


    //          <------------10. Validate Multiple Form Fields ------------>

    const form4 = document.getElementById("form2");

const userName2 = document.getElementById("username2");
const email2 = document.getElementById("email");
const password2 = document.getElementById("password");

const error4 = document.getElementById("error");

form4.addEventListener("submit", (e) => {
    e.preventDefault();

    if (userName2.value === "") {
        error4.textContent = "Name is required.";
    } else if (email2.value === "") {
        error4.textContent = "Email is required.";
    } else if (password2.value === "") {
        error4.textContent = "Password is required.";
    }
});
