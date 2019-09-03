
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
      const docRef = db.collection("messages").doc();
      let save = document.getElementById('save');  
  
   //declared this global variable so they can be accessed by all functions 
   let name,email, phone,password,cmpass;
   const date= Date.now();
    save.addEventListener( "click", () => {
    let fname =document.getElementById("fname").value;
    let  lname = document.getElementById("lname").value;
    let Email =document.getElementById("email").value;
    let phone =document.getElementById("phone").value;
    let password =document.getElementById("password").value;
    let cmpass =document.getElementById("cmpass").value;
   
   
    if (!fname.match(/^[a-zA-Z]+$/)){
        alert ("enter your frist Name")
    }
        else if (!lname.match(/^[a-zA-Z]+$/)){
            alert ("enter your last Name")
    }
    else if (!Email.includes("@")) {
        alert ("Invalid Email ")
        
    }
    else if (!phone.match(/^[0-9]+$/)||phone.length < 11 || phone.length > 11) {
        alert ("Incorrect Phone Number")
    }
    else if (!password.match(/^[0-9]+$/) ||password.length < 8 || password.length > 8){
        alert ("Incorrect password")
    }
    else if (!cmpass.match(/^[0-9]+$/) ||cmpass.length < 8 || cmpass.length >8){
        alert ("confrim password")
    }
    else {
        alert ("Successfully")
    }     

        docRef.set({
        fname:fname,
        lname:lname,
        email:Email,
        PhoneNumber:phone,
        password:password,
        cmpass:cmpass
      }).then(function(){
        alert(" your message was Successfully sent!");
      }).catch(function(error){
        console.log("Got an error:",error);

        
      });
   
   });