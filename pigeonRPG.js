var counter=0;
var battleCounter=0;

var textos = [];
var battleTextos = [];
var tiltedTextos = ["PIGEON TILS","HERA NEA IS TILTED"];
var currentText=document.querySelector(".currentText");
var enemyText=document.querySelector(".enemyText p");

var pigeonHP=25;
var heraHP=30;
var crumbs=true;

var pigeonStatus=document.querySelector('.statusPigeon')
var heraStatus=document.querySelector('.statusHera')

window.onload = function(e){
  textos.push("PIGEON: It can't be! What's the PIGEON QUEEN doing here?");
  textos.push("HERA NEA: Muahahaha, I see you've finally made it into my secret evil nest.");
  textos.push("HERA NEA: I'm not the benevolent PIGEON QUEEN I pretend to be.");
  textos.push("HERA NEA: All along I've been doing my sadistic, evil actions from the shadows. All the inflation in the pigeon kingdom? That was me.");
  textos.push("HERA NEA: Now, fight me PIGEON!");
  battleTextos.push("PIGEON attacks.;5")
  battleTextos.push("HERA NEA does some bullshit.;5")
  battleTextos.push("PIGEON uses PIGEON ATTACK. HERA NEA tries to dodge it, but instead rushes towards it.;5")
  battleTextos.push("HERA NEA starts drinking coffee, energizing herself.")
  battleTextos.push("PIGEON attacks.;5")
  battleTextos.push("HERA NEA finishes drinking coffee and morphs into her TRUE FORM, increasing her ATTACK. Her appearance stuns PIGEON.;;TRUE FORM")
  battleTextos.push("PIGEON is too stunned at the sight of whatever the fuck that thing is to act.")
  battleTextos.push("HERA NEA screeches and uses DRILL ATTACK.;10")
  battleTextos.push("PIGEON attacks.;5")
  battleTextos.push("HERA NEA uses RACCOON ATTACK.;10")
  battleTextos.push("PIGEON attacks.;5")
  battleTextos.push("HERA NEA uses RACCOON ATTACK.;10")
  battleTextos.push("PIGEON attacks.;5")
  battleTextos.push("HERA NEA uses RACCOON ATTACK.;10")
};


function introMode() {
	document.querySelector("#pigeon").remove();
	document.querySelector("#twoScreen").classList.remove("hidden");
	currentText.innerHTML=textos[counter];
	document.querySelector("#start").remove();
	document.querySelector("#next").classList.remove("hidden");
	counter++;
}

function addHeraState(state) {
	if (heraStatus.innerText=="NONE" || heraStatus.innerText=="" ) {
		heraStatus.innerText=state;	
	} else {
		heraStatus.innerText+=" , "+state;		
	}
}

function deathCheck() {
	if (pigeonHP<=0) {
		pigeonStatus.innerText="KO"
		$('.btn-grid').addClass('hidden')
		$('.btn-gameover').removeClass('hidden')	
	}
	if (heraHP<=0) {
		heraStatus.innerText="KO"
		document.querySelector('#evilPigeon').src="./resourcesPigeon/ded.webp";
		$('.btn-grid').addClass('hidden')
		$('.btn-credits').removeClass('hidden')	
	}
}

function gameover() {
	document.querySelector("#audioBoss").remove();
	document.querySelector(".over .audio-container audio").play();
	document.querySelector(".over").classList.remove("hidden");
	document.querySelector('.container').classList.add("hidden");	
}

function epilogue() {
	document.querySelector("#audioBoss").remove();	
	document.querySelector(".credits .audio-container audio").play();
	document.querySelector(".credits").classList.remove("hidden");
	document.querySelector('.container').classList.add("hidden");	
}

function reset() {
	location.reload();
}


function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function reduceTurn(selector) {
	if (selector.innerText!="NONE") {
		var arrayStates=selector.innerText.split(",")
		for (var i=0;i<=arrayStates.length-1;i++) {
			var textoState=arrayStates[i]
			var turnLeft=textoState.charAt(textoState.indexOf("(")+1)
			var newText=replaceAt(textoState,textoState.indexOf("(")+1,turnLeft-1);
			if (turnLeft==2) {
				newText=newText.replace("TURNS","TURN");
			} else newText=newText.replace("TURN","TURNS");
			if (turnLeft==0) {
				newText="NONE";
			}
			selector.innerText=selector.innerText.replace(textoState,newText);			
		}
		selector.innerText=selector.innerText.replace("NONE,NONE","NONE");
		selector.innerText=selector.innerText.replace("NONE, ","");	
	}
}

function goBack() {
	currentText.innerHTML="You save the BREAD CRUMBS for later.";
	enemyText.innerHTML="";
	$('.btn-grid').removeClass('hidden')
	$('.btn-grid-items').addClass('hidden');
}

function items() {
	currentText.classList.remove("orange");
	currentText.classList.add("white");
	if (crumbs) {
		currentText.innerHTML="You have some BREAD CRUMBS. What do you do with them?";
		enemyText.innerHTML="";
		$('.btn-grid').addClass('hidden')
		$('.btn-grid-items').removeClass('hidden');
	} else {
		currentText.innerHTML="You are out of BREAD CRUMBS.";
		enemyText.innerHTML="";	
		
	}
}

function action(type) {
	if (type=="eat" || type=="throw") {
		$('.btn-grid').removeClass('hidden')
		$('.btn-grid-items').addClass('hidden');
	}
	reduceTurn(pigeonStatus);
	reduceTurn(heraStatus);
	currentText.classList.remove("orange");
	currentText.classList.add("white");
	currentText.innerHTML="";
	enemyText.innerHTML="";
	$('.btn-grid').addClass('hidden')
	var timeout=700;
	var textToShow;
	setTimeout(function() {
		textToShow=battleTextos[battleCounter].split(";")[0];
		if (pigeonStatus.innerText.indexOf('STUNNED')==-1) {
			if (type=="tilt") {				
				if (heraStatus.innerText.indexOf("TILTED")>-1) {
					textToShow="HERA NEA is already TILTED. The Mental Attack has no effect."
				}
				else {
					textToShow="PIGEON bullies HERA NEA with a Mental Attack. She gets TILTED and will receive DOUBLE DAMAGE from ATTACKS"
					addHeraState("TILTED (2 TURNS LEFT)")						
				}			
			}
			if (type=="eat") {
				if (pigeonHP<25) {
					battleTextos[battleCounter]="PIGEON eats the BREAD CRUMBS and heals for 1 HP";
					pigeonHP=pigeonHP+1;
					document.querySelector('.hpPigeon').innerText=pigeonHP;
				} else battleTextos[battleCounter]="PIGEON eats the BREAD CRUMBS but he's already at MAX HP";
				textToShow=battleTextos[battleCounter].split(";")[0];
				crumbs=false;
			}
			if (type=="throw") {
				battleTextos[battleCounter]="PIGEON throws the BREAD CRUMBS around. HERA NEA stares at them hungrily.";
				textToShow=battleTextos[battleCounter].split(";")[0];
				addHeraState("EATING (1 TURN LEFT)");
				crumbs=false;
			}
			deathCheck();
		}
		var damage=battleTextos[battleCounter].split(";")[1];
		var state=battleTextos[battleCounter].split(";")[2];
		currentText.innerHTML=textToShow;
		if (damage!=null && damage>0 && type!="tilt") {
			if (heraStatus.innerText.indexOf('TILTED')>-1) {
				damage=damage*2
			}
			currentText.innerHTML+=" Deals "+damage+" DAMAGE";
			heraHP=heraHP-damage;
			document.querySelector('.hpHera').innerText=heraHP;
		}
		if (state!=null) {
			pigeonStatus.innerText=state;
		}
	  	battleCounter++
	}, timeout);
	timeout+=700;	
	setTimeout(function() {
		if (heraHP>0) {
			if (heraStatus.innerText.indexOf('EATING')>-1) {
				//Removed tilt when eating if applied
				var textEating;
				if (heraStatus.innerText.indexOf('EATING (0')>-1) {
					textEating="HERA NEA eats the remaining BREAD CRUMBS";
				}
				else textEating="HERA NEA eats half of the BREAD CRUMBS";
				if (heraStatus.innerText.indexOf('TILTED')>-1)  {
					textEating+=". Eating removes her TILTED status."
					console.log("check"+heraStatus.innerText);
					heraStatus.innerText=heraStatus.innerText.replace("TILTED (1 TURN LEFT) , ","");
					heraStatus.innerText=heraStatus.innerText.replace("TILTED (0 TURNS LEFT) , ","");	
					heraStatus.innerText=heraStatus.innerText.replace(", TILTED (2 TURNS LEFT)","");				
				}
				battleTextos.splice(battleCounter, 0, textEating);
				battleTextos.splice(battleCounter+1, 0, "PIGEON attacks the enemy.;5");
			}
			var textToShow=battleTextos[battleCounter].split(";")[0];
			var damage=battleTextos[battleCounter].split(";")[1];
			var state=battleTextos[battleCounter].split(";")[2];
			enemyText.innerHTML+=textToShow;
			if (damage!=null && damage>0) {
				pigeonHP=pigeonHP-damage;
				document.querySelector('.hpPigeon').innerText=pigeonHP;
				enemyText.innerHTML+=" Deals "+damage+" DAMAGE";
				if (pigeonHP<=0) {
					enemyText.innerHTML+=" and KO's PIGEON.";	
				}
			}
			if (state!=null) {					
				if (state=="TRUE FORM") {
					document.querySelector('#evilPigeon').src="./resourcesPigeon/trueForm.png";
					document.querySelector('.nameHera').innerText="NAME: HERA NEA (TRUE FORM)";
					document.querySelector('#statsHera .attackStat').innerText="10";
					pigeonStatus.innerText="STUNNED (1 TURN LEFT)";
				} else {
					heraStatus.innerText=state;
				}
			}
			$('.btn-grid').removeClass('hidden');
			battleCounter++;		
		} else enemyText.innerHTML+="HERA NEA faints";
		deathCheck();
	}, timeout);
}

function nextTurn() {
	$('.btn-grid').removeClass('hidden')
}

function nextText() {
	var textToShow=textos[counter];
	if (textToShow.indexOf("HERA NEA")>-1) {
		currentText.classList.remove("white");
		currentText.classList.add("orange");
	} else {
		currentText.classList.remove("orange");
		currentText.classList.add("white");
	}
	currentText.innerHTML=textToShow;
	counter++;
	if (counter==5) {
		document.querySelector("#next").classList.add("hidden");
		document.querySelector("#attack").classList.remove("hidden");
		document.querySelector("#mAttack").classList.remove("hidden");
		document.querySelector("#items").classList.remove("hidden");
		document.querySelector("#statsPigeon").classList.remove("noOpacity");
		document.querySelector("#statsHera").classList.remove("noOpacity");
		document.querySelector(".audio-container audio").classList.remove("noOpacity");
		document.querySelector(".audio-container audio").play();
		$('#startButtons').remove();
	}

}