$(document).ready(function() {
	$("#turn-on-all").on("click", function() {
		$(".checkbox").trigger("click");
	}); 
	$("#select-blue-lights").on("click", function() {
		$(".checkbox").toggleClass("green-color-lights");
		$(".checkbox").toggleClass("select-blue-lights");
	});
	$("#select-green-lights").on("click", function() {
		$(".checkbox").toggleClass("green-color-lights");
		$(".checkbox").toggleClass("select-green-lights");
	});
	$("#select-red-lights").on("click", function() {
		$(".checkbox").toggleClass("green-color-lights");
		$(".checkbox").toggleClass("select-red-lights");
	});
});
$(document).ready(function() {
	let checkboxesArray = [document.getElementById('checkbox'), document.getElementById('checkbox2'), document.getElementById('checkbox3'), document.getElementById('checkbox4'), document.getElementById('checkbox5'), document.getElementById('checkbox6'), document.getElementById('checkbox7'), document.getElementById('checkbox8'), document.getElementById('checkbox9'), document.getElementById('checkbox10'), document.getElementById('checkbox11'), document.getElementById('checkbox12'), document.getElementById('checkbox13'), document.getElementById('checkbox14'), document.getElementById('checkbox15'), document.getElementById('checkbox16'), document.getElementById('checkbox17'), document.getElementById('checkbox18'), document.getElementById('checkbox19'), document.getElementById('checkbox20'), document.getElementById('checkbox21'), document.getElementById('checkbox22'), document.getElementById('checkbox23'), document.getElementById('checkbox24'), document.getElementById('checkbox25'), document.getElementById('checkbox26'), document.getElementById('checkbox27'), document.getElementById('checkbox28')];

	function arrayRandElement(checkboxesArray) {
	    var rand = Math.floor(Math.random() * checkboxesArray.length);
	    return checkboxesArray[rand];
	} 

	$("#random-lights-on").on("click", function() {
		
		$("#random-lights-on").toggleClass("on-light");

		var i = 1;   
		if($("#random-lights-on").hasClass("on-light")){        
			function myLoop () {      
				setTimeout(function () {  
				    $(arrayRandElement(checkboxesArray)).trigger("click");        
				    i++;                    
				    if (i < 10) {  
				    	if(i == 9 || $("#random-lights-on").hasClass("on-light")){
				    		i = 1;
				    	}    
				    	else{
				    		i = 11;
				    	}      
				    	myLoop();             
				    }                       
				}, 100);
			}
		myLoop();
		}
	}); 


	let randomColorsArr = ["green-color-lights", "select-blue-lights", "select-red-lights", "select-yellow-lights", "select-purple-lights"];

	function arrayRandColorElement(randomColorsArr) {
	    var randColor = Math.floor(Math.random() * randomColorsArr.length);
	    return randomColorsArr[randColor];
	} 

	$("#random-color-lights-on").on("click", function() {

		$("#random-color-lights-on").toggleClass("on-color-light");

		var rndcolcount = 1;   
		if($("#random-color-lights-on").hasClass("on-color-light")){        
			function rndmColor () {      
				setTimeout(function () {  
				    $(".checkbox").toggleClass(arrayRandColorElement(randomColorsArr));        
				    rndcolcount++;                    
				    if (rndcolcount < 10) {  
				    	if(rndcolcount == 9 || $("#random-color-lights-on").hasClass("on-color-light")){
				    		rndcolcount = 1;
				    	}    
				    	else{
				    		i1 = 11;
				    	}      
				    	rndmColor();             
				    }                       
				}, 200);
			}
		rndmColor();
		}
	});



	$("#random-color-lights-on-random-button").on("click", function() {

		$("#random-color-lights-on-random-button").toggleClass("on-color-light-random-btn");

		var rndColCountRndBtns = 1;   
		if($("#random-color-lights-on-random-button").hasClass("on-color-light-random-btn")){  
		      
			function rndmColorBtns () {      
				setTimeout(function () {  
				    $(arrayRandElement(checkboxesArray)).toggleClass(arrayRandColorElement(randomColorsArr));

				    rndColCountRndBtns++;                    
				    if (rndColCountRndBtns < 10) {  
				    	if(rndColCountRndBtns == 9 || $("#random-color-lights-on-random-button").hasClass("on-color-light-random-btn")){
				    		rndColCountRndBtns = 1;
				    	}    
				    	else{
				    		rndColCountRndBtns = 11;
				    	}      
				    	rndmColorBtns();             
				    }                       
				}, 200);
			}
		rndmColorBtns();
		}
	});
});