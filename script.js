function changeform(){

var formone = document.getElementById("signupform")
var formtwo = document.getElementById("loginform")

if(formtwo.style.display === "none"){
   formtwo.style.display = "block";
   formone.style.display = "none"
}
else{
    formtwo.style.display = "none"
    formone.style.display = "block"
}
}


    
var eye = document.getElementById("eyeicon")
var pass = document.getElementById("passwordin")

function show(){

if(pass.type === 'password'){
    pass.type = 'text'
    eye.classList.toggle('fa-eye')
}
else{
    pass.type = "password"
    eye.classList.remove('fa-eye')
}
}

