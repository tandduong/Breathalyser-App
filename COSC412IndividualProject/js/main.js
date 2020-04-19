// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDY4XDhWiOU-2LXh2Nq7M_v-qZqgARvQCk",
    authDomain: "contact-form-65ae7.firebaseapp.com",
    databaseURL: "https://contact-form-65ae7.firebaseio.com",
    projectId: "contact-form-65ae7",
    storageBucket: "contact-form-65ae7.appspot.com",
    messagingSenderId: "229088913915",
    appId: "1:229088913915:web:677974c0b18850d816435e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
var firestore = firebase.firestore();

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#name');
let userEmail = document.querySelector('#email');
let userMessage = document.querySelector('#message');

const db = firestore.collection("contactform");

document.getElementById("submit").addEventListener("click", function(){
    //submitBtn.addEventListener("click", function() { 
      let userNameInput = userName.value;
      let userEmailInput = userEmail.value;
      let userMessageInput = userMessage.value;
  
     //Access Database
     db.doc()
       .set({
      name: userNameInput,
      email: userEmailInput,
      message: userMessageInput
     })
     .then(function() {
      console.log("Data Saved");
       })
     .catch(function(error) {
      console.log(error);
     });
});
    
