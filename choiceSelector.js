//Deja de mirar el javascript, tramposo.
var data = '{"HABITACIÓN":{"initText":"Te tumbas en la cama de tu habitación.","choice1":{"button":"MIRAR MÓVIL","time_incremental":25,"text1":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Videos de Resistiré por varios grupos.</p>","text2":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Videos con los africanos del ataúd.</p>","text3":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Memes varios del coronavirus.</p>","text4":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Videos de gente pillada saltándose la cuarentena.</p>","text5":"Miras el móvil durante 25 minutos.<p>Notificaciones WhatsApp: Bulos del desescalado del confinamiento.</p>"},"choice2":{"button":"MIRAR PARED","time_incremental":15,"text":"Inspeccionas la pared durante 15 minutos, es una pared blanca ordinaria."}},"VENTANA":{"initText":"Tu piso de mierda no tiene terraza, te asomas a la ventana de tu bajo.","choice1":{"button":"APLAUDIR","text":"El cabrón del balcón de enfrente se te ha vuelto a adelantar, aplaudes durante 5 minutos junto al vecindario."},"choice2":{"button":"OBSERVAR LA CALLE","text":"No se oye ni un ruido."}},"BAÑO":{"initText":"Intentas abrir la puerta pero está cerrada. Al inspeccionarla escuchas ruidos que provienen de dentro.","choice1":{"button":"INVESTIGAR RUIDOS","text":"Efectivamente, hay alquien cagando dentro."},"choice2":{"button":"IGNORAR RUIDOS","text":"Decides que lo que está pasando ahí dentro no es tan interesante."}},"SALÓN":{"initText":"Estás en tu salón. Entre tus posesiones destaca una TV y una cortina.","choice1":{"button":"VER TV","time_incremental":10,"text":"Ves la tele durante 10 minutos.<p>Esta hablando Pedro Sanchéz, parece que extienden la cuarentena otras dos semanas.</p>"},"choice2":{"button":"ABRIR CORTINA","text":"Anda, si estaba aquí la perra."}},"COCINA":{"initText":"Estás en tu cocina. Te quedan 10 latas de cerveza, quizás deberias racionarlas.","choice1":{"button":"BEBER CERVEZA","text":"Has bebido X, te quedan Y latas."}},"PASILLO":{"initText":"¿Quien necesita salir a la calle teniendo un pasillo de 2 metros de largo? Te preparas para ejercitar tu cuerpo.","choice1":{"time_incremental":5,"button":"CAMINAR","text":"Caminas de un lado a otro del pasillo. Das 50 vueltas en 5 minutos."},"choice2":{"button":"HACER FLEXIONES","text":"Intentas hacer una flexión, pero desistes."}},"MERCADONA":{"initText":"Necesitas demostrar tu valía antes de poder afrontar el RETO DE COMPRA EN MERCADONA.<p>Vuelve cuando hayas conseguido 4 LOGROS.</p>","choice1":{"button":"","text":""}},"PASILLO MERCADONA":{"initText":"<p>Entras y las puertas del MERCADONA se cierran tras de ti, dejandóte atrapado.</p><p>Lo ves a la distancia. El último rollo de PAPEL HIGIÉNICO.</p>","choice1":{"button":"A POR ÉL","text":""}},"FINAL CHALLENGE":{"initText":"<p>De repente ves a otra persona mirando el mismo rollo.</p><p>Tu archienemigo, el cabrón del balcón de enfrente.</p>","choice1":{"button":"ADELANTATE!","text":""}},"CALLE":{"initText":"¿Estás seguro de querer salir a la calle? No tienes necesidad.","choice1":{"button":"SALIR","text":""},"choice2":{"button":"NO SALIR","text":"Decides no ser un subnormal que sale a la calle sin motivo."}},"ENCUENTRO CON POLICÍA":{"initText":"Sales a la calle a estirar las piernas, al doblar la esquina te encuentras un policía. ¿Adónde va usted señor?","choice1":{"button":"A PASEAR A LA PERRA","text":""},"choice2":{"button":"A SACAR LA BASURA","text":""}}}';
var json = JSON.parse(data);
var time=new Date(2020,03,12,15,03);
var dogFound=false;
var infractorHabitual=false;
var clapping=false;
var exercise=false;
var firstNight=false;
var bathroomOpen=false;
var multas=0;
var beerleft=10
var beerdrunk=0
var achievements=0
var runCounter=0
var currentPercentage=0
var divisor=10
var countdowninprogress=false;
var exitmercadona=false;
var newgameplus=false;


window.onload = function(e){
  document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
};

function toiletClick() {
	if (!document.querySelector('.event3').classList.contains("hidden")) {
	  document.querySelector(".toilet-paper-container").style.display = 'none';
	  document.querySelector('.event3').classList.add("hidden");
	  document.querySelector('.event4').classList.remove("hidden");
	  document.querySelector('.runText').classList.add("auto");
	  document.querySelector('.btnExit').classList.remove("hidden");
	  document.querySelector('.ui-secret-inventory').classList.remove("hidden");
    }
}

function newGamePlus() {
	$('video').mediaelementplayer();
    document.querySelector('.ui-secret-inventory').classList.add("hidden");
	document.querySelector(".ending").style.display = "none";
	document.querySelector(".container").style.display = "block";
	locationSelector("HABITACIÓN");
	document.querySelector(".currentText").innerHTML="Notas el aire vibrar, algo ha cambiado en el baño y la cocina.";
	document.querySelector(".currentText").classList.add("largerText");
	beerdrunk=0;
	beerleft=50;
	newgameplus=true;
	json["COCINA"].initText="Estás en tu cocina. Te quedan 50 latas de cerveza, hora de emborracharse.";
	json["COCINA"].choice1.button="BEBER CERVEZA";
	json["BAÑO"].initText="Se ha formado un vórtice temporal en tu retrete después de tirar de la cadena.<p>¿Te aventuras en él?</p>";
	json["BAÑO"]["choice1"].button="VENGA, VA";
	json["BAÑO"]["choice1"].text="";
}

function exitClick() {
	document.querySelector("#player").pause();
	document.querySelector(".final-container").remove();
	locationSelector("HABITACIÓN");
	document.querySelector(".container").style.display="block";
	document.querySelector(".ui-locations-top").style.display = "block";
    document.querySelector(".ui-locations-bottom").style.display = "block";
    document.querySelector(".bottom").style.display = 'block';
    document.querySelector(".currentText").innerHTML="Vuelves del MERCADONA. <p>Con las prisas se te ha olvidado comprar comida.</p>";
    json["BAÑO"].initText="Sabes lo que tienes que hacer, estás preparado.";
    json["BAÑO"].choice1.button="CAGAR";
    json["BAÑO"].choice1.text="Cagas.";
    json["BAÑO"].choice2.button="";
    json["MERCADONA"].initText="Están reponiendo el stock.";
    exitmercadona=true;
}

function run() {
	runCounter++;
	if (runCounter == 50) {
      document.querySelector('.event1').classList.remove("hidden");
      document.querySelector('.btnCountdown').classList.remove("hidden");
      document.querySelector('.btnRun').classList.add("hidden");
      for (let i = 14; i >= 0; i--) {
	      setTimeout(function() { 
	      document.querySelector(".btnCountdown").innerText=i;	      
	      if (i==0) {
	      	 document.querySelector('.event1').classList.add("hidden");
	      	 document.querySelector('.btnCountdown').classList.add("hidden");
	      	 document.querySelector('.btnRun').classList.remove("hidden");
          }     
	      }, (15-i)*1000);
      }
      
	}
    if (runCounter == 80) {
      document.querySelector('.event2').classList.remove("hidden");
      divisor=20;
	}
	if (runCounter == 138) {
      document.querySelector('.event2').classList.add("hidden");
      document.querySelector('.event3').classList.remove("hidden");
      //document.querySelector('.instructions').classList.add("hidden");
      document.querySelector('.btnRun').classList.add("hidden");
      document.querySelector('.toilet-paper-container').classList.add("moving");
	}
	if (runCounter % (divisor) === 0 || runCounter==137) {
	  var br = document.createElement('br');
	  document.querySelector(".character1").prepend(br);
	}
	if (divisor==20 && runCounter>80) {
	 if (runCounter % 3==0) currentPercentage+=1;
	} else currentPercentage+=1;
	document.querySelector(".current-porcentage").innerText=currentPercentage;
}

function reset() {
	location.reload();
}

function mercadona(value) {
	document.querySelector(".currentText").innerHTML="El día soñado ha llegado, las puertas del MERCADONA se abren ante ti.<p>Pero hay cola por protocolo de seguridad, espera a tu turno.</p>"
	$('audio').mediaelementplayer();
	document.querySelector(".toilet-paper").src="toiletpaper.png";	
    document.querySelector("#choice1").innerText="10";
	document.querySelector("#choice1").style.display="block";
	document.querySelector("#choice2").style.display = "none";
	document.querySelector("#choice2").style.display = "none";
	countdowninprogress=true;
	document.querySelector("#choice1").removeAttribute("onclick");
    for (let i = 9; i >= 0; i--) {
      setTimeout(function() { 
      document.querySelector("#choice1").innerText=i;
      if (i==0) {
        countdowninprogress=false;
        locationSelector("PASILLO MERCADONA");
        document.querySelector("#text").classList.add("largerText");
        document.querySelector("#choice1").setAttribute("onclick", "choiceSelector(this.id)");
        document.querySelector(".ui-locations-top").style.display = "none";
        document.querySelector(".ui-locations-bottom").style.display = "none";
      }
      }, (10-i)*1000);
    }
    
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function openBathroom() {
	json["BAÑO"].initText="Encuentras el baño libre!<p>Mierda, se ha acabado el papel higiénico.</p>";
	json["BAÑO"]["choice1"].button="";
	json["BAÑO"]["choice2"].button="";
	bathroomOpen=true;
}

function addTime(value) {
	time=new Date(time.getTime() + value * 60000);
	if (time.getHours()==0 && time.getUTCDate()==14) {
		document.querySelector(".container").remove();
      	if (!exitmercadona) {
      		document.querySelector(".currentTextOver").innerHTML+="<p>Tras varios dias sin comer te desmayas. Si hubieras ido al MERCADONA esto no habría pasado...¿No disponible? Mala suerte.</p>"
      	} else {
      		document.querySelector(".currentTextOver").innerHTML+="<p>Tras varios dias sin comer te desmayas. Si te hubieras acordado de comprar comida en MERCADONA esto no habría pasado...</p>";
      	}
      	document.querySelector(".currentTextOver").innerHTML+="<p>LOGRO CONSEGUIDO: DESNUTRIDO</p>";
      	modifyAchievements("DESNUTRIDO");      	    
      	document.querySelector(".over").style.display = "block";	
	}
	else if (time.getHours()==0) {
		if (!bathroomOpen) openBathroom();
		document.querySelector(".currentText").innerHTML="Tras un intenso día de cuarentena caes dormido. <p>Te despiertas a la mañana siguiente, desbordado por las infinitas posibilidades de este nuevo día.</p>"
		if (!firstNight) {
		  firstNight=true;
		  document.querySelector(".currentText").innerHTML+="<p>LOGRO CONSEGUIDO: RUTINA</p>";
		  modifyAchievements("RUTINA");   
		}	
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
  if (location=="BAÑO" && value=="choice1" && newgameplus) {
  	  if (beerleft==1) {
  	    document.querySelector(".container").style.display = "none";
  	    document.querySelector(".achievements").style.display = "none"; 
	    document.querySelector(".mejs__fullscreen-button button").click();
	    document.querySelector("#playervideo").play(); 	    document.querySelector(".final-container-eot").classList.remove("hidden");
 	    setTimeout(function(){
	      document.querySelector(".final-container-eot").remove();
          window.location.href = './simulador-cuarentena-eot.html';
        }, 10000);
  	  }
  	  else
  	  currentText.innerHTML="Estás demasiado sobrio como para adentrarte en tu retrete."; 	  	  
  }
  if (location=="BAÑO" && value=="choice1" && !document.querySelector(".ui-secret-inventory").classList.contains("hidden")) {
  	  document.querySelector('.ui-secret-inventory').classList.remove("hidden");
  	  document.querySelector(".container").style.display = "none";
  	  document.querySelector(".ending").style.display = "block";
  }
  
  if (location=="PASILLO MERCADONA" && value=="choice1") {
  	  locationSelector("FINAL CHALLENGE");
  } 
  if (location=="FINAL CHALLENGE" && value=="choice1") {
  	  document.querySelector(".container").style.display = 'none';
  	  document.querySelector(".bottom").style.display = 'none';
  	  document.querySelector(".final-container").classList.remove("hidden");
  	  document.querySelector("#player").play();
  }
  if (location=="VENTANA") {
  	  var timeHourMinute=time.getHours()+":"+String(time.getMinutes()).padStart(2, "0");
  	  if (timeHourMinute=="19:58" && value=="choice1") {
  	    document.querySelector("#text").classList.add("largerText");  	 
  	    currentText.innerHTML="El cabrón del balcón de enfrente se te ha vuelto a adelantar, aplaudes durante 5 minutos junto al vecindario.";
  	    if (!clapping) {
  	  	    clapping=true;
  	  	    modifyAchievements("SOLIDARIDAD");
  	  	    currentText.innerHTML+="<p>LOGRO CONSEGUIDO: SOLIDARIDAD</p>";
  	    }
  	    addTime(5);
  	    document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
  	  } else if (value=="choice1") currentText.innerHTML="...que son las "+timeHourMinute+ ", no las 19:58.";
  	  if (timeHourMinute=="19:58" && value=="choice2") {
  	  	  currentText.innerHTML="Ves a los vecinos preparándose para aplaudir.";
  	  }
  }
  if (location=="SALÓN" && value=="choice1") {
  	  json[location][value].text="Ves la tele durante 10 minutos.<p>No parece que el discurso de Pedro Sanchéz vaya a acabar pronto.</p>";
  }
  if (location=="SALÓN" && value=="choice2" && !dogFound) {
  	 currentText.innerHTML+="<p>PERRA añadida al INVENTARIO</p>";
  	 json[location][value].text="Ya no hay nada aquí.";
  	 modifyInventory("PERRA");
  	 dogFound=true;
  }
  if (location=="PASILLO" && value=="choice2" && !exercise) {
  	  currentText.innerHTML+="<p>LOGRO CONSEGUIDO: CUERPOESCOMBRO</p>";
  	  modifyAchievements("CUERPOESCOMBRO"); 
  	  exercise=true;
  }
  if (location=="COCINA" && value=="choice1") {
  	  if (beerleft==1) {
  	  	  if (!newgameplus) {
  	  	    currentText.innerHTML="No se que pretendías conseguir pero te has quedado sin cerveza.";
  	      } else {
  	        currentText.innerHTML="Pillas tal borrachera que se te olvidan todos los logros obtenidos. Te encuentras más receptivo a sucesos extraños.<p>LOGRO CONSEGUIDO: BLACKOUT</p>";
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
  	  json[location][value].text="Inspeccionas la pared durante otros 15 minutos, sigue siendo una pared blanca ordinaria.";
  }
  if (location=="CALLE" && value=="choice1") {
  	  locationSelector("ENCUENTRO CON POLICÍA");
  }
  if (location=="ENCUENTRO CON POLICÍA") {
  	  currentText.innerHTML="El policía se te queda mirando como si fueras gilipollas...que efectivamente eres porque ";
  	  if (value=="choice2") {
  	  	  currentText.innerHTML+="no llevas una bolsa de basura contigo.</p><p>MULTA añadida al INVENTARIO</p>";
  	  }
  	  else if (!dogFound) {
  	  	 currentText.innerHTML+="no tienes la PERRA contigo.</p><p>MULTA añadida al INVENTARIO</p>";
  	  }
  	  else {
  	  	currentText.innerHTML+="la PERRA que llevas contigo es de peluche.<p>MULTA añadida al INVENTARIO</p>";
      }
      multas++
      if (multas>9) {
      	    document.querySelector(".container").remove();
      	    document.querySelector(".currentTextOver").innerHTML="<p>Tras multarte 10 veces el policía se harta y te manda a la cárcel. Deberías haberlo visto venir...</p><p>LOGRO CONSEGUIDO: CONDENADO</p>";
      	    modifyAchievements("CONDENADO");      	    
      	    document.querySelector(".over").style.display = "block";
      }	  
      else if (multas>1 && !infractorHabitual) {
      	  infractorHabitual=true;
      	  modifyAchievements("INFRACTOR HABITUAL");
      	  currentText.innerHTML+="<p>LOGRO CONSEGUIDO: INFRACTOR HABITUAL</p>";
      }
      if (multas<10) {
        modifyInventory("MULTA x1");
        document.querySelector("#choice1").style.display = "none";
        document.querySelector("#choice2").style.display = "none";
      }
  }
  if (json[location][value]!=undefined && json[location][value].time_incremental!=undefined) {
  	 var timeIncremental=json[location][value].time_incremental
  	 addTime(timeIncremental);
  	 if (document.querySelector(".ui-time-place span")!=undefined)
  	 document.querySelector(".ui-time-place span").innerText=time.toLocaleString();
  }  
}