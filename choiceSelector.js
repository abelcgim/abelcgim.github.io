var data = '{"HABITACIÓN":{"initText":"Te tumbas en la cama de tu habitación.","choice1":{"button":"MIRAR MÓVIL","text":"Te han enviado el video de Resistiré por varios grupos de WhatsApp."},"choice2":{"button":"MIRAR PARED","time_incremental":15,"text":"Inspeccionas la pared durante 15 minutos, es una pared blanca ordinaria."}},"VENTANA":{"initText":"Tu piso de mierda no tiene terraza, te asomas a la ventana de tu bajo.","choice1":{"button":"APLAUDIR","text":"Aplaudes hasta que te duelen la manos."}},"BAÑO":{"initText":"Intentas abrir la puerta pero está cerrada. Al inspeccionarla escuchas ruidos que provienen de dentro.","choice1":{"button":"INVESTIGAR RUIDOS","text":"Efectivamente, hay alquien cagando dentro."},"choice2":{"button":"IGNORAR RUIDOS","text":"Decides que lo que este pasando hay dentro no es tan interesante."}},"SALÓN":{"initText":"Estás en tu salón. Entre tus posesiones destaca una TV y una cortina.","choice1":{"button":"VER TV","text":"Esta hablando Pedro Sanchéz, parece que extienden la cuarentena otras dos semanas."},"choice2":{"button":"ABRIR CORTINA","text":"Anda, si estaba aquí la perra."}},"MERCADONA":{"initText":"Lo sentimos, el contenido descargable RETO DE COMPRA EN MERCADONA no está actualmente disponible."},"CALLE":{"initText":"¿Estás seguro de querer salir a la calle? No tienes necesidad.","choice1":{"button":"SALIR","text":""},"choice2":{"button":"NO SALIR","text":"Decides no ser un subnormal que sale a la calle sin motivo."}},"ENCUENTRO CON POLICÍA":{"initText":"Sales a la calle a estirar las piernas, al doblar la esquina te encuentras un policía. ¿Adonde va usted señor?","choice1":{"button":"A PASEAR A LA PERRA","text":""}}}';
var json = JSON.parse(data);
var time=new Date(2020,03,12,15,58,0);
var dogFound=false;
var infractorHabitual=false;
var multas=0;

window.onload = function(e){
  document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
};

function reset() {
	location.reload();
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function modifyInventory(value) {
	var text=document.querySelector(".current-inventory").innerText;
	if (value=="MULTA x1" && text.indexOf("x")>0) {
		var newText=replaceAt(text,text.indexOf("x")+1,multas);
		document.querySelector(".current-inventory").innerText=newText;
	}
	else if (text.indexOf("VACÍO")==0) {
		document.querySelector(".current-inventory").innerText=value;
	} else document.querySelector(".current-inventory").innerText+=", "+value;
}

function modifyAchievements(value) {
	var text=document.querySelector(".current-achiev").innerText;
	if (text.indexOf("NINGUNO")==0) {
		document.querySelector(".current-achiev").innerText=value;
	} else document.querySelector(".current-achiev").innerText+=", "+value;
}

function locationSelector(value) {
  document.querySelector("#text").classList.remove("largerText");
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
  document.querySelector("#text").classList.remove("largerText");
  var location=document.querySelector(".current-location").innerText;
  var currentText=document.querySelector(".currentText");
  var textToShow;
  if (location=="VENTANA" && value=="choice1") {
  	  var timeHourMinute=time.getHours()+":"+String(time.getMinutes()).padStart(2, "0");
  	  if (timeHourMinute=="19:58") {
  	  document.querySelector("#text").classList.add("largerText");
  	  modifyAchievements("SOLIDARIDAD");
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
  currentText.innerHTML=textToShow;
  if (location=="SALÓN" && value=="choice2" && !dogFound) {
  	 currentText.innerHTML+="<p>PERRA añadida al INVENTARIO</p>";
  	 json[location][value].text="Ya no hay nada aquí.";
  	 modifyInventory("PERRA");
  	 dogFound=true;
  }
  
  if (location=="HABITACIÓN" && value=="choice2") {
  	  json[location][value].text="Inspeccionas la pared durante otros 15 minutos, sigue siendo una pared blanca ordinaria.";
  }
  if (location=="CALLE" && value=="choice1") {
  	  locationSelector("ENCUENTRO CON POLICÍA");
  }
  if (location=="ENCUENTRO CON POLICÍA" && value=="choice1") {
  	  if (!dogFound) {
  	  	 currentText.innerHTML="<p>El policía se te queda mirando como si fueras gilipollas</p><p>...que efectivamente eres porque no tienes la PERRA contigo.</p><p>MULTA añadida al INVENTARIO</p>";
  	  }
  	  else {
  	  	currentText.innerHTML="<p>El policía se te queda mirando como si fueras gilipollas</p>...que efectivamente eres porque la PERRA que llevas contigo es de peluche.<p>MULTA añadida al INVENTARIO</p>";
      }
      multas++
      if (multas>9) {
      	    document.querySelector(".container").remove();
      	    document.querySelector(".currentTextJail").innerHTML="<p>Tras multarte 10 veces el policía se harta y te manda a la cárcel. Deberías haberlo visto venir...</p><p>LOGRO CONSEGUIDO: CONDENADO</p>";
      	    modifyAchievements("CONDENADO");      	    
      	    document.querySelector(".jail").style.display = "block";
      	    
      }	  
      else if (multas>1 && !infractorHabitual) {
      	  infractorHabitual=true;
      	  modifyAchievements("INFRACTOR HABITUAL");
      	  currentText.innerHTML+="<p>LOGRO CONSEGUIDO: INFRACTOR HABITUAL</p>";
      }
      if (multas<10) {
        modifyInventory("MULTA x1");
        document.querySelector("#choice1").style.display = "none";
      }
  }
}