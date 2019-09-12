 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBsZa3dWvmqdXWKD3Hi1OlfmPNB8Ch26-4",
    authDomain: "my-first-3c070.firebaseapp.com",
    databaseURL: "https://my-first-3c070.firebaseio.com",
    projectId: "my-first-3c070",
    storageBucket: "my-first-3c070.appspot.com",
    messagingSenderId: "643151002156",
    appId: "1:643151002156:web:0be11d4c79ee0423"
  }; 
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   console.log("firebase loaded");
   
   //initialize firestore database and save the instance to db variable 
     const db= firebase.firestore();

      //create a collection and empty document and save the instance to docRef variable 
      let save = document.getElementById('save');  
  
   //declared this global variable so they can be accessed by all functions 
   let name,email, phone,subject;
   const date= Date.now();
    save.addEventListener( "click", () => {
    let name =document.getElementById("name").value;
    let Email =document.getElementById("email").value;
    let phone =document.getElementById("phone").value;
    let Subject =document.getElementById("subject").value;
   
   
    if (!name.match(/^[a-zA-Z]+$/)){
        alert ("enter your Name")
    }
    else if (!Email.includes("@")) {
        alert ("Invalid Email ")
        
    }
    else if (!phone.match(/^[0-9]+$/)||phone.length < 11 || phone.length > 11) {
        alert ("Incorrect Phone Number")
    }
    else if (!Subject.match(/^[a-zA-Z]+$/)){
        alert ("Incorrect Subject")
    }
    else {
        alert ("Successfully")
    }     

 docRef.set({
        name:name,
        Email:Email,
        PhoneNumber:phone,
        subject:Subject, 

      }).then(function(){
        alert(" your message was Successfully sent!");
      }).catch(function(error){
        console.log("Got an error:",error);


      }); 
   
   });