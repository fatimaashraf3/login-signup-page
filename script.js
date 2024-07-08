

    
var eye = document.getElementById("eyeicon")
var pass = document.getElementById("passwordin")
var pass = document.getElementById("passwordlog")

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
console.log("hello");
console.log("zoology");

var emailacc = document.getElementById("signupemail")
var passacc = document.getElementById("passwordin")
var email2 = document.getElementById("loginemail")
var pass2 = document.getElementById("passwordlog")
var username = document.getElementById("signupname")
var logbtn = document.getElementById("logbtn")
var signbtn = document.getElementById("signbtn")

signbtn.addEventListener("click" , function(){

  var userdata = {
    username: username.value,
    emailacc: emailacc.value,
    passacc: passacc.value
  }
    localStorage.setItem("creteacc", JSON.stringify(userdata))
})

logbtn.addEventListener("click",function(){
    var data = JSON.parse(localStorage.getItem(userdata))
})

console.log(getdata);

if(email2.value == data.emailacc && pass2.value == data.passacc){
    window.location.assign("dashboard.html")
}
else{
    alert("Fill correct email and password")
}