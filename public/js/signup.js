let email=document.getElementById("email");
let error = document.getElementById("error");
let mblnum = document.getElementById("mblnum");
let error1 = document.getElementById("error1");
let pwd=document.getElementById("pwd");
function validateemail() {
    // let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regexp.test(email.value)){
    error.innerHTML="The given email is Valid";
    error.style.border="3px solid yellow";
    error.style.color="cyan";
    return true;    
    }
    else if(email.value==""){
        error.innerHTML=" Email is Required"
         error.style.border="3px solid yellow";
        error.style.color="purple"
        return false;
     }
    else {
         error.innerHTML="The given email is Invalid"
         error.style.border="3px solid yellow";
        error.style.color="purple"
        return false;
    }
}


    function validatepnum() {
        
        let regexp1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
            if(regexp1.test(mblnum.value)) {
                error1.innerHTML="The given phone number is Valid";
                error1.style.border="3px solid yellow";
                error1.style.color="cyan";
                return true;
            }
            else if (isNaN(mblnum.value)){

                error1.innerHTML="Only numbers accepted"
                error1.style.border="3px solid yellow";
                error1.style.color="purple"
                return false;
            }
            else if (mblnum.value==""){
            error1.innerHTML="Mobile Number is Required"
            error1.style.border="3px solid yellow";
            error1.style.color="purple"
            return false;
        }
            else {
                error1.innerHTML="The given phone number is Invalid"
                error1.style.border="3px solid yellow";
                error1.style.color="purple"
                return false;
            }
        }
function validatepwd()
{
    let regexp2=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,}$/;
    if(regexp2.test(pwd.value)) {
        error2.innerHTML="The given password is Valid";
        error2.style.border="3px solid yellow";
        error2.style.color="cyan";
        return true;
    }
    else if (pwd.value =="") {
        error2.innerHTML="Password is Required";
        error2.style.border="3px solid yellow";
        error2.style.color="purple"
        return false;
    }
    else if (pwd.value.length < 8) {
        error2.innerHTML="Minimum 8 character ";
        error2.style.border="3px solid yellow";
        error2.style.color="purple"
        return false;
    }
    else if (pwd.value.search(/[a-z]/) < 0){
    error2.innerHTML="Atleast one  lowercase letter";
    error2.style.border="3px solid yellow";
    error2.style.color="purple"
    return false;
    }
    else  if (pwd.value.search(/[0-9]/) < 0){
        error2.innerHTML="Atleast one number";
        error2.style.border="3px solid yellow";
        error2.style.color="purple"
        return false;

    }
    else if (pwd.value.search(/[A-Z]/) < 0) {
        error2.innerHTML="Atlesat one uppercase letter"
        error2.style.border="3px solid yellow";
        error2.style.color="purple"
        return false;
    }
    else{
        error2.innerHTML="Password is valid"
        return true;
    }
}
    function checkPasswordLength(pwd) {
        var span = document.getElementById("errorSpan");
        if (pwd.length >= 12) {
          span.style.color = "green";
          return;
        } else if (pwd.length >= 4) {
          span.style.color = "yellow";
          return;
        } else {
          span.style.color = "red";
        }
      }

