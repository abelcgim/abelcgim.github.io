//Deja de mirar el javascript, tramposo.
var data = '{"HABITACIÓN":{"initText":"Te tumbas en la cama de tu habitación.","choice1":{"button":"MIRAR MÓVIL","time_incremental":25,"text1":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Memes sobre bebedores profesionales de cerveza</p>","text2":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: </p>","text3":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: </p>","text4":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: </p>","text5":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: </p>"},"choice2":{"button":"MIRAR PARED","time_incremental":15,"text":"Hay colgado un cuadro que pintaste recientemente. Lo aprecias durante 15 minutos"}},"VENTANA":{"initText":"Te asomas a la ventana de tu bajo.","choice1":{"button":"APLAUDIR","text":"Ves al cabrón del balcón de enfrente paseando por la calle, aplaudes con desgana y vuelves dentro."},"choice2":{"button":"OBSERVAR LA CALLE","text":"Hay varias personas paseando."}},"BAÑO":{"initText":"Intentas abrir la puerta pero está cerrada. Al inspeccionarla escuchas ruidos que provienen de dentro.","choice1":{"button":"INVESTIGAR RUIDOS","text":"Escuchas el sonido de un portal expulsando materia oscura.<p>O hay alguien cagando, es difícil distinguirlo.</p>"},"choice2":{"button":"IGNORAR RUIDOS","text":"Decides que lo que está pasando ahí dentro no es tan interesante."}},"SALÓN":{"initText":"Estás en tu salón. Entre tus posesiones destaca una TV y una cortina.","choice1":{"button":"VER TV","time_incremental":10,"text":"Están discutiendo los partidos políticos sobre el plan de desescalada."},"choice2":{"button":"ABRIR CORTINA","text":"Anda, si estaba aquí la bolsa de la basura."}},"COCINA":{"initText":"Estás en tu cocina. Te quedan 10 latas de cerveza, quizás deberias racionarlas.","choice1":{"button":"BEBER CERVEZA","text":"Has bebido X, te quedan Y latas."}},"PASILLO":{"initText":"¿Quien necesita un pasillo de 2 metros de largo pudiendo salir a la calle a pasear en tu franja horaria establecida?"},"MERCADONA":{"initText":"Has sido previsor y tienes suficiente comida en casa.","choice1":{"button":"","text":""}},"CALLE":{"initText":"Sólo puedes salir a la calle ","choice1":{"button":"SALIR","text":""},"choice2":{"button":"NO SALIR","text":"Decides no ayudar a que repunten los casos."}}}';
var json = JSON.parse(data);
var time=new Date(2020,04,02,15,03);
var bagFound=false;
var firstNight=false;
var multas=0;
var beerleft=10
var beerdrunk=0
var achievements=0
var runCounter=0
var currentPercentage=0
var divisor=10
var countdowninprogress=false;


window.onload = function(e){
  document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
};


function reset() {
	location.reload();
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function addTime(value) {
	time=new Date(time.getTime() + value * 60000);
    if (time.getHours()==0) {
		document.querySelector(".currentText").innerHTML="Tras un intenso día de cuarentena caes dormido. <p>Te despiertas a la mañana siguiente, desbordado por las infinitas posibilidades de este nuevo día.</p>"
		document.querySelector("#choice1").style.display = "none";
		document.querySelector("#choice2").style.display = "none";
		time=new Date(time.getTime() + 600 * 60000);
	}
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
	achievements++;
}

function locationSelector(value) {
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
  } else document.querySelector(".currentText").innerHTML="He dicho que esperes a tu turno, no te muevas coño."
  if (value=="Mercadona" && achievements==4 && !countdowninprogress && !exitmercadona) {
  	  document.querySelector("#text").classList.add("largerText");
  	  mercadona(value);
  }
  if (value=="FINAL CHALLENGE") {
   	  document.querySelector("#text").classList.add("largerText");
  }

}


function choiceSelector(value) {
  document.querySelector("#text").classList.remove("largerText");
  var location=document.querySelector(".current-location").innerText;
  var currentText=document.querySelector(".currentText");
  currentText.innerHTML=json[location][value].text;
  
  if (location=="VENTANA") {
  	  var timeHourMinute=time.getHours()+":"+String(time.getMinutes()).padStart(2, "0");
  	  if (timeHourMinute=="19:58" && value=="choice1") {
  	    document.querySelector("#text").classList.add("largerText");  	 
  	    currentText.innerHTML="Ves al cabrón del balcón de enfrente paseando por la calle, aplaudes con desgana un rato y vuelves dentro.";
  	    addTime(5);
  	    document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
  	  } else if (value=="choice1") currentText.innerHTML="...que son las "+timeHourMinute+ ", no las 19:58.";
  }
  if (location=="SALÓN" && value=="choice1") {
  	  json[location][value].text="Ves la tele durante 10 minutos.<p>No parece que los partidos vayan a dejar de discutir pronto.</p>";
  }
  if (location=="SALÓN" && value=="choice2" && !bagFound) {
  	 currentText.innerHTML+="<p>BOLSA VACÍA añadida al INVENTARIO</p>";
  	 json[location][value].text="Ya no hay nada aquí.";
  	 modifyInventory("BOLSA VACÍA");
  	 bagFound=true;
  }
  if (location=="COCINA" && value=="choice1") {
  	  if (beerleft==1) {
  	  	  if (!newgameplus) {
  	  	    currentText.innerHTML="No se que pretendías conseguir pero te has quedado sin cerveza.";
  	      } else {
  	        currentText.innerHTML="Pillas tal borrachera que se te olvidan todos los logros obtenidos.<p>LOGRO CONSEGUIDO: BLACKOUT</p>";
  	        infractorHabitual=false;
            clapping=false;
            firstNight=false;
            exercise=false;
            document.querySelector(".current-achiev").innerText="BLACKOUT";
  	      }
  	  	  json[location].initText="Hay latas de cerveza vacías desperdigadas por la mesa.<p>Ya no te quedan bolsas de basura para recogerlas.</p>";
  	  	  json[location][value].button="";
  	  	  document.querySelector("#choice1").style.display = "none";
  	  }
  	  else {
  	    beerleft--
  	    beerdrunk++
  	    json[location].initText="Estás en tu cocina. Te quedan "+beerleft+" latas de cerveza"
  	    if (beerleft>10) {
  	    	json[location].initText+=", hora de emborracharse.";
  	    } else json[location].initText+=", quizás deberias racionarlas.";
  	    currentText.innerHTML=currentText.innerHTML.replace("X", beerdrunk);
  	    currentText.innerHTML=currentText.innerHTML.replace("Y", beerleft);
      }
  }
  if (location=="HABITACIÓN" && value=="choice1") {
  	  var randomText="text"+String(Math.floor(Math.random() * 5) + 1);
  	  currentText.innerHTML=json[location][value][randomText];
  }
  if (location=="HABITACIÓN" && value=="choice2") {
  	  json[location][value].text="Hay colgado un cuadro que pintaste recientemente, ¿deseas inspeccionarlo?";
  }
  if (location=="CALLE" && value=="choice1") {
  	  locationSelector("ENCUENTRO CON POLICÍA");
  }
  if (json[location][value]!=undefined && json[location][value].time_incremental!=undefined) {
  	 var timeIncremental=json[location][value].time_incremental
  	 addTime(timeIncremental);
  	 if (document.querySelector(".ui-time-place span")!=undefined)
  	 document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
  }  
}