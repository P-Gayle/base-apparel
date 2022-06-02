function validation (){

const form = document.querySelector(".form");
const email = document.querySelector("#email").value;
const text = document.querySelector("#text");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const errorBorder = document.querySelector("#email");
const submitEmail = document.getElementById("form");

    if (email.match(pattern)){
        // form.classList.add("valid");
        form.classList.remove("invalid"); 
        // submitEmail.submit();
    } else {
        // form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please provide a valid email";
        text.style.color = "#ff0000";
        errorBorder.style.border = "3px solid hsl(0, 93%, 68%)";   
    }
    if (email == "") {
        // form.classList.remove("valid");
        form.classList.add("invalid");
    }
}