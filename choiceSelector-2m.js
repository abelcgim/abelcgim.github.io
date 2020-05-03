//Deja de mirar el javascript, tramposo.
var data = '{"HABITACIÓN":{"initText":"Te tumbas en la cama de tu habitación.","choice1":{"button":"MIRAR MÓVIL","time_incremental":25,"text1":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Memes sobre la reapertura de los bares.</p>","text2":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Vídeos de aglomeraciones de gente paseando.</p>","text3":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Memes de la desescalada.</p>","text4":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Trump sugiriendo beber lejía contra el coronavirus.</p>","text5":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Gente pillada en videoconferencias del trabajo.</p>"},"choice2":{"button":"MIRAR PARED","time_incremental":15,"text":"Hay colgado un cuadro que pintaste recientemente. Lo observas durante 15 minutos."}},"VENTANA":{"initText":"Te asomas a la ventana de tu bajo.","choice1":{"button":"APLAUDIR","text":"Ves al cabrón del balcón de enfrente y a muchos otros paseando por la calle mientras aplauden... aplaudes con desgana y vuelves dentro."},"choice2":{"button":"OBSERVAR LA CALLE","text":"Hay bastante gente paseando."}},"BAÑO":{"initText":"Intentas abrir la puerta pero está cerrada. Al inspeccionarla escuchas ruidos que provienen de dentro.","choice1":{"button":"INVESTIGAR RUIDOS","text":"Escuchas el sonido de un portal expulsando materia oscura.<p>O hay alguien cagando dentro, es difícil distinguirlo.</p>"},"choice2":{"button":"IGNORAR RUIDOS","text":"Decides que lo que está pasando ahí dentro no es tan interesante."}},"SALÓN":{"initText":"Estás en tu salón. Entre tus posesiones destaca una TV y una cortina.","choice1":{"button":"VER TV","time_incremental":10,"text":"Están discutiendo los partidos políticos sobre el plan de desescalada."},"choice2":{"button":"ABRIR CORTINA","text":"Anda, si estaba aquí la bolsa de la basura."}},"COCINA":{"initText":"Estás en tu cocina. Te quedan 10 latas de cerveza, quizás deberias racionarlas.","choice1":{"button":"BEBER CERVEZA","text":"Has bebido X, te quedan Y latas."}},"PASILLO":{"initText":"¿Quien necesita un pasillo de 2 metros de largo pudiendo salir a la calle a pasear en tu franja horaria establecida?"},"MERCADONA":{"initText":"Has sido previsor y tienes suficiente comida en casa.","choice1":{"button":"","text":""}},"CALLE":{"initText":"Con la desescalada quizás seas capaz de salir.","choice1":{"button":"PASEAR","text":""},"choice2":{"button":"TIRAR LA BASURA","text":""}}}';
var json = JSON.parse(data);
var time=new Date(2020,04,02,15,03);
var bagFound=false;
var bathroomOpen=false;
var multas=0;
var beerleft=10
var beerdrunk=0
var achievements=0
var runCounter=0
var currentDistance=0
var divisor=10
var countdowninprogress=false;
var seenpainting=false;
var survivor=false;
var sinmulta=false;
var libertad=false;
var paseado=false;
var haciaatras=false;
var runcounter=0;


window.onload = function(e){
  document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
};

function exitClick() {
	document.querySelector(".final-container").classList.add("hidden");
	locationSelector("HABITACIÓN");
	document.querySelector(".container").style.display="block";
    document.querySelector(".bottom").style.display = 'block';
    addTime(25);
    document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
    document.querySelector(".currentText").innerHTML="Vuelves de las experiencias inolvidables que has experimentado en tu paseo.";
    if (!libertad) {
      document.querySelector(".currentText").innerHTML+="<p>LOGRO CONSEGUIDO: LIBERTAD</p>";
      modifyAchievements("LIBERTAD");
      libertad=true;
    }
    paseado=true;
}

function openBathroom() {
	json["BAÑO"].initText="Encuentras el baño abierto.<p>Pero las realidades dentro del vórtice están siendo actualmente alteradas por las acciones del gobierno.</p>";
	json["BAÑO"].initText+="<img class='tobecontinued' style='display: block;' src='./isthata.jpg' width title='ToBeContinued' alt='ToBeContinued'>";
	json["BAÑO"]["choice1"].button="";
	json["BAÑO"]["choice2"].button="";
	bathroomOpen=true;
}

function resetPaseo() {
	paseado=false;
    haciaatras=false;
    runcounter=0;
    document.querySelector('.event1').classList.add("hidden");
	document.querySelector('.event2').classList.add("hidden");
	document.querySelector('.btnRun').classList.remove("hidden");
	document.querySelector('.btnExit').classList.add("hidden");
}


function run() {
	if (!haciaatras) {
      currentDistance+=100;
      var br = document.createElement('br');
      document.querySelector(".character1").prepend(br);
    } else {
      if (currentDistance>100) {
      	currentDistance-=100;
        var list = document.querySelector(".character1");
        list.removeChild(list.childNodes[0]);
      }
      else {
      	currentDistance-=100;
      	document.querySelector('.event1').classList.add("hidden");
	    document.querySelector('.event2').classList.remove("hidden");
      	document.querySelector('.btnRun').classList.add("hidden");
        document.querySelector('.btnExit').classList.remove("hidden");
      }
    }
    if (currentDistance==1000) {
    	document.querySelector('.event1').classList.remove("hidden");   	
    	haciaatras=true;
    }
	document.querySelector(".current-porcentage").innerText=currentDistance;
}

function reset() {
	location.reload();
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function addTime(value) {
	time=new Date(time.getTime() + value * 60000);
	if (time.getHours()==0 && time.getUTCDate()==4 && !survivor) {
		time=new Date(time.getTime() + 600 * 60000);
		document.querySelector(".currentText").innerHTML="Gracias a tener comida en casa evitas la desnutrición.";
	    document.querySelector(".currentText").innerHTML+="<p>LOGRO CONSEGUIDO: SUPERVIVIENTE</p>";
		modifyAchievements("SUPERVIVIENTE");
		survivor=true;
		document.querySelector("#choice1").style.display = "none";
		document.querySelector("#choice2").style.display = "none";
	}
    else if (time.getHours()==0) {
    	resetPaseo();
    	if (!bathroomOpen) openBathroom();
    	document.querySelector(".catthrower").style.display = "none";
		document.querySelector(".currentText").innerHTML="Tras un intenso día de cuarentena caes dormido. <p>Te despiertas a la mañana siguiente, ya acostumbrado a las infinitas posibilidades que trae este nuevo día.</p>"
		document.querySelector("#choice1").style.display = "none";
		document.querySelector("#choice2").style.display = "none";
		time=new Date(time.getTime() + 600 * 60000);
	}
}

function modifyInventory(value) {
  document.querySelector(".current-inventory").innerText=value;
}

function modifyAchievements(value) {
	var text=document.querySelector(".current-achiev").innerText;
	if (text.indexOf("NINGUNO")==0) {
		document.querySelector(".current-achiev").innerText=value;
	} else document.querySelector(".current-achiev").innerText+=", "+value;
	achievements++;
}

function locationSelector(value) {
  document.querySelector(".catthrower").style.display = "none";
  if (!countdowninprogress) {
	  document.querySelector("#text").classList.remove("largerText");
	  if (value=="Terraza") {
	  	  value="Ventana";
	  }
	  document.querySelector(".current-location").innerText=value.toUpperCase();
	  var currentText=document.querySelector(".currentText");
	  currentText.innerHTML=json[value.toUpperCase()].initText; 
	  var choice1=json[value.toUpperCase()].choice1;
	  var choice2=json[value.toUpperCase()].choice2;
	  if (choice1!=undefined && choice1.button!="") {
	      var button1=json[value.toUpperCase()].choice1.button;
	  	  document.querySelector("#choice1").innerText=button1;
	  	  document.querySelector("#choice1").style.display = "block";
	  } else  document.querySelector("#choice1").style.display = "none";
	  if (choice2!=undefined && choice2.button!="") {
	  	  var button2=json[value.toUpperCase()].choice2.button;
	  	  document.querySelector("#choice2").innerText=button2;
	  	  document.querySelector("#choice2").style.display = "block";
	  } else  document.querySelector("#choice2").style.display = "none";
  } 
  if (value=="Cocina" && beerleft==0) {
   	  if (!bagFound) {
  	  	document.querySelector(".currentText").innerHTML+="<p>Jurarías que hay una bolsa de la basura en algún lugar de la casa.</p>"
    	} else if (!sinmulta) {
  	  	  document.querySelector(".currentText").innerHTML="Recoges las latas vacías de la mesa.";
  	  	  document.querySelector(".currentText").innerHTML+="<p>BOLSA se ha transformado en BASURA</p>";
  	  	  modifyInventory("BASURA");
  	  	  json["COCINA"].initText="Ya no hay nada aquí.";
  	  	  sinmulta=true;
  	   }
  }

}


function choiceSelector(value) {
  document.querySelector(".catthrower").style.display = "none";
  document.querySelector("#text").classList.remove("largerText");
  var location=document.querySelector(".current-location").innerText;
  var currentText=document.querySelector(".currentText");
  currentText.innerHTML=json[location][value].text;
  if (location=="HABITACIÓN" && value=="choice2") {
   document.querySelector("#text").classList.add("largerText");
   document.querySelector(".catthrower").style.display = "block";
    if (!seenpainting) {
      document.querySelector("#choice2").innerText="MIRAR CUADRO";
      json[location][value].button="MIRAR CUADRO";	
      json[location][value].text="Te deleitas observando tu cuadro durante otros 15 minutos.";	
      seenpainting=true;
    }
  }
  if (location=="VENTANA") {
  	  var timeHourMinute=time.getHours()+":"+String(time.getMinutes()).padStart(2, "0");
  	  if (timeHourMinute=="19:58" && value=="choice1") {
  	    currentText.innerHTML="Ves al cabrón del balcón de enfrente y a muchos otros paseando por la calle mientras aplauden... aplaudes con desgana y vuelves dentro.";
  	    addTime(5);
  	    document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
  	  } else if (value=="choice1") currentText.innerHTML="...que son las "+timeHourMinute+ ", no las 19:58.";
  }
  if (location=="SALÓN" && value=="choice1") {
  	  json[location][value].text="Ves la tele durante 10 minutos.<p>No parece que los partidos vayan a dejar de discutir pronto.</p>";
  }
  if (location=="SALÓN" && value=="choice2" && !bagFound) {
  	 currentText.innerHTML+="<p>BOLSA añadida al INVENTARIO</p>";
  	 json[location][value].text="Ya no hay nada aquí.";
  	 modifyInventory("BOLSA");
  	 bagFound=true;
  }
   
  if (location=="COCINA" && value=="choice1" && beerleft>0) {
  	  if (beerleft==1) {
  	  	  currentText.innerHTML="Te has quedado sin cerveza.";
  	  	  json[location].initText="Hay latas de cerveza vacías desperdigadas por la mesa."; 	  	
  	  	  json[location][value].button="";
  	  	  document.querySelector("#choice1").style.display = "none";
  	  	  beerleft--;
  	  }
  	  else {
  	    beerleft--
  	    beerdrunk++
  	    json[location].initText="Estás en tu cocina. Te quedan "+beerleft+" latas de cerveza"
  	    json[location].initText+=", quizás deberias racionarlas.";
  	    currentText.innerHTML=currentText.innerHTML.replace("X", beerdrunk);
  	    currentText.innerHTML=currentText.innerHTML.replace("Y", beerleft);
      }
  }
  if (location=="HABITACIÓN" && value=="choice1") {
  	  var randomText="text"+String(Math.floor(Math.random() * 5) + 1);
  	  currentText.innerHTML=json[location][value][randomText];
  }
  if (location=="CALLE" && value=="choice1") {
  	  currentText.innerHTML="Tienes 30 años así que puedes salir una vez de 6:00 a 10:00 o de 20:00 a 23:00. Todavía no toca.";
  	  if (time.getHours()>19 && time.getHours()<23) {
  	  	if (!paseado) {
  	  	  document.querySelector(".container").style.display = 'none';
  	      document.querySelector(".bottom").style.display = 'none';
  	      document.querySelector(".final-container").classList.remove("hidden");
  	    } else currentText.innerHTML="Solo puedes pasear una vez al día.";
  	  }
  }
   if (location=="CALLE" && value=="choice2") {
   	  if (!bagFound) {
   	   	  currentText.innerHTML="No tienes la BASURA contigo, mejor no arriesgarte a que te pongan una MULTA.";   	   	  
   	  } else {
   	  	  document.querySelector(".currentText").classList.add("largerText");
   	  	  currentText.innerHTML="Pasas el control de la policía y tiras la basura.";
   	  	  currentText.innerHTML+="<p>Era obvio desde el principio que la solución pasaba por viajar en el tiempo.</p><p>LOGRO CONSEGUIDO: SINMULTA</p>";
   	  	  modifyAchievements("SINMULTA"); 
   	  	  document.querySelector("#choice2").style.display = "none";
   	   	  json[location][value].button="";
   	  }
  }
  if (json[location][value]!=undefined && json[location][value].time_incremental!=undefined) {
  	 var timeIncremental=json[location][value].time_incremental
  	 addTime(timeIncremental);
  	 if (document.querySelector(".ui-time-place span")!=undefined)
  	 document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
  }  
}