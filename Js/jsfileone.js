//  var name=document.getElementById("your-name").value;
//  var mail=document.getElementById("your-email").value;
//  var mess=document.getElementById("your-message").value;


 function check(){
    var name=document.getElementById("your-name").value;
    var mail=document.getElementById("your-email").value;
    var mess=document.getElementById("your-message").value;
    console.log(name);
    console.log(mail);
    console.log(mess);
   
    if(name==""){
        document.getElementById("your-name").style.borderColor="red";
    }
    if(mail==""){
        document.getElementById("your-email").style.borderColor="red";
       
    }
    if(mess==""){
        document.getElementById("your-message").style.borderColor="red";
        
    }
    if(name==""&&mess==""&&mail==""){
        document.getElementById("your-name").style.borderColor="red";
        document.getElementById("your-email").style.borderColor="red";
        document.getElementById("your-message").style.borderColor="red";
    }
   
 }


 function checkEmail(){
    var mailSub=document.getElementById("mail").value;
    console.log(mailSub)

    if(mailSub=="") {
       document.getElementById("mail").style.borderColor="red";
    }
 }