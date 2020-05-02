var data='{"time1":"<p>2019, que año tan bueno en comparación.</p><p>Mejor no interferir aquí.</p>","time2":"<p>¿Estás preparado para embarcarte en una aventura épica de viajes por el tiempo para finalmente evitar el primer contagio por coronavirus?</p><p>Va a ser que no.</p>","time3":"<p>Lo tienes muy visto, mejor ver las diferencias en el futuro.</p>"}';
var json = JSON.parse(data);
window.onload = function(e){  	
	$('audio').mediaelementplayer({
	    success: function(mediaElement, domObject) {
	      if (document.querySelector(".mejs__play"))
	         document.querySelector("#player").play();
	    }
	});
};



function choiceSelector(value) {
	document.querySelector(".currentTextEOT").innerHTML=json[value];
}

function timeTravel() {
    document.querySelector(".container").classList.add("hidden");
	document.querySelector("#player").pause();
	$('video').mediaelementplayer();
	document.querySelector(".mejs__fullscreen-button button").click();
	document.querySelector("#playervideo").play();
	document.querySelector(".final-container-eot").classList.remove("hidden");
 	setTimeout(function(){
	  document.querySelector(".final-container-eot").remove();
      window.location.href = './simulador-cuarentena-2m.html';
    }, 10000);
}
