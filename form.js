function validateForm(){
    var username= document.getElementById("username").value;

    var email= document.getElementById("email").value;
    var password = document.getElementById(" password ").value;

}
if(username.length<3){
    alert(" ae madharchod naaam bade rakh, lulli jaisa chota naam rakh liya");
}
 if(! email==/^[^\s@]+@[^\s@]+\.[^\s@]+$/){
   alert(" please enter ur valid email");
 }