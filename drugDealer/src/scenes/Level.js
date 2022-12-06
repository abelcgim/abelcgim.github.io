
// You can write more code here
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// pharmacy
		const pharmacy = this.add.image(388, 304, "pharmacy");
		pharmacy.visible = false;

		// pharmaPaper_1
		const pharmaPaper_1 = this.physics.add.sprite(400, 501, "pharmaPaper");
		pharmaPaper_1.scaleX = 0.4055216687893193;
		pharmaPaper_1.scaleY = 0.3883533063252391;
		pharmaPaper_1.body.moves = false;
		pharmaPaper_1.body.allowGravity = false;
		pharmaPaper_1.body.collideWorldBounds = true;
		pharmaPaper_1.body.pushable = false;
		pharmaPaper_1.body.setOffset(100, 250);
		pharmaPaper_1.body.setSize(325, 260, false);

		// pharmaPaper
		const pharmaPaper = this.physics.add.sprite(400, 501, "pharmaPaper");
		pharmaPaper.scaleX = 0.4055216687893193;
		pharmaPaper.scaleY = 0.3883533063252391;
		pharmaPaper.body.moves = false;
		pharmaPaper.body.allowGravity = false;
		pharmaPaper.body.collideWorldBounds = true;
		pharmaPaper.body.pushable = false;
		pharmaPaper.body.setOffset(200, 20);
		pharmaPaper.body.setSize(140, 499, false);

		// ikeasmall
		const ikeasmall = this.physics.add.sprite(1007, 688, "ikeasmall");
		ikeasmall.scaleX = 0.13534584828819302;
		ikeasmall.scaleY = 0.1697938073672074;
		ikeasmall.body.setOffset(30, 30);
		ikeasmall.body.setSize(350, 250, false);

		// black
		const black = this.add.image(424, 270, "black");
		black.scaleX = 4.505493526495286;
		black.scaleY = 4.078512623252157;

		// boringLogo
		const boringLogo = this.add.image(713, 555, "boringLogo");
		boringLogo.scaleX = 0.21338055851721333;
		boringLogo.scaleY = 0.21777535158768985;

		// inspiredBy
		const inspiredBy = this.add.text(710, 515, "", {});
		inspiredBy.setOrigin(0.5, 0.5);
		inspiredBy.text = "Inspired by:";
		inspiredBy.setStyle({ "backgroundColor": "", "color": "#ffffffff", "fontFamily": "Arial", "fontSize": "20px" });

		// ASMR
		const aSMR = this.add.text(87, 25, "", {});
		aSMR.setOrigin(0.5, 0.5);
		aSMR.text = "ASMR Sound:";
		aSMR.setStyle({ "backgroundColor": "", "color": "#ffffffff", "fontFamily": "Arial", "fontSize": "25px" });

		// instructions
		const instructions = this.add.text(396, 217, "", {});
		instructions.setOrigin(0.5, 0.5);
		instructions.text = "INSTRUCTIONS\n\nHold A->Move Left\nHold D->Move Right\nCollect Drugs\nAvoid Ikea Thingies";
		instructions.setStyle({ "align": "center", "backgroundColor": "", "color": "#ffffffff", "fontFamily": "Arial", "fontSize": "30px", "stroke": "#4d0606ff" });

		// unchecked
		const unchecked = this.add.image(193, 25, "unchecked");
		unchecked.scaleX = 0.24595876320170149;
		unchecked.scaleY = 0.2291981656224381;

		// checked
		const checked = this.add.image(193, 25, "checked");
		checked.scaleX = 0.24595876320170149;
		checked.scaleY = 0.2291981656224381;
		checked.visible = false;

		// highscoresButton
		const highscoresButton = this.add.image(394, 450, "highscore");
		highscoresButton.scaleX = 0.8;
		highscoresButton.scaleY = 0.8;

		// highscoresButton2
		const highscoresButton2 = this.add.image(394, 376, "highscore2");
		highscoresButton2.scaleX = 0.8;
		highscoresButton2.scaleY = 0.8;
		highscoresButton2.visible = false;

		// startButton
		const startButton = this.add.image(394, 365, "start");
		startButton.scaleX = 0.8;
		startButton.scaleY = 0.8;

		// retryButton
		const retryButton = this.add.image(396, 311, "retry");
		retryButton.scaleX = 0.8;
		retryButton.scaleY = 0.8;
		retryButton.visible = false;

		// highscoreText
		const highscoreText = this.add.text(394, 248, "", {});
		highscoreText.setOrigin(0.5, 0.5);
		highscoreText.visible = false;
		highscoreText.text = "HIGHSCORES (TOP 15)\n\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25\nhi trixi: 25";
		highscoreText.setStyle({ "align": "center", "backgroundColor": "", "color": "#ffffffff", "fontFamily": "Arial", "fontSize": "25px", "stroke": "#4d0606ff" });

		// backButton
		const backButton = this.add.image(393, 553, "back");
		backButton.visible = false;

		// textOme
		const textOme = this.add.text(104, 60, "", {});
		textOme.setOrigin(0.5, 0.5);
		textOme.text = "Score: 0";
		textOme.setStyle({ "align": "justify", "color": "#8a0606ff", "fixedWidth":200,"fontFamily": "Arial", "fontSize": "35px", "stroke": "#000000ff", "strokeThickness":2});

		// submitButton
		const submitButton = this.add.image(532, 251, "submit");
		submitButton.scaleX = 0.8;
		submitButton.scaleY = 0.8;
		submitButton.visible = false;

		// scoreSubmitted
		const scoreSubmitted = this.add.text(398, 250, "", {});
		scoreSubmitted.setOrigin(0.5, 0.5);
		scoreSubmitted.visible = false;
		scoreSubmitted.text = "SCORE SUBMMITED";
		scoreSubmitted.setStyle({ "align": "justify", "color": "#000000ff", "fixedWidth":350,"fontFamily": "Arial", "fontSize": "35px", "stroke": "#fcfcfcff", "strokeThickness":2,"shadow.color": "#ffffffff" });

		// gameOverText
		const gameOverText = this.add.text(418, 190, "", {});
		gameOverText.setOrigin(0.5, 0.5);
		gameOverText.visible = false;
		gameOverText.text = "GAME OVER";
		gameOverText.setStyle({ "align": "justify", "color": "#000000ff", "fixedWidth":500,"fontFamily": "Arial", "fontSize": "75px", "stroke": "#ffffffff", "strokeThickness":5,"shadow.color": "#ffffffff" });

		this.pharmacy = pharmacy;
		this.pharmaPaper_1 = pharmaPaper_1;
		this.pharmaPaper = pharmaPaper;
		this.ikeasmall = ikeasmall;
		this.black = black;
		this.boringLogo = boringLogo;
		this.inspiredBy = inspiredBy;
		this.aSMR = aSMR;
		this.instructions = instructions;
		this.unchecked = unchecked;
		this.checked = checked;
		this.highscoresButton = highscoresButton;
		this.highscoresButton2 = highscoresButton2;
		this.startButton = startButton;
		this.retryButton = retryButton;
		this.highscoreText = highscoreText;
		this.backButton = backButton;
		this.textOme = textOme;
		this.submitButton = submitButton;
		this.scoreSubmitted = scoreSubmitted;
		this.gameOverText = gameOverText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	pharmacy;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	pharmaPaper_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	pharmaPaper;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ikeasmall;
	/** @type {Phaser.GameObjects.Image} */
	black;
	/** @type {Phaser.GameObjects.Image} */
	boringLogo;
	/** @type {Phaser.GameObjects.Text} */
	inspiredBy;
	/** @type {Phaser.GameObjects.Text} */
	aSMR;
	/** @type {Phaser.GameObjects.Text} */
	instructions;
	/** @type {Phaser.GameObjects.Image} */
	unchecked;
	/** @type {Phaser.GameObjects.Image} */
	checked;
	/** @type {Phaser.GameObjects.Image} */
	highscoresButton;
	/** @type {Phaser.GameObjects.Image} */
	highscoresButton2;
	/** @type {Phaser.GameObjects.Image} */
	startButton;
	/** @type {Phaser.GameObjects.Image} */
	retryButton;
	/** @type {Phaser.GameObjects.Text} */
	highscoreText;
	/** @type {Phaser.GameObjects.Image} */
	backButton;
	/** @type {Phaser.GameObjects.Text} */
	textOme;
	/** @type {Phaser.GameObjects.Image} */
	submitButton;
	/** @type {Phaser.GameObjects.Text} */
	scoreSubmitted;
	/** @type {Phaser.GameObjects.Text} */
	gameOverText;

	/* START-USER-CODE */
    counter=0;
	velocity=9;
	omeprazols=0;

	ikea1;
	ikea2;
	omeprazole2;
	gameOverScreen=false;
	highscores;
	updateGame=false;
	startButton;
	music;
	inputName;
	submitted=false;


    checkHighScore() {
		const request = new XMLHttpRequest();
		request.open("GET", "https://json.extendsclass.com/bin/8315deb65db6", false);
		request.setRequestHeader('Cache-Control', 'no-cache');
		request.setRequestHeader("Security-key", "cheatersHaveSmallPP");
		request.onreadystatechange = () => {
			if (request.readyState === XMLHttpRequest.DONE) {
				this.highscores = JSON.parse(request.responseText);
				this.highscores.sort(function(a,b){return b.score - a.score});
				for(var i in this.highscores){
					var key = i;
					var val = this.highscores[i];
				}
			}

		};
		request.send();
	}


	backStart() {
		//Pantalla Inicio
		if (!this.gameOverScreen) {
			this.backButton.visible=false;
			this.highscoreText.visible=false;		
			this.instructions.visible=true;	
			this.highscoresButton.visible=true;
			this.startButton.visible=true;
		} else {
			//Pantalla Game Over
            this.viewScoresOpposite();
			this.backButton.visible=false;
			this.highscoreText.visible=false;
	        this.aSMR.setStyle({ "backgroundColor": "", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "25px" });
			if (this.submitted) {
				this.scoreSubmitted.visible=true;
			} else {
				this.inputName.visible=true;
		        this.submitButton.visible = true;
			}
		}

	}

	generateIkea(y,name, maxX) {			
		var collideCallbackOver = function(gameObject1, gameObject2) {
			if (!this.gameOverScreen) {
				this.music.pause();
				this.input.keyboard.disableGlobalCapture()
				var fml = this.sound.add('fml');
				fml.play();
				this.inputName.visible=true;
				this.retryButton.visible = true;
				this.retryButton.setDepth(10);
				this.submitButton.visible = true;
				this.submitButton.setDepth(10);						
				this.gameOverScreen=true;
				this.gameOverText.visible = true;	
				this.highscoresButton2.setDepth(10);
				this.highscoresButton2.visible = true;
				this.aSMR.setDepth(10);
				this.checked.setDepth(10);
				this.unchecked.setDepth(10);
				this.scoreSubmitted.setDepth(10);
			}
		}
		var minX=maxX-400;
		var randomX= Math.random() * (maxX - minX) + minX;
		var randomAngle= Math.random() * (360 - 0) + 0;
		this[name] = this.physics.add.sprite(randomX, y, "ikeasmall");
		this[name].scaleX =  0.13534584828819302;
		this[name].scaleY = 0.1697938073672074;
		this[name].body.setOffset(30, 30);
		this[name].body.setSize(350, 250, false);		
		this.physics.add.collider(this.pharmaPaper_1, this[name],collideCallbackOver,undefined, this);
		this.physics.add.collider(this.pharmaPaper, this[name],collideCallbackOver,undefined, this);

	}

	generateOmeprazol(y,name) {
		var collideCallback = function(gameObject1, gameObject2) {
			this.omeprazols++;			
			this.textOme.text="Score: "+this.omeprazols;
			gameObject2.destroy();
		}
		var randomX= Math.random() * (800 - 0) + 0;
		var randomAngle= Math.random() * (360 - 0) + 0;
		var nameDrug="omeprazole"
		//var nameDrug="paracetamol"
		var sprite=Math.floor(Math.random() * 3);
		if (sprite==0) {
			this[name] = this.physics.add.sprite(randomX, y, "omeprazole");
			this[name].body.setSize(150, 100, false);
		}
		if (sprite==1) {
			this[name] = this.physics.add.sprite(randomX, y, "paracetamol");
			this[name].scaleX =0.5213919856004829;
			this[name].scaleY = 0.5516130737411581;
			this[name].body.setSize(220, 180, false);
		}
		if (sprite==2) {
			this[name] = this.physics.add.sprite(randomX, y, "ibuprofen");
			this[name].scaleX = 0.47156971809971815;
			this[name].scaleY = 0.42397950509390353;
			this[name].body.setSize(150, 287, false);			
		}
		this.physics.add.collider(this.pharmaPaper_1, this[name],collideCallback,undefined, this);
		this.physics.add.collider(this.pharmaPaper, this[name],collideCallback,undefined, this);
	}


    checker() {
		var currentVisibility=this.checked.visible;
		this.checked.visible=!currentVisibility;
		if (this.checked.visible && this.pharmacy.visible) {		
			this.music.loop = true; 
			this.music.play();	
		} else {
			this.music.pause();
		}


	}


	listenerStart() {
		if (this.checked.visible) {		
			this.music.loop = true; 
			this.music.play();	
		}
		var collideCallback = function(gameObject1, gameObject2) {
			gameObject2.destroy();
		}
		var collideCallbackOver = function(gameObject1, gameObject2) {
			gameObject1.destroy();
		}
		this.generateIkea(0,'ikea1',400);
		this.generateIkea(-320,'ikea2',800);
        this.generateOmeprazol(-480,'omeprazole');	


		this.pharmaPaper_1.body.setCollideWorldBounds(true);
		this.pharmaPaper.body.setCollideWorldBounds(true);

		this.physics.world.enable(this.pharmaPaper_1);
		this.physics.world.enable(this.pharmaPaper);
		this.physics.add.collider(this.pharmaPaper_1, this.omeprazole,collideCallback);
		this.physics.add.collider(this.pharmaPaper, this.omeprazole,collideCallbackOver);
		this.black.visible = false;
		this.pharmacy.visible = true;
		this.instructions.visible = false;
		this.startButton.visible = false;
		this.boringLogo.visible = false;
		this.inspiredBy.visible = false;
		this.highscoresButton.visible = false;		
		this.aSMR.setStyle({ "backgroundColor": "", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "25px" });
		this.updateGame=true;
	}

	retryStart() {	
		this.input.keyboard.enableGlobalCapture();
		this.submitted=false;
		this.highscoresButton2.visible = false;	
		this.gameOverText.visible = false;	
		this.scoreSubmitted.visible=false;
		this.inputName.visible=false;
		this.submitButton.visible = false;
		if (this.ikea1!=undefined) {
			this.ikea1.destroy();
		}
		if (this.ikea2!=undefined) {
			this.ikea2.destroy();
		}
		this.counter=0;
		//If checked play music
		if (this.checked.visible) {
			this.music.play();				
		}
        this.omeprazols=0;	
	    this.textOme.text="Score: "+this.omeprazols;		
		this.gameOverScreen=false;	
		this.retryButton.visible = false;
	}

	viewHighscores() {
		this.backButton.visible=true;
		this.highscoreText.visible=true;		
		this.instructions.visible=false;	
        this.highscoresButton.visible=false;
        this.startButton.visible=false;		

		const request = new XMLHttpRequest();
		this.highscoreText.text = "HIGHSCORES (TOP 15)\n"
		request.open("GET", "https://json.extendsclass.com/bin/8315deb65db6", false);
		request.setRequestHeader('Cache-Control', 'no-cache');
		request.setRequestHeader("Security-key", "cheatersHaveSmallPP");
		request.onreadystatechange = () => {
			if (request.readyState === XMLHttpRequest.DONE) {
				this.highscores = JSON.parse(request.responseText);
				this.highscores.sort(function(a,b){return b.score - a.score});
				for(let i = 0; i < this.highscores.length; i++) {
					if (i<15) {
						var current=this.highscores[i];
						var name=current.name
						var score=current.score
						this.highscoreText.text += "\n"+name+": "+score;
					}
				}
			}

		};
		request.send();	
	}

    viewScoresOpposite() {
		this.pharmacy.visible=!this.pharmacy.visible;
		this.black.visible=!this.black.visible;
		this.gameOverText.visible=!this.gameOverText.visible;
		this.retryButton.visible=!this.retryButton.visible;
		this.highscoresButton2.visible=!this.highscoresButton2.visible;
		this.omeprazole.visible=!this.omeprazole.visible;
		this.ikea1.visible=!this.ikea1.visible;
		this.ikea2.visible=!this.ikea2.visible;		
	}


	viewHighscoresGameOver() {
		this.aSMR.setStyle({ "backgroundColor": "", "color": "#ffffffff", "fontFamily": "Arial", "fontSize": "25px" });
		if (!this.scoreSubmitted.visible) {
			this.inputName.visible=false;
			this.submitButton.visible = false;
		}
		this.scoreSubmitted.visible=false;
		this.viewScoresOpposite();
		this.viewHighscores();
	}

	submitStart() {
		this.checkHighScore();
		var namePlayer=document.getElementById("nameInput").value
		if (namePlayer!="") {
			const request = new XMLHttpRequest();
			request.open("PUT", "https://json.extendsclass.com/bin/8315deb65db6", false);
			request.setRequestHeader("Security-key", "cheatersHaveSmallPP");
			request.onreadystatechange = () => {
			};

			this.input.keyboard.enabled = true;
			var jsonPlayer = {
				  "name" :"",
				  "score": 0
			};
			jsonPlayer["name"] = namePlayer;
			jsonPlayer["score"] = this.omeprazols	
			//Check if jsonarray has name, in that case update score. Else new item
			var changed=false
			var update=true;
			for(let i = 0; i < this.highscores.length; i++) {
				if (this.highscores[i].name==jsonPlayer["name"]) {			
					changed=true;
					update=jsonPlayer["score"]>this.highscores[i].score
					if (update) {
						this.highscores[i].score=this.omeprazols
					}
				}				
			}
			if (!changed) {
				this.highscores.push(jsonPlayer);	
			}	
			if (update) {
				request.send(JSON.stringify(this.highscores));
			}
			this.inputName.visible=false;
			this.submitButton.visible=false;
			this.scoreSubmitted.visible=true;
			this.submitted=true;
		}
	}

	// Write more your code here
	create() {		
		this.editorCreate();
		this.inputName=this.add.dom(315, 251).createFromHTML('<input id="nameInput" type="text" name="nameField" placeholder="Enter your name" maxlength="30" style="width: 245px;font-size: 32px">');
		this.inputName.visible=false;
        this.textOme.setDepth(10);
		this.gameOverText.setDepth(10);	
		if (!this.sys.game.device.os.desktop){
			var textInstructions=this.instructions.text
			textInstructions=textInstructions.replace("Hold A->Move Left\nHold D->Move Right","Tap to the left or right to move in that direction");
			this.velocity=6;
			this.instructions.text=textInstructions
		}	
		this.music = this.sound.add('theme');
		this.startButton.setInteractive();
		this.retryButton.setInteractive();
		this.highscoresButton.setInteractive();
		this.highscoresButton2.setInteractive();
		this.backButton.setInteractive();
		this.submitButton.setInteractive();
		this.startButton.once('pointerup', this.listenerStart, this);
		this.retryButton.on('pointerup', this.retryStart, this);
		this.highscoresButton.on('pointerup', this.viewHighscores, this);
		this.highscoresButton2.on('pointerup', this.viewHighscoresGameOver, this);
		this.backButton.on('pointerup', this.backStart, this);
		this.submitButton.on('pointerup', this.submitStart, this);
		this.unchecked.setInteractive();
		this.checked.setInteractive();
		this.unchecked.on('pointerup', this.checker, this);
		this.checked.on('pointerup', this.checker, this);
	}

	update() {
		if (this.updateGame===true && !this.gameOverScreen) {
			this.counter++;
			var difficultyAdd=this.counter / 2000
			var randomX;
			var randomAngle;
			var collect = ["omeprazole"];
			for (var i = 0; i < collect.length; i++) {
				var name=collect[i];
				if (this[name].y >600) {
					this[name].destroy();	
					this.generateOmeprazol(-480,name);			
				}
				else {
					this[name].y +=this.velocity+difficultyAdd;
				}
			}
			//Iterar ikea para su control
			var ikeas = ["ikea1","ikea2"];
			for (var i = 0; i < ikeas.length; i++) {
				var ikeaname=ikeas[i];
				var xIkea;
				if (i % 2 === 0) { 
					xIkea=800;
				}
				else { 
					xIkea=400;
				}
				if (this[ikeaname].y >600) {
					this[ikeaname].destroy();	
					this.generateIkea(0,ikeaname,xIkea);			
				}
				else {
					this[ikeaname].y +=this.velocity+difficultyAdd;
				}
			}
			//Movement pharma
			const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
			leftKey.setEmitOnRepeat(true);
			const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
			rightKey.setEmitOnRepeat(true);
			var isDownLeft = leftKey.isDown;
			if (isDownLeft && this.pharmaPaper.x>25)
			{
				this.pharmaPaper.x -= 13;
				this.pharmaPaper_1.x -= 13;
			}
			var isDownRight = rightKey.isDown;
			if (isDownRight && this.pharmaPaper.x<735) {
				this.pharmaPaper.x += 13;
				this.pharmaPaper_1.x +=13;
			}	
			if (!this.sys.game.device.os.desktop)  {
				if (this.input.activePointer.isDown) {
                    var difference=this.input.activePointer.worldX-this.pharmaPaper.getCenter().x	
					if(difference>30) {					
						this.pharmaPaper.x += 8;
				        this.pharmaPaper_1.x += 8;
					}
					else if (difference<-10) {	
						this.pharmaPaper.x -= 8;
						this.pharmaPaper_1.x -=8;
					}
				}
			}
		}		
    }



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
