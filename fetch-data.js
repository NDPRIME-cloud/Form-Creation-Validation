async function fetchUserData() 
  {
   const apiUrl =  'https://jsonplaceholder.typicode.com/users'  
    

  const dataContainer = document.getElementById("api-data")
  
  try{

   const response = await fetch(apiUrl);
    const users = await response.json()


   dataContainer.innerHTML = ""

   const userList = document.createElement("ul")

   users.forEach(user => {
    const li = document.createElement("li")
    li.textContent = user.name;
    userList.appendChild(li)
   });
   userList.appendChild(dataContainer)

  }catch (error){
    dataContainer.innerHTML = ""
    dataContainer.textContent = 'Failed to load user data.'
console.error("there is an err")


  }
     

}
document.addEventListener("DOMContentLoaded", fetchUserData)
