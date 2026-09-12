//           <-----------Section 1 – Form and Input Events --------------->

//               <------------1. Handle Form Submit Event ------------->

const form = document.querySelector("#form") ;
const message = document.querySelector("#message") ;

form.addEventListener("submit" , (e) =>{
    // e.preventDefault() ;
    message.textContent = "Form submitted successfully"
})


//         <-----------2. Prevent Form Submission ------------>

const form2 = document.querySelector("#form") ;
const message2 = document.querySelector("#message") ;

form2.addEventListener("submit" , (e) =>{
     e.preventDefault() ;
    message2.textContent = "Form submitted successfully"
})

//      <-----------3. Display Input Using the input Event ------------->

const input = document.querySelector("#input") ;
const output = document.querySelector("#output") ;

input.addEventListener("input" , (e) => {
    output.textContent = "You Entered : " + e.target.value ;
})


//      <------------4. Detect Changes Using the change Event----------->

const selectLang = document.querySelector("#langSelect") ;
const displayOutput = document.querySelector("#output") ;

selectLang.addEventListener("change" , (e) =>{
    displayOutput.textContent ="Selected Language :" + e.target.value ;
})


//                 <-----------5. Handle the focus Event-------------->


 const focusInput = document.getElementById("input2")

addEventListener("focus", () => {
    focusInput.style.border = "2px solid blue"
});


//             <---------6. Handle the blur Event------------>


 const input3 = document.getElementById("input");
const message4 = document.getElementById("message");

input3.addEventListener("blur", () => {
    message4.textContent = "You left the input field"
});