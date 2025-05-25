// let form= document.querySelector("form")
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//        let firstNameInput = document.querySelector("input[placeholder='First Name']");
//     let lastNameInput = document.querySelector("input[placeholder='Last Name']");
//     let emailInput = document.querySelector("input[placeholder='Email']");
//     let phoneInput = document.querySelector("input[placeholder='Phone']");
//     let passwordInput = document.querySelector("input[placeholder='Password']");
//     let confirmInput = document.querySelector("input[placeholder='confirm password']");
//     let output = document.getElementById("output");
    

//     if(!emailInput.includes("@") || !emailInput.includes(".")){
//       alert("Please enter a valid email address.");
//         return;
//     }


//     if(phoneInput.length < 10){
//        alert("Please enter a valid phone number.");
//         return;
//     }

//     if(passwordInput.length < 8){
//      alert("its less than 8")
//         return;
//     }
//     if (passwordInput != confirmInput){
//         alert("password did not match")
//         return
//     }


//     if(firstNameInput.value === "" || lastNameInput.value === "" || emailInput.value === "" || phoneInput.value === ""  || passwordInput.value === "" || confirmInput.value === ""){
//         // Check if any of the input fields are empty
//         alert("Please fill in all fields.");
//         return;
      
//     }

//    document.getElementById("form").innerHTML=`<h1>Thank you for registering</h1>`

// });
