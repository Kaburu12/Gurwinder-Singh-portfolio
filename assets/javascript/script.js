//onclick on the phone icon
const input = document.getElementsByClassId('call');
  
function click1() {
  alert("CALL : .......");
}

input.addEventListener('click', click1);

//onclick on the email
const emailIcon = document.getElementById('email');
emailIcon.addEventListener("click", click2)

function click2() {
  alert("My Email : gurwindershah@gmail.com")
}

//onclick on the hire button
const hire = document.getElementsByClassId('hire');
emailIcon.addEventListener("click", click3)
function click3(){
  alert(`${"CALL : ......"} \n ${"My Email : gurwindershah@gmail.com"}` );

}