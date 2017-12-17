// jQuery
$(document).ready(function(){ // Charge le code à l'intérieur dès que le document est prêt.


	// Récupérer les valeurs d'un attribut
	var startColor = $('#btn-exo-3').attr('data-color-start'); // je récupère la valeur d'un attribut
	//console.log(startColor); // j'affiche dans la console
	$('body').css('background-color', startColor); // j'injecte sur le body

/////////////////////////
	$('[data-monanim]').each(function(){
			var valeur = $(this).attr('data-monanim');
			$(this).addClass(valeur);
		});


	// le bxslider (www.bxslider.com)
	$('#sliderHp').bxSlider({
		mode:'fade',
		auto: true,
		pager:false,
		controls: false,
		speed:1000,
		responsive:true,
		autoDelay:1
	});

	// FULL PAGE
	$('#fullpage').fullpage({
		anchors:['page1','page2','page3','page4','page5','page6','page7'],
		sectionsColor:['white','#619cb6','black','#de3c32','#5D8969','#5f8969','#5D8969'],
		menu:'#menu',
		css3:false,
		scrollBar:true,
		afterRender:function(){
			// Helper function for add element box list in WOW
			WOW.prototype.addBox = function(element){
		    this.boxes.push(element);
			};

			wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
      		// the callback is fired every time an animation is started
      		// the argument that is passed in is the DOM node being animated
    		},
    		scrollContainer: null // optional scroll container selector, otherwise use window
            })
            var wow = new WOW();
			wow.init();
		

			// Attach scrollSpy to .wow elements for detect view exit events,
  			// then reset elements and add again for animation
			 $('.wow').on('scrollSpy:exit', function() {
			    $(this).css({
			      'visibility': 'hidden',
			      'animation-name': 'none'
			    }).removeClass('animated');
			    wow.addBox(this);
			  }).scrollSpy();

			setTimeout(function(){
			 	$('#blasong').addClass('show');
			 	$('#chiengauche .st1').addClass('show');
			 	$('#chiendroit .st1').addClass('show');
			 	$('#nav').addClass('show');
			},1000);

			setTimeout(function(){
			 	$('#titre').addClass('show');
			},2000);
			setTimeout(function(){$('#b1').addClass('onceTime');},1100);
			setTimeout(function(){$('#b2').addClass('onceTime');},1300);
			setTimeout(function(){$('#b3').addClass('onceTime');},1500);
			 
		},
/*::::::::::::::::::GERE LES EFFETS EN ENTR2E ET SORTIE DE PAGE//////////////////
		onLeave: function(index, nextIndex, direction){
				$('[data-anchor]').removeClass('zoomIn zoomOut');
				$('[data-anchor=page'+index+']').addClass('zoomOut');
				$('[data-anchor=page'+nextIndex+']').addClass('zoomIn');
		},	
/*::::::::::::::::::GERE LES EFFETS EN ENTR2E ET SORTIE DE PAGE//////////////////
		


		$('#fullpage').fullpage({
			afterResize: function(){
			var pluginContainer = $(this);
			alert("The sections have finished resizing");
			}
		});


		$('#fullpage').fullpage({
			afterResponsive: function(isResponsive){
			alert("Is responsive: " + isResponsive);
			}
		});

		
		onLeave: function(index, nextIndex, direction){
		var leavingSection = $(this);

		//after leaving section 2
		if(index == 2 && direction =='down'){
			alert("Going to section 3!");
			}

			else if(index == 2 && direction == 'up'){
			alert("Going to section 1!");
			}
		}
		
		*/

	});

	// MENU RIGHT CTA /////////////////////////
	var menu='closed';
	$('#btnMenuOpened').on('click',function(event){ //event doit être initialisé pour Firefox
		event.preventDefault();
		
		if (menu=='closed'){
			menu='opened';
			console.log(menu);
			$('#menuLat').css('display', 'block');	
			$('#menuLat').removeClass('animated slideOutRight');
			$('#menuLat').addClass('animated slideInRight');
			$(this).removeClass('inactive').addClass('active');
			$('#logoMenuLat').addClass('slideDown');
			$('#footerMenuLat').addClass('slideUp');
			}else{
			menu='closed';
			console.log(menu);
			event.preventDefault();
			$('#menuLat').removeClass('animated slideInRight');
			$('#menuLat').addClass('animated slideOutRight');
			$(this).removeClass('active').addClass('inactive');
			$('#logoMenuLat').removeClass('slideDown');
			$('#footerMenuLat').removeClass('slideUp');			
			}
	});



	$('.d1').css({'-webkit-animation-delay':'0s','animation-delay':'0s',});	
	$('.d2').css({'-webkit-animation-delay':'0.6s','animation-delay':'0.6s'});	
	$('.d3').css({'-webkit-animation-delay':'1.2s','animation-delay':'1.2s'});	
	$('.d4').css({'-webkit-animation-delay':'1.8s','animation-delay':'1,8s'});

	$('.g1').css({'-webkit-animation-delay':'0s','animation-delay':'0s',});	
	$('.g2').css({'-webkit-animation-delay':'0.6s','animation-delay':'0.6s'});	
	$('.g3').css({'-webkit-animation-delay':'1.2s','animation-delay':'1.2s'});	



});


/*/////NO USED ///////////////////////////////*/

	/*
	// ANIMATIONS
	$('.haie').addClass('photo');
	$('.chien').addClass('photo');	
	$('#img1').addClass('animated zoomIn');
	$('#haie').addClass('animated slideInLeft');
	$('#chiengauche').addClass('wow slideInRight');
	*/

	/*///textillade
		$(function () {
		$('.tlt').textillate({
		  // the default selector to use when detecting multiple texts to animate
		  selector: '.texts',

		  // enable looping
		  loop: false,

		  // sets the minimum display time for each text before it is replaced
		  minDisplayTime: 2000,

		  // sets the initial delay before starting the animation
		  // (note that depending on the in effect you may need to manually apply
		  // visibility: hidden to the element before running this plugin)
		  initialDelay: 0,

		  // set whether or not to automatically start animating
		  autoStart: true,

		  // custom set of 'in' effects. This effects whether or not the
		  // character is shown/hidden before or after an animation
		  inEffects: [],

		  // custom set of 'out' effects
		  outEffects: [ 'hinge' ],

		  // in animation settings
		  in: {
		  	// set the effect name
		    effect: 'fadeInLeft',

		    // set the delay factor applied to each consecutive character
		    delayScale: 3,

		    // set the delay between each character
		    delay: 100,

		    // set to true to animate all the characters at the same time
		    sync: false,

		    // randomize the character sequence
		    // (note that shuffle doesn't make sense with sync = true)
		    shuffle: false,

		    // reverse the character sequence
		    // (note that reverse doesn't make sense with sync = true)
		    reverse: false,

		    // callback that executes once the animation has finished
		    callback: function () {}
		  },

		  // out animation settings.
		  out: {
		    effect: 'hinge',
		    delayScale: 1.5,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
		  },

		  // callback that executes once textillate has finished
		  callback: function () {},

		  // set the type of token to animate (available types: 'char' and 'word')
		  type: 'char'
		});
	})
	*/
	//////////////////

	/*
	window.addEventListener('scroll', function(e) {
        if( $(window).scrollTop() <= 50) {
        	console.log("top scroll=" + $(window).scrollTop());
            $('.wow').removeClass('animated');
            $('.wow').removeAttr('style');
            new WOW().init();
        }
	});

	WOW.prototype.addBox = function(element){
    this.boxes.push(element);
	};

	$('.wow').on('scrollSpy:exit',function(){
	    var element = $(this);
	    console.log("element=" + element);
	    element.css({
	        'visibility' : 'hidden',
	        'animation-name' : 'none'
	    }).removeClass('animated');
	    wow.addBox(this);
	});
	*/
	////////////// Bouton Scroll to top (id: #scroll-to-top)
    /*
	var offset = 1000;
	var duration = 800;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('#scroll-to-top').fadeIn(duration);
		} else {
			$('#scroll-to-top').fadeOut(duration);
		}
	});

	$('#scroll-to-top').click(function(event) {
 		event.preventDefault();
 		$('html, body').animate({scrollTop: 0}, duration);
 		return false;
	});
	*/


	// RESIZE TYPO BY LENGHT CARACTERES /////////////
	/*
	 $('#decouvrir span').each(function(){
	     var el= $(this);
	       var textLength = el.length;
	       //console.log(textLength);
	        if (textLength > 20) {
	            el.css('font-size', '0.8em');
	        }
	});*/

	/*
	// MENU RIGHT 2 CTA /////////////////////////
	$('#btnMenuOpened').on('click',function(event){ //event doit être initialisé pour Firefox
		event.preventDefault();
		$('#menuLat').css('display', 'block');	
		$('#menuLat').removeClass('animated slideOutRight');
		$('#menuLat').addClass('animated slideInRight');
		$('#btnMenuClosed').css('display', 'block');
		$('#btnMenuOpened').css('display', 'none');	
		$('#logoMenuLat').addClass('slideDown');
		$('#footerMenuLat').addClass('slideUp');
	});

	$('#btnMenuClosed').on('click',function(event){
		event.preventDefault();
		$('#menuLat').removeClass('animated slideInRight');
		$('#menuLat').addClass('animated slideOutRight');
		$('#btnMenuClosed').css('display', 'none');
		$('#btnMenuOpened').css('display', 'block');
		$('#logoMenuLat').removeClass('slideDown');
		$('#footerMenuLat').removeClass('slideUp');
	});
	*/