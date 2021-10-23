let usrnm=document.getElementById("usrnm");
let pwd=document.getElementById("pwd");
let form=document.getElementsByClassName("form-container");
function validate(){
    if (usrnm.value.trim()=="admin"&&pwd.value==12345){
      error2.innerHTML=" Username and Password is Valid";
      error2.style.border="3px solid cyan";
     error2.style.color="yellow";
      document.getElementById("form").action ="/login"

    return true

    }
  else if(usrnm.value!="admin"&&pwd.value==12345){
                 error.innerHTML=" Username is Invalid";
                 error.style.border="3px solid red";
                 error.style.color="yellow"
                 error2.innerHTML=" Password is Valid";
                 error2.style.border="3px solid cyan";
                 error2.style.color="yellow";
                 return false;
             }
  else if(usrnm.value.trim()=="admin"&&pwd.value!=12345){
                error.innerHTML=" Username is valid"
                error.style.border="3px solid cyan";
                error.style.color="yellow"
                error2.innerHTML=" Password is Invalid";
                error2.style.border="3px solid red";
                error2.style.color="yellow";
                return false;
            }
        else{
                 error2.innerHTML=" Username and Password is Invalid";
                  error2.style.border="3px solid red";
                  error2.style.color="yellow"
                  return false;
        }
      // function callback()
      // {
      //   error2.innerHTML=" Username and Password is Valid";
      //   error2.style.border="3px solid cyan";
      //   error2.style.color="yellow";
      // }  
}
