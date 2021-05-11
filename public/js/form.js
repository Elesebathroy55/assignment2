

    // if(email.value.trim()=="" || pwd.value.trim() ==""){
    //     alert("Fields cannot be empty");
    //     return false;
    // }
    // else{
    //     alert("Validation is proper");
    //     return true;
    // }
    // if(email.value==""){
    //     alert("Email can't be empty!");
    //     return false;
    // }
    // else if(pwd.value==""){
    //     alert("Password can't be blank!");
    //     return false;
    // }
    // else if(pwd.value.length<=7){
    //     alert("Password is too short");
    //     pwd.style.border="2px solid red";
    //     return false;
    // }
    // else{
    //     return true;
    // }

//const { name } = require("ejs");

    
function validate(){
 let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(emailid.value)){
        error.innerHTML="Valid";
        error.style.color="blue";
        return true;
    }
    else{
        error.innerHTML="Invalid! Enter your Email-id";
        error.style.color="red";
        return false;
    }}
function passwordvalidate(){
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (reg.test(pwd.value)){
            error2.innerHTML="Valid";
            error2.style.color="blue";
            return true;
        }
        else{
            error2.innerHTML="Invalid Password!";
            error2.style.color="red";
            return false;
        }
}
function match(){

 if((pwd.value)==(pwd2.value)){
    return true;
 }
 else{
    error3.innerHTML = "The password you entered do not match!"
    return false;
 }
}
function phonenovalidate(){
    let pho = /^\d{10}$/;
    if(pho.test(phoneno.value)){

        error5.innerHTML="Valid";
        return true;
    }
    else{
        error5.innerHTML="Invalid! Enter your 10 digit number with no spaces and symbols";
        error5.style.color="red";
        return false;
    }
}
function namevalidate(){
    let nam =  /^[A-Za-z]+$/;
    if(nam.test(username.value)){

        error4.innerHTML="Valid";
        return true;
    }
    else{
        error4.innerHTML="Invalid! Enter your name with alphabet characters only";
        error4.style.color="red";
        return false;
    }
}
function required() 
   {
    if(authorname.value==""){
         
           error1.innerHTML="Name can't be empty!";
           return false;
        }  
            return true;
}
function required2() 
   {
     
    if(nationality.value==""){
            error2.innerHTML="This field can't be empty!";
             return false;
         } 
            return true;
}
function required3() 
   {
        if(born.value==""){
    error3.innerHTML="This field can't be empty!";
     return false;
 }
         return true;
}
function required4() 
   {
    if(end.value==""){
        error4.innerHTML="This field can't be empty!";
         return false;
     }
         return true;
}
function required5() 
   {
    if(input1.value==""){
        error5.innerHTML="This field can't be empty!";
         return false;
     }
         return true;
}
function required6() 
   {
    if(test.value==""){
        error6.innerHTML="This field can't be empty!";
         return false;
     }
         return true;
}

  /* if(nationality.value==""){
            error2.innerHTML="Name can't be empty!";
             return false;
         }
        else if(born.value==""){
                error3.innerHTML="This field can't be empty!";
                 return false;
             }
        else if(end.value==""){
                error4.innerHTML="This field can't be empty!";
                 return false;
             }
     else if(input1.value==""){
                error5.innerHTML="This field can't be empty!";
                 return false;
             }
    else if(test.value==""){
                error6.innerHTML="Name can't be empty!";
                 return false;
             }
        //     alert("Password is too short");
        //     pwd.style.border="2px solid red";
        //     return false;
        // }
         else{
             return true;
     }
     // return true; */
    