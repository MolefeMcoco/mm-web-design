$(window).ready(function(){
	$(window).load(function(){
    $(".loaded").fadeOut();
    $(".preloader").delay(1000).fadeOut("slow");
    });

	$('#home').localScroll({
            duration:1500
        });

	$(".backtotop a").fadeOut(1000);

	$(".table_data tr:even").css("background-color","#FFE4C4");
	$(".table_data tr:odd").css("background-color","#D3D3D3");
	$(".table_data tr:first").css({"background-color":"#001a57","color":"#ffffff"});
	$(".table_data2 tr:first").css({"background-color":"#001a57","color":"#ffffff"});

	$(window).scroll(function(){
		if (jQuery(window).scrollTop() > 620){
	        $(".backtotop a").fadeIn(2500);
	    } else {
	        $(".backtotop a").fadeOut(2500);
	    };
	});
});