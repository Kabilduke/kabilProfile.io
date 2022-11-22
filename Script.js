/*--Typing animation--*/
var Typed =new Typed(".Typing",{
    strings:[" ","Web Developer","UI/UX Designer","Java Developer","Web Designer","App Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,

})

/*--Aside--*/
const nav = document.querySelector(".Nav"),
   NavList = nav.querySelectorAll("li"),
    TotalNavList = NavList.length;

    for(let i=0;i<TotalNavList;i++)
    {

        const a = NavList[i].querySelector("a");

        a.addEventListener("click",function()
        {
            for(let j=0 ;j<TotalNavList;j++){

                NavList[j].querySelector("a").classList.remove("Active");
            }
            this.classList.add("Active")
        })

    }

/*--- Database Firebase--- */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function initializeApp(){

var firebaseConfig = {
    apiKey: "AIzaSyD4MKEXSupXKr86_Q6sWFoJKV66-lAT4CI",
    authDomain: "portfolio-8720.firebaseapp.com",
    databaseURL: "https://portfolio-8720-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-8720",
    storageBucket: "portfolio-8720.appspot.com",
    messagingSenderId: "65008477977",
    appId: "1:65008477977:web:f2dfee073942598cec4788",
    measurementId: "G-M0D57LYT19"
  };

  /*---Initialize App---*/
   firebase.initializeApp(firebaseConfig);

  /*---Database---*/
  var contactFormDB = firebase.database().ref("ContactForm");

  document.getElementById("Contact-form").addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();

    var Name = getElementVal("Name");
    var Email = getElementVal("Email");
    var Subject = getElementVal("Subject");
    var Message = getElementVal("Message");

    saveMessages(Name,Email,Subject,Message);

    //Alert
    document.querySelector(".Alert").style.display ="block";

    //Remove Alert
    setTimeout(() => {
        document.querySelector(".Alert").style.display ="none";
        
    }, 3000);

  }
  const saveMessages =(Name,Email,Subject,Message)=>{
     var newContactForm = contactFormDB.push();

     newContactForm.set({
        Name:Name,
        Email :Email,
        Subject :Subject,
        Message :Message, 
     })

  };

  const getElementById= (id) =>{
        return document.getElementById(id).value;
  };
}
