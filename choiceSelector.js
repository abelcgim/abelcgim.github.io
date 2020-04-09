var data = '{"HABITACIÓN":{"initText":"Te tumbas en la cama de tu habitación.","choice1":{"button":"MIRAR MÓVIL","text":"Te han enviado el video de Resistiré por varios grupos de WhatsApp."},"choice2":{"button":"MIRAR PARED","time_incremental":15,"text":"Inspeccionas la pared durante 15 minutos, es una pared blanca ordinaria."}},"VENTANA":{"initText":"Tu piso de mierda no tiene terraza, te asomas a la ventana de tu bajo.","choice1":{"button":"APLAUDIR","text":"Aplaudes hasta que te duelen la manos."}},"SALÓN":{"initText":"Estás en tu salón.","choice1":{"button":"VER TV","text":"Esta hablando Pedro Sanchéz, parece que extienden la cuarentena otras dos semanas."}},"CALLE":{"initText":"¿Estás seguro de querer salir a la calle? No tienes necesidad.","choice1":{"button":"SI","text":"Sales a la calle a estirar las piernas, al doblar la esquina te encuentras un policia. ¿Adonde va usted señor?"},"choice2":{"button":"NO","text":"Decides no ser un subnormal que salga a la calle sin motivo."}}}';
var json = JSON.parse(data);
var time=new Date(2020,04,12,15,58,0);

window.onload = function(e){
  console.log("timeinit"+time);
  document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
};

function locationSelector(value) {
  if (value=="Terraza") {
  	  value="Ventana";
  }
  document.querySelector(".current-location").innerText=value.toUpperCase();
  var currentText=document.querySelector(".currentText");
  currentText.innerHTML=json[value.toUpperCase()].initText; 
  if (json[value.toUpperCase()].choice1!=undefined) {
      var button1=json[value.toUpperCase()].choice1.button;
  	  document.querySelector("#choice1").innerText=button1;
  	  document.querySelector("#choice1").style.display = "block";
  } else  document.querySelector("#choice1").style.display = "none";
  if (json[value.toUpperCase()].choice2!=undefined) {
  	  var button2=json[value.toUpperCase()].choice2.button;
  	  document.querySelector("#choice2").innerText=button2;
  	  document.querySelector("#choice2").style.display = "block";
  } else  document.querySelector("#choice2").style.display = "none";

}


function choiceSelector(value) {
  var location=document.querySelector(".current-location").innerText;
  var currentText=document.querySelector(".currentText");
  var textToShow;
  if (location=="VENTANA" && value=="choice1") {
  	  console.log("entracondition");
  	  var timeHourMinute=time.getHours()+":"+String(time.getMinutes()).padStart(2, "0");
  	  if (timeHourMinute=="19:58") {
  	  document.querySelector(".current-achiev").innerText="SOLIDARIDAD";
  	  textToShow="El cabrón del balcón de enfrente se te ha vuelto a adelantar, aplaudes durante 4 minutos junto al vecindario. <p>LOGRO CONSEGUIDO: SOLIDARIDAD</p>";
  	  time=new Date(time.getTime() + 5 * 60000);
  	  document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
  	  } else textToShow="...que son las "+timeHourMinute+ ", no las 19:58.";
  } else textToShow=json[location][value].text;
  var timeIncremental=json[location][value].time_incremental
  if (json[location][value].time_incremental!=undefined) {
  	 time=new Date(time.getTime() + timeIncremental * 60000);
  	 document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
  }  
  currentText.innerHTML=textToShow
  console.log("valor seleccionado: "+location+value);
  console.log("hora"+time);
  console.log("horaincremental"+json[location][value].time_incremental);
}