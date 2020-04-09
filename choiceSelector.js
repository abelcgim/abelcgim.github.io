var databedroom = '{"choice1": "Te han enviado el video de Resistiré por varios grupos de WhatsApp.","choice2": "Inspeccionas la pared durante 5 minutos, es una pared blanca ordinaria."}';


function choiceSelector(value) {
  var location=document.querySelector(".current-location").innerText;
  var currentText=document.querySelector(".currentText");
  var json = JSON.parse(databedroom);
  currentText.innerHTML=json[value];
  console.log("valor seleccionado: "+location+value);
}