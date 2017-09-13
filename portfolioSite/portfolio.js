 $(function () {

         $(".aside").on('click', '.aside__dot', function () {
             $('.aside__dot').removeClass('larger');
             $(this).addClass('larger')
         });
     });




$(document).ready(function () {
    // $('.links').hide();
    var links = $('.links');
    $(".menu").click(function () {
        links.stop().is(':visible') ? links.fadeOut(300) : links.fadeIn(300)
    });
});


$(document).ready(function () {
    // $('.links').hide();
    var edu11 = $('#edu1_1');
    var edu22 = $('#edu2_2');
    var edu33 = $('#edu3_3');

    $("#edu1").mouseenter(function () {
        edu11.stop().is(':visible') ? edu11.fadeOut(500) : edu11.fadeIn(500)
    });

    $("#edu2").mouseenter(function () {
        edu22.stop().is(':visible') ? edu22.fadeOut(500) : edu22.fadeIn(500)
    });

    $("#edu3").mouseenter(function () {
        edu33.stop().is(':visible') ? edu33.fadeOut(500) : edu33.fadeIn(500)
    });
});


$(document).ready(function () {
    // $('.links').hide();
    var pro11 = $('#pro1_1');
    var pro22 = $('#pro2_2');
    var pro33 = $('#pro3_3');

    $("#pro1").mouseenter(function () {
        pro11.stop().is(':visible') ? pro11.fadeOut(500) : pro11.fadeIn(500)
    });

    $("#pro2").mouseenter(function () {
        pro22.stop().is(':visible') ? pro22.fadeOut(500) : pro22.fadeIn(500)
    });

    $("#pro3").mouseenter(function () {
        pro33.stop().is(':visible') ? pro33.fadeOut(500) : pro33.fadeIn(500)
    });
});




function changeStyle(){

	var currentStyle = document.getElementById('css').href;

	if(currentStyle.indexOf('1.css') != -1){
		document.getElementById('css').href='./style2.css';

        $(".picbacktotop").attr("src","./picbacktotop2.jpg");
        $(".picmail").attr("src","./picmail2.png");
        $(".piclinkedin").attr("src","./piclinkedin2.png");
	}

	else{
		document.getElementById('css').href='./style1.css';
        $(".picbacktotop").attr("src","./picbacktotop.png");
        $(".picmail").attr("src","./picmail.png");
        $(".piclinkedin").attr("src","./piclinkedin.png");
    }
	
}



function findPic(){
	alert("you find my picture here!");
}



