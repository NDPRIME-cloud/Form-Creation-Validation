





const form = document.getElementById("registration-form");
form.addEventListener("DOMContentLoaded", function(event){
event.preventDefault()


const feedbackDiv = document.getElementById("form-feedback")
feedbackDiv.style.display ="block"

 let isValid = true
 const messages = []
  const user = document.getElementById("username")
  if (user.value.trim().length< 3 || user.value.trim().length > 8){
    messages.push("username is btw 3 - 8");
    isValid = false;
  }
  const mail = document.getElementById("email")
  const mailValue = mail.value.trim()
  if(!mailValue.includes("@") || !mailValue.includes(".")){
messages.push(`Invalid mail`)  
  isValid = false

  }

  const key = document.getElementById("password")
  if(key.value.length >8 || key.value.length<1){
    messages.push("max,8 characters");
    isValid = false

  }


if(isValid){
    feedbackDiv.textContent = "Registration successful";
    feedbackDiv.style.color = "#28a745"
 
}else{
    feedbackDiv.innerHTML = messages.join("<br>")
    feedbackDiv.style.color = "#dc3545";
}








})