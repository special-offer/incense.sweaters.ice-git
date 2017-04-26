var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		/*
			First an AR.ClientTracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function worldLoaded() is called.

			Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			Use a specific target name to respond only to a certain target or use a wildcard to respond to any or a certain group of targets.
		*/
		this.tracker = new AR.ClientTracker("assets/wyd.wtc", {
			onLoaded: this.worldLoaded
		});




		/////////////////////////////////////////////////////
		/////////////////////// HELPR ///////////////////////
		/////////////////////////////////////////////////////


		// Variables

		var trigs = $('#help-trig, #info-trig');

		// Fisher Yates Shuffle

		function shuffle(array) {
			var currentIndex = array.length, temporaryValue, randomIndex ;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

			    // Pick a remaining element...
			    randomIndex = Math.floor(Math.random() * currentIndex);
			    currentIndex -= 1;

			    // And swap it with the current element.
			    temporaryValue = array[currentIndex];
			    array[currentIndex] = array[randomIndex];
			    array[randomIndex] = temporaryValue;
		  	}

		 	 return array;
		}

		


		/////////////////////////////////////////////////////
		/////////////////////// WYD01 ///////////////////////
		/////////////////////////////////////////////////////




		var video1 = new AR.VideoDrawable("assets/wyd01/wyd01a.mp4",0.75, {
		    offsetX: -0.125,
		  	offsetY: -0.125,
		  	opacity: 0.95
		});

		var video2 = new AR.VideoDrawable("assets/wyd01/wyd01b.mp4", 0.75, {
		    offsetX: 0.15,
		  	offsetY: 0.15,
		  	opacity: 0.95,
		  	zOrder: 1
		});
		
		var wyd01c = new AR.ImageResource("assets/wyd01/wyd01c.jpg");

		var xWyd01C = new AR.ImageDrawable(wyd01c, 0.5, {
			offsetX: -0.15,
			offsetY: -0.15,
			zOrder: 2,
			opacity: 0.7
		});

		var wyd01 = new AR.Trackable2DObject(this.tracker, "wyd01", {
			drawables: {
				cam: [video1,video2,xWyd01C]
			},
			onEnterFieldOfVision: function onEnterFieldOfVisionFn () {
				trigs.removeClass('loaded');
				video1.play(-1);
				video2.play(-1);
			},
			onExitFieldOfVision: function(){
				trigs.addClass('loaded');
				video1.pause();
				video2.pause();
			}
		});





		/////////////////////////////////////////////////////
		/////////////////////// WYD02 ///////////////////////
		/////////////////////////////////////////////////////

		

		// var wyd02 = new AR.Trackable2DObject(this.tracker, "wyd02", {
		// 	onEnterFieldOfVision: function(){
				
		// 	},
		// 	onExitFieldOfVision: function(){
				
		// 	}
		// });




		/////////////////////////////////////////////////////
		/////////////////////// WYD03 ///////////////////////
		/////////////////////////////////////////////////////




		/////////////////////////////////////////////////////
		/////////////////////// WYD04 ///////////////////////
		/////////////////////////////////////////////////////

		var wyd04a = new AR.ImageResource("assets/wyd04/wyd04a.png");
		var wyd04b = new AR.ImageResource("assets/wyd04/wyd04b.png");
		
		var xWyd04A = new AR.ImageDrawable(wyd04a, 0.15, {
			offsetX: -0.2,
			offsetY: 0.3
		});

		var xWyd04B = new AR.ImageDrawable(wyd04b, 0.3, {
			offsetX: 0.5,
			offsetY: 0.2
		});

		var wyd04 = new AR.Trackable2DObject(this.tracker, "wyd04", {
			drawables: {
				cam: [xWyd04A, xWyd04B]
			}
		});




		/////////////////////////////////////////////////////
		/////////////////////// WYD05 ///////////////////////
		/////////////////////////////////////////////////////


		// Audio Components

		var wyd05audio = document.getElementById('wyd05audio');

		// What is total length of audio in seconds?

		var audiolength = 392;

		var wyd05atxt = [
			"The","natural","state","of","your","skin","is","ashy.","Shea","butter","is","the","only","defense.","Use","it","generously.","Lotion","is","for","white","people."
		];

		var wyd05btxt = [
			"Be","scuffed.","Visible","tags,","tears,","holes,","patches,","embellishments,","dirt,","and","fixes","are","essential","to","your","look.","Never","look","too","put","together."
		];

		var wyd05ctxt = [
			"Retain","a","California","accent,","certain","mispronunciations,","and","a","casual","way","of","speaking."
		];

		var wyd05dtxt = [
			"Always","speak","for","yourself."
		];

		var wyd05etxt = [
			"Direct","communication","only.","Hide/remove","logos,","graphics,","colors,","tags,","etc.","that","are","not","part","of","the","message."
		];

		var wyd05ftxt = [
			"Stand","up","straight."
		];

		var wyd05gtxt = [
			"Your","right","side","is","your","good","side."
		];

		var wyd05htxt = [
			"Retain","a","California","accent,","certain","mispronunciations,","and","a","casual","way","of","speaking."
		];

		var wyd05itxt = [
			"Never","give","anyone","the","satisfaction."
		];

		var wyd05jtxt = [
			"Leave","while","you’re","having","a","good","time."
		];

		var wyd05list = [
			wyd05atxt,
			wyd05btxt,
			wyd05ctxt,
			wyd05dtxt,
			wyd05etxt,
			wyd05ftxt,
			wyd05gtxt,
			wyd05htxt,
		];

		var wyd05 = new AR.Trackable2DObject(this.tracker, "wyd05", {
			onEnterFieldOfVision: function(){

				// Set Text Element

				var rand = wyd05list[Math.floor(Math.random() * wyd05list.length)];
				
				var counter = 0;
				var elem = document.getElementById("wyd05-content-inner");

				var timer = setInterval(change, 500);

				function change() {
				     elem.innerHTML = rand[counter];
				        counter++;
				        if(counter >= rand.length) {
				        	elem.innerHTML = '';
				        	clearInterval(timer);
				        }
				    };


				// Get Current Time

				var now = new Date ();
				var timenow = new Date();
				var starttime = new Date();
				var mincount = now.getMinutes();

				if (mincount >= 54) {
					starttime.setMinutes(54);
				} else if (mincount >= 48) {
					starttime.setMinutes(20);
				} else if (mincount >= 42) {
					starttime.setMinutes(42);
				} else if (mincount >= 36) {
					starttime.setMinutes(36);
				} else if (mincount >= 30) {
					starttime.setMinutes(30);
				} else if (mincount >= 24) {
					starttime.setMinutes(24);
				} else if (mincount >= 18) {
					starttime.setMinutes(18);
				} else if (mincount >= 12) {
					starttime.setMinutes(12);
				} else if (mincount >= 6) {
					starttime.setMinutes(6);
				} else if (mincount >= 0) {
					starttime.setMinutes(0);
			    }


		    	// Adjust Audio Placement Accordingly
		    	
		        var timeDifference = ((timenow - starttime) / 60000).toFixed(2);
		        var secsIn = timeDifference * 60;

		        wyd05audio.currentTime = secsIn;
				wyd05audio.play();

				trigs.removeClass('loaded');

				$('#wyd05').show();

			},
			onExitFieldOfVision: function(){
				var elem = document.getElementById("wyd05-content-inner");
				elem.innerHTML = '';
				wyd05audio.pause();
				trigs.addClass('loaded');
				$('#wyd05').hide();
			}
		});




		/////////////////////////////////////////////////////
		/////////////////////// WYD06 ///////////////////////
		/////////////////////////////////////////////////////

		var wyd06a = new AR.ImageResource("assets/wyd06/wyd06a.png");
		var wyd06b = new AR.ImageResource("assets/wyd06/wyd06b.png");
		var wyd06c = new AR.ImageResource("assets/wyd06/wyd06c.png");
		
		var xWyd06A = new AR.ImageDrawable(wyd06a, 0.15, {
			offsetX: 0.05,
			offsetY: -0.075
		});

		var xWyd06B = new AR.ImageDrawable(wyd06b, 0.225, {
			offsetX: 0,
			offsetY: -0.3
		});

		var xWyd06C = new AR.ImageDrawable(wyd06c, 0.05, {
			offsetX: 0,
			offsetY: 0.4
		});

		var wyd06 = new AR.Trackable2DObject(this.tracker, "wyd06", {
			drawables: {
				cam: [xWyd06A, xWyd06B, xWyd06C]
			}
		});




		/////////////////////////////////////////////////////
		/////////////////////// WYD07 ///////////////////////
		/////////////////////////////////////////////////////

		var wyd07_1 =  "assets/wyd07/wyd07.1.gif";
		var wyd07_2 =  "assets/wyd07/wyd07.2.gif";
		var wyd07_3 =  "assets/wyd07/wyd07.3.gif";
		var wyd07_4 =  "assets/wyd07/wyd07.4.gif";
		var wyd07_5 =  "assets/wyd07/wyd07.5.gif";
		var wyd07_6 =  "assets/wyd07/wyd07.6.gif";
		var wyd07_7 =  "assets/wyd07/wyd07.7.gif";
		var wyd07_8 =  "assets/wyd07/wyd07.8.gif";
		var wyd07_9 =  "assets/wyd07/wyd07.9.gif";
		var wyd07_10 = "assets/wyd07/wyd07.10.gif";
		var wyd07_11 = "assets/wyd07/wyd07.11.gif";
		var wyd07_12 = "assets/wyd07/wyd07.12.gif";
		var wyd07_13 = "assets/wyd07/wyd07.13.gif";
		var wyd07_14 = "assets/wyd07/wyd07.14.gif";
		var wyd07_15 = "assets/wyd07/wyd07.15.gif";
		var wyd07_16 = "assets/wyd07/wyd07.16.gif";
		var wyd07_17 = "assets/wyd07/wyd07.17.gif";
		var wyd07_18 = "assets/wyd07/wyd07.18.gif";
		var wyd07_19 = "assets/wyd07/wyd07.19.gif";
		var wyd07_20 = "assets/wyd07/wyd07.20.gif";
		var wyd07_21 = "assets/wyd07/wyd07.21.gif";
		var wyd07_22 = "assets/wyd07/wyd07.22.gif";
		var wyd07_23 = "assets/wyd07/wyd07.23.gif";
		var wyd07_24 = "assets/wyd07/wyd07.24.gif";
		var wyd07_25 = "assets/wyd07/wyd07.25.gif";
		var wyd07_26 = "assets/wyd07/wyd07.26.gif";
		var wyd07_27 = "assets/wyd07/wyd07.27.gif";
		var wyd07_28 = "assets/wyd07/wyd07.28.gif";
		var wyd07_29 = "assets/wyd07/wyd07.29.gif";
		var wyd07_30 = "assets/wyd07/wyd07.30.gif";
		var wyd07_31 = "assets/wyd07/wyd07.31.gif";

		var wyd07list = [
			wyd07_1,
			wyd07_2,
			wyd07_3,
			wyd07_4,
			wyd07_5,
			wyd07_6,
			wyd07_7,
			wyd07_8,
			wyd07_9,
			wyd07_10,
			wyd07_11,
			wyd07_12,
			wyd07_13,
			wyd07_14,
			wyd07_15,
			wyd07_16,
			wyd07_17,
			wyd07_18,
			wyd07_19,
			wyd07_20,
			wyd07_21,
			wyd07_22,
			wyd07_23,
			wyd07_24,
			wyd07_25,
			wyd07_26,
			wyd07_27,
			wyd07_28,
			wyd07_29,
			wyd07_30,
			wyd07_31
		];


		var wyd07 = new AR.Trackable2DObject(this.tracker, "wyd07", {
			onEnterFieldOfVision: function(){
				$('#wyd07').show();
				trigs.removeClass('loaded');

				// Set Image Elements
				

				window.imageaddtimer = setInterval(addImage, 2000);

				function addImage() {

					var left = Math.floor(Math.random() * 75) + 25;
					var top = Math.floor(Math.random() * 75) + 25;

					var randwyd07 = wyd07list[Math.floor(Math.random() * wyd07list.length)];
					var imgEl = "<img src='"+randwyd07+"' style='left:"+left+"%;top:"+top+"%;' />";
					$('#wyd07-content').append(imgEl);
				};


			},
			onExitFieldOfVision: function(){
				clearInterval(window.imageaddtimer);
				$('#wyd07').hide();
				$('#wyd07-content').html('');
				trigs.addClass('loaded');
			}
		});





		/////////////////////////////////////////////////////
		/////////////////////// WYD08 ///////////////////////
		/////////////////////////////////////////////////////

		var wyd08_1 =  "assets/wyd08/wyd08.1.jpg";
		var wyd08_2 =  "assets/wyd08/wyd08.2.jpg";
		var wyd08_3 =  "assets/wyd08/wyd08.3.jpg";
		var wyd08_4 =  "assets/wyd08/wyd08.4.jpg";
		var wyd08_5 =  "assets/wyd08/wyd08.5.jpg";
		var wyd08_6 =  "assets/wyd08/wyd08.6.jpg";
		var wyd08_7 =  "assets/wyd08/wyd08.7.jpg";
		var wyd08_8 =  "assets/wyd08/wyd08.8.jpg";
		var wyd08_9 =  "assets/wyd08/wyd08.9.jpg";
		var wyd08_10 = "assets/wyd08/wyd08.10.jpg";
		var wyd08_11 = "assets/wyd08/wyd08.11.jpg";
		var wyd08_12 = "assets/wyd08/wyd08.12.jpg";
		var wyd08_13 = "assets/wyd08/wyd08.13.jpg";
		var wyd08_14 = "assets/wyd08/wyd08.14.jpg";
		var wyd08_15 = "assets/wyd08/wyd08.15.jpg";
		var wyd08_16 = "assets/wyd08/wyd08.16.jpg";
		var wyd08_17 = "assets/wyd08/wyd08.17.jpg";
		var wyd08_18 = "assets/wyd08/wyd08.18.jpg";
		var wyd08_19 = "assets/wyd08/wyd08.19.jpg";
		var wyd08_20 = "assets/wyd08/wyd08.20.jpg";
		var wyd08_21 = "assets/wyd08/wyd08.21.jpg";
		var wyd08_22 = "assets/wyd08/wyd08.22.jpg";
		var wyd08_23 = "assets/wyd08/wyd08.23.jpg";
		var wyd08_24 = "assets/wyd08/wyd08.24.jpg";
		var wyd08_25 = "assets/wyd08/wyd08.25.jpg";
		var wyd08_26 = "assets/wyd08/wyd08.26.jpg";
		var wyd08_27 = "assets/wyd08/wyd08.27.jpg";
		var wyd08_28 = "assets/wyd08/wyd08.28.jpg";
		var wyd08_29 = "assets/wyd08/wyd08.29.jpg";
		var wyd08_30 = "assets/wyd08/wyd08.30.jpg";
		var wyd08_31 = "assets/wyd08/wyd08.31.jpg";
		var wyd08_32 = "assets/wyd08/wyd08.32.jpg";
		var wyd08_33 = "assets/wyd08/wyd08.33.jpg";
		var wyd08_34 = "assets/wyd08/wyd08.34.jpg";
		var wyd08_35 = "assets/wyd08/wyd08.35.jpg";
		var wyd08_36 = "assets/wyd08/wyd08.36.jpg";
		var wyd08_37 = "assets/wyd08/wyd08.37.jpg";
		var wyd08_38 = "assets/wyd08/wyd08.38.jpg";
		var wyd08_39 = "assets/wyd08/wyd08.39.jpg";
		var wyd08_40 = "assets/wyd08/wyd08.40.jpg";
		var wyd08_41 = "assets/wyd08/wyd08.41.jpg";
		var wyd08_42 = "assets/wyd08/wyd08.42.jpg";
		var wyd08_43 = "assets/wyd08/wyd08.43.jpg";
		var wyd08_44 = "assets/wyd08/wyd08.44.jpg";
		var wyd08_45 = "assets/wyd08/wyd08.45.jpg";
		var wyd08_46 = "assets/wyd08/wyd08.46.jpg";

		var wyd08list = [
			wyd08_1,
			wyd08_2,
			wyd08_3,
			wyd08_4,
			wyd08_5,
			wyd08_6,
			wyd08_7,
			wyd08_8,
			wyd08_9,
			wyd08_10,
			wyd08_11,
			wyd08_12,
			wyd08_13,
			wyd08_14,
			wyd08_15,
			wyd08_16,
			wyd08_17,
			wyd08_18,
			wyd08_19,
			wyd08_20,
			wyd08_21,
			wyd08_22,
			wyd08_23,
			wyd08_24,
			wyd08_25,
			wyd08_26,
			wyd08_27,
			wyd08_28,
			wyd08_29,
			wyd08_30,
			wyd08_31,
			wyd08_32,
			wyd08_33,
			wyd08_34,
			wyd08_35,
			wyd08_36,
			wyd08_37,
			wyd08_38,
			wyd08_39,
			wyd08_40,
			wyd08_41,
			wyd08_42,
			wyd08_43,
			wyd08_44,
			wyd08_45,
			wyd08_46
		];


		var wyd08 = new AR.Trackable2DObject(this.tracker, "wyd08", {
			onEnterFieldOfVision: function(){

				$('#wyd08').show();
				trigs.removeClass('loaded');

				var index = 0;
				window.int = setInterval(changeBG, 500);
			    

			    function changeBG(){
			        if (index >= wyd08list.length)
			          index = 0; // reset back to first image
			        $("#wyd08").css("background-image", "url('"+wyd08list[index]+"')");
			        index++;
			    }




			},
			onExitFieldOfVision: function(){
				$('#wyd08').hide();
				trigs.addClass('loaded');
				clearInterval(window.int);
			}
		});




		/////////////////////////////////////////////////////
		/////////////////////// WYD09 ///////////////////////
		/////////////////////////////////////////////////////




		/////////////////////////////////////////////////////
		/////////////////////// WYD10 ///////////////////////
		/////////////////////////////////////////////////////


		var wyd10_1 =  "assets/wyd10/wyd10a.png";
		var wyd10_2 =  "assets/wyd10/wyd10b.png";
		var wyd10_3 =  "assets/wyd10/wyd10c.png";
		var wyd10_4 =  "assets/wyd10/wyd10d.png";
		var wyd10_5 =  "assets/wyd10/wyd10e.png";
		var wyd10_6 =  "assets/wyd10/wyd10f.png";
		var wyd10_7 =  "assets/wyd10/wyd10g.png";
		var wyd10_8 =  "assets/wyd10/wyd10h.png";

		var wyd10 = new AR.Trackable2DObject(this.tracker, "wyd02", {
			onEnterFieldOfVision: function(){

				$('#wyd10').show();
				trigs.removeClass('loaded');

				var content = $('#wyd10-content');
			
				content.append('<div class="text-right"><img src="'+wyd10_1+'"/></div>');
				setTimeout(function() { content.append('<div class="text-left"><img src="'+wyd10_2+'"/></div>'); }, 1000);
				setTimeout(function() { content.append('<div class="text-right"><img src="'+wyd10_3+'"/></div>'); }, 5000);
				setTimeout(function() { content.append('<div class="text-left"><img src="'+wyd10_5+'"/></div>'); }, 8000);
				setTimeout(function() { content.append('<div class="text-left"><img src="'+wyd10_4+'"/></div>'); }, 8250);
				setTimeout(function() { content.append('<div class="text-right"><img src="'+wyd10_6+'"/></div>'); }, 12500);
				setTimeout(function() { content.append('<div class="text-right"><img src="'+wyd10_7+'"/></div>'); }, 13000);
				setTimeout(function() { content.append('<div class="text-left"><img src="'+wyd10_8+'"/></div>'); }, 15000);


			},
			onExitFieldOfVision: function(){
				$('#wyd10').hide();
				$('#wyd10-content').html('');
				trigs.addClass('loaded');
			}
		});




		/////////////////////////////////////////////////////
		/////////////////////// WYD11 ///////////////////////
		/////////////////////////////////////////////////////



	},

	worldLoaded: function worldLoadedFn() {
		document.getElementById('loadingMessage').innerHTML =
			"<div class='table'><div>Point your phone at one of<br/> the photographs to view.<br/><br/>Click anywhere on the screen<br/> to take a photo.</div></div>";

		// Remove Scan target message after 10 sec.
		setTimeout(function() {
			var d = document.getElementById("loadingMessage");
			d.className += " loaded";
		}, 1000);

		// Remove Scan target message after 10 sec.
		setTimeout(function() {
			$('#loadingMessage').fadeOut();
		}, 5000);

		setTimeout(function() {
			$('#info-trig, #help-trig').addClass('loaded');
		}, 6000);
		
	}
};

World.init();
