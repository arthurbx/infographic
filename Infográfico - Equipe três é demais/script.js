var txt1 = 0;
var txt2 = 0;
var txt3 = 0;
var txt4 = 0;
var txt5 = 0;
		//Mouse Over
$('#hex').mouseover(function(){
    	$(this).animate({opacity: 0}, 500);
    }, function(){
    	$(this).animate({opacity: 1.0}, 500);
    }); 

$('#hex2').mouseover(function(){
    	$(this).animate({opacity: 0}, 500);
    }, function(){
    	$(this).animate({opacity: 1.0}, 500);
    });
$('#hex3').mouseover(function(){
    	$(this).animate({opacity: 0}, 500);
    }, function(){
    	$(this).animate({opacity: 1.0}, 500);
    });
$('#hex4').mouseover(function(){
    	$(this).animate({opacity: 0}, 500);
    }, function(){
    	$(this).animate({opacity: 1.0}, 500);
    });
$('#hex5').mouseover(function(){
    	$(this).animate({opacity: 0}, 500);
    }, function(){
    	$(this).animate({opacity: 1.0}, 500);
    });
$('#hex6').mouseover(function(){
        $(this).animate({opacity: 0}, 500);
    }, function(){
        $(this).animate({opacity: 1}, 500);
    });
		
		//Mouse Out
$('#hex').mouseout(function(){
    	$(this).animate({opacity: 1}, 500);
    }, function(){
    	$(this).animate({opacity: 0}, 500);
    }); 

$('#hex2').mouseout(function(){
    	$(this).animate({opacity: 1}, 500);
    }, function(){
    	$(this).animate({opacity: 0}, 500);
    });
$('#hex3').mouseout(function(){
    	$(this).animate({opacity: 1}, 500);
    }, function(){
    	$(this).animate({opacity: 0}, 500);
    });
$('#hex4').mouseout(function(){
    	$(this).animate({opacity: 1}, 500);
    }, function(){
    	$(this).animate({opacity: 0}, 500);
    });
$('#hex5').mouseout(function(){
    	$(this).animate({opacity: 1}, 500);
    }, function(){
    	$(this).animate({opacity: 0}, 500);
    });
$('#hex6').mouseout(function(){
        $(this).animate({opacity: 1}, 500);
    }, function(){
        $(this).animate({opacity: 0}, 500);
    });
	//Mouse out and over - Troca dos textos
$('#hex').bind('mouseover', function() {
    $('#texto').attr("src","malctxt.png");
    txt1 = 1;
 });

$('#hex').bind('mouseout', function() {
    $('#texto').attr("src","outrostxt.png");
 });
$('#hex2').bind('mouseover', function() {
    $('#texto').attr("src","econtxt.png");
    txt2 = 1;
 });

$('#hex2').bind('mouseout', function() {
    $('#texto').attr("src","outrostxt.png");
 });
$('#hex3').bind('mouseover', function() {
    $('#texto').attr("src","filhotestxt.png");
    txt3 = 1;
 });

$('#hex3').bind('mouseout', function() {
    $('#texto').attr("src","outrostxt.png");
 });
$('#hex4').bind('mouseover', function() {
    $('#texto').attr("src","cacatxt.png");
    txt4 = 1;
 });

$('#hex4').bind('mouseout', function() {
    $('#texto').attr("src","outrostxt.png");
 });
$('#hex5').bind('mouseover', function() {
    $('#texto').attr("src","domtxt.png");
    txt5 = 1;
 });

$('#hex5').bind('mouseout', function() {
    $('#texto').attr("src","outrostxt.png");
 });

/* Função para alerta
$(function(){
    $("#hex6").on("click",function(){
        var text = $(this).text();
        swal("Parabéns!"); 
    });
}); */






/*$('#hex2').on({
			    'click': function(){
			        $('#hex2').attr('src','comportamentoC.png');
			         }
			     });
$('#hex3').on({
			    'click': function(){
			        $('#hex3').attr('src','comportamentoC.png');
			         }
			     });
$('#hex4').on({
			    'click': function(){
			        $('#hex4').attr('src','comportamentoC.png');
			         }
			     });
$('#hex5').on({
			    'click': function(){
			        $('#hex5').attr('src','comportamentoC.png');
			         }
			     });
$('#hex6').on({
			    'click': function(){
			        $('#hex6').attr('src','comportamentoC.png');
			         }
			     });

			     */


/*Função para reajustar o tamanho das imagens
var timer,
    $win = $(window); 

$win.on('resize',function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        $("#telaP").height($win.height());
    }, 500);

});
*/

			//Função para mudar a cor das imagens e fazer a imagem do texto aparecer
			

			 
				
			/* Show image function
			function show_image1(src, width, height, alt) {
 			 var img = document.createElement("img");
 				 img.src = src;
 				 img.width = width;
  				 img.height = height;
 				 img.alt = alt;

  			// This next line will just add it to the <body> tag
 				 document.body.appendChild(img);
 				}
 			*/

/* Alerta com sweet alert
$(function(){
	$("button").on("click",function(){
		var text = $(this).text();
		swal("SIMMMMMMMMMM!!!");
	});
});
*/

/*Função para mudar o .src da imagem
function change(){
	var image = document.getElementById('social');
	image.src = "tela2.jpg"
}*/	

/*Função para trocar a imagem
$('#hex').on({
			    'click': function(){
			        $('#hex').attr('src','comportamentoC.png');
			         }
			     });
			     */

/*Funções para mudar a opacidade com o clique
$('#hex').click(function(){
    $(this).css('opacity', '1');
});
$('#hex2').click(function(){
    $(this).css('opacity', '1');
});
$('#hex3').click(function(){
    $(this).css('opacity', '1');
});
$('#hex4').click(function(){
    $(this).css('opacity', '1');
});
$('#hex5').click(function(){
    $(this).css('opacity', '1');
});
$('#hex6').click(function(){
    $(this).css('opacity', '1');
});

*/