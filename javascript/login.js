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
   firebase.initializeApp(firebaseConfig)
   console.log("firebase loaded");
   
   let Email,Password;
   const loginpage =document.getElementById("login");
   loginpage.addEventListener('click',()=>{
    Email =document.getElementById("Email").value;
    Password =document.getElementById("Password").value;
     
    if (!Email.includes("@")){
        alert("invalid Email")
    }
    else if(!Password.match(/^[a-zA-Z-0-9]+$/)){
         alert("enter your password")
    }
   else{
    firebase.auth().createUserWithEmailAndPassword(Email, Password).then(function(){
        SendData()
    }).catch(function(error){
        //Handle errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error:" + error);
        // ...
    
 });

}});
