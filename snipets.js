

	/*  menu links  */


	$('.to-why').click(function(e){
	e.preventDefault();
	$('body, html').animate({ scrollTop: $('.s-we').offset().top }, 1000);
	}); 


	/*  menu links  end  */


	/*   make a Grid  */

	var $window = $(window);

	makeGrid();

	$window.resize(function(){
		
		makeGrid();

	}); //resize


	function makeGrid(){

		if(($window).width() < 640 ){

		$(".we-item__grid").removeClass("col-xs-4").addClass("col-xs-12");
		
		}else{

		$(".we-item__grid").removeClass("col-xs-12").addClass("col-xs-4");	

		}

		if(($window).width() < 480 ){

		$(".after-print__item").removeClass("col-xs-6").addClass("col-xs-12");

		}else{

		$(".after-print__item").removeClass("col-xs-12").addClass("col-xs-6");

		}


	}; //makeGrid


	/*   make a Grid   end  */


    /*    tabs  */

    $(".advantag__content-item").not(":first").hide();
    $(".advantag__tab").click(function() {
      $(".advantag__tab").removeClass("active_tab").eq($(this).index()).addClass("active_tab");
      $(".advantag__content-item").hide().eq($(this).index()).fadeIn()
    });

    /*    tabs end */


	/*   waypoint */



	$("h2").each(function(){

		var animH2 = $(this);

		$(this).waypoint(function() {
			
			animH2.addClass("h2_animat");

		}, {
			offset : "70%"
		});

	});


	$(".we-item img").waypoint(function() {
	
	$(".we-item img").addClass("we-item_animat");

	}, {
		offset : "60%"
	});



	$(".s-surface").waypoint(function() {
	$(".s-surface li").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("s-surface__animat");
		}, 400*index);
	});
	}, {
		offset : "80%"
	});




	/*   waypoint end*/