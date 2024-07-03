function program(){
document.getElementById("pro").style.color="rgb(75, 250, 75)";
document.getElementById("homes").style.color="white";
document.getElementById("contacts").style.color="white";
document.getElementById("plans").style.color="white";
document.getElementById("blogs").style.color="white";

}
function contact(){
    document.getElementById("contacts").style.color="rgb(75, 250, 75)";
    document.getElementById("homes").style.color="white";
    document.getElementById("pro").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";

    }
    function plan(){
        document.getElementById("plans").style.color="rgb(75, 250, 75)";
        document.getElementById("homes").style.color="white";
        document.getElementById("pro").style.color="white";
        document.getElementById("contacts").style.color="white";
        document.getElementById("blogs").style.color="white";

        }
        function home(){
            document.getElementById("homes").style.color="rgb(75, 250, 75)";
            document.getElementById("pro").style.color="white";
            document.getElementById("contacts").style.color="white";
            document.getElementById("plans").style.color="white";
            document.getElementById("blogs").style.color="white";



            }
            function blog(){
                document.getElementById("homes").style.color="white";
                document.getElementById("pro").style.color="white";
                document.getElementById("contacts").style.color="white";
                document.getElementById("plans").style.color="white";
                document.getElementById("blogs").style.color="rgb(75, 250, 75)";

    
    
                }


            function submit(){
                let name = document.getElementById("name") ;
                let number = document.getElementById("number") ;

                if(name.value == ""){
                    alert("please Enter Name");
                }else if(number.value == ""){
                    alert("please Enter Number");
                    
                }
                else{
                    alert("Thanks for Join : "+name.value)
                }
            }



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, set, get , ref } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  import { getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBw_EN5Svis84dn-hUbA8Pz0AKDuQArq74",
    authDomain: "gymmanagement-39932.firebaseapp.com",
    databaseURL: "https://gymmanagement-39932-default-rtdb.firebaseio.com",
    projectId: "gymmanagement-39932",
    storageBucket: "gymmanagement-39932.appspot.com",
    messagingSenderId: "283932176315",
    appId: "1:283932176315:web:32c6282998d2c7fabe5e9e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth =getAuth(app);


const login_page = document.querySelector('.loginsection');
const mainsection = document.querySelector('.container');
onAuthStateChanged(auth,(user)=>{
    if(user){
        mainsection.classList.add('show')
       login_page.classList.add('hide')

    }
    else{
        mainsection.classList.remove('show')
       login_page.classList.remove('hide')
    }
})

function signInUser(){
   
    const email = document.getElementById('emailbox').value;
    const password = document.getElementById('passwordbox').value;
    signInWithEmailAndPassword(auth, email,password).then((userCredential)=>{
        console.log(userCredential.user.uid);
    })
}

const register_page = document.querySelector('.buttonbox');
login_page.addEventListener('click',signInUser);


///signout
const notify= document.querySelector('.notify')
const log_out = document.querySelector('#logout')
log_out.addEventListener('click',()=>{
    signOut(auth).then(()=>{
        console.log('user signed out');
        })
        })

const add_post_btn=document.querySelector('.formbutton')


function add_post(){
    const firstname = document.querySelector('#form3Examplev2').value;
    const lastname = document.querySelector('#form3Examplev3').value;
   
   const goal = document.querySelector('#form3Examplev4').value;
   const heightweight = document.querySelector('#form3Examplev4').value;

    const id = Math.floor(Math.random()*100)

    set(ref(db,'post/'+id),{
        firstname:firstname,
        lastname:lastname,
        goal:goal,
        heightweight:heightweight,
    

    })
    notify.innerHTML = "data added"
   document.querySelector('#form3Examplev2').value="";
   document.querySelector('#form3Examplev3').value="";
   
   document.querySelector('#form3Examplev4').value="";
    document.querySelector('#form3Examplev4').value="";



}

add_post_btn.addEventListener('click',add_post);