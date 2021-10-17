
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBNfwEMq1Hf96sw7OOD5RCae8s7uX_uplg",
      authDomain: "kwcfb-5e849.firebaseapp.com",
      projectId: "kwcfb-5e849",
      storageBucket: "kwcfb-5e849.appspot.com",
      messagingSenderId: "856951929517",
      appId: "1:856951929517:web:748593dfc3bb678619e424"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
