
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCMf2_YHlDX9dpk71y7X-sgIe0zABNDnJ0",
  authDomain: "kwitter-8c38b.firebaseapp.com",
  databaseURL: "https://kwitter-8c38b-default-rtdb.firebaseio.com",
  projectId: "kwitter-8c38b",
  storageBucket: "kwitter-8c38b.appspot.com",
  messagingSenderId: "715680658599",
  appId: "1:715680658599:web:d019fa074dc71c7b91d782"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  })
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_name);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div/><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage=("room_name",name);
  window.location="kwitter_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}
