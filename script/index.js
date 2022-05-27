

let sendBTN = document.getElementById("form-send")

function isNullish(data){
  console.log(data)
  if (data.includes("")== true){
    alert("Todos los campos son Obligatorios")

  }
  else{
    alert("Mensaje recibido")
  }
}

function readMsg(){
  console.log("aca")
  let nameContact = document.getElementById("form-name").value;
  let emailContact = document.getElementById("form-mail").value;
  let textContact = document.getElementById("form-txt").value;

  const dataContact = {
    name: nameContact,
    email: emailContact,
    text: textContact
  }

  isNullish(Object.values(dataContact))



}




sendBTN.addEventListener("click",readMsg)
