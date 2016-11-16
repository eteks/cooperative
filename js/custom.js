// zoom-in and zoom-out
var section ;
var factor = 0.8;

function getFontSize(el)
{
    var fs = $(el).css('font-size');    
    if(!el.originalFontSize)el.originalFontSize =fs; //set dynamic property for later reset  
    return  parseFloat(fs);  
}

function setFontSize(fact){
    if(section==null)
       section = $('#contents').find('*')       
       .filter(
         function(){return  $(this).clone()
            .children()
            .remove()
            .end()
            .text().trim().length > 0;
            }); //filter -> exclude all elements without text
      
    section.each(function(){  
      var newsize = fact ? getFontSize(this) * fact : this.originalFontSize;
      if(newsize) $(this).css('font-size', newsize );      
    }); 
}

function resetFont(){
    setFontSize();
}
function increaseFont() {
    setFontSize(1 / factor);
}
function decreaseFont(){
    setFontSize(factor);
}

// Theme color change

// Blue Color Theme
$('.colorgreen').click(function(){
	  	$('.top-bar').css({"background-color":"#3A9952"});
	   	$('.breadcrumb').css({"background-color":"#3A9952"});
	   	$('#logo2').css({"color":"#3A9952"});
	   	$('h1').css({"color":"#3A9952"});
	   	$('.update-title').css({"background-color":"#3A9952"});
	    $('.incfont').css({"background-color":"#275F29"});
	    $('.incfont').css({"background-image":"white"});
	  	$('.decfont').css({"background-color":"#275F29"});
	    $('.decfont').css({"background-image":"white"});
	    $('.reset').css({"background-color":"#275F29"});
	    $('.reset').css({"background-image":"white"});
});

// orange Color Theme
$('.colororange').click(function(){
	  	$('.top-bar').css({"background-color":"#D77806"});
	   	$('.breadcrumb').css({"background-color":"#D77806"});
	   	$('#logo2').css({"color":"#FF5C01"});
	   	$('h1').css({"color":"#FF5C01"});
	   	$('.update-title').css({"background-color":"#D77806"});
	    $('.incfont').css({"background-color":"#A54A0A"});
	    $('.incfont').css({"background-image":"white"});
	  	$('.decfont').css({"background-color":"#A54A0A"});
	    $('.decfont').css({"background-image":"white"});
	    $('.reset').css({"background-color":"#A54A0A"});
	    $('.reset').css({"background-image":"white"});
});


$('.colorblue').click(function(){
	  	$('.top-bar').css({"background-color":"#4484CE"});
	   	$('.breadcrumb').css({"background-color":"#4484CE"});
	   	$('#logo2').css({"color":"#4484CE"});
	   	$('h1').css({"color":"#4484CE"});
	   	$('.update-title').css({"background-color":"#4484CE"});
	    $('.incfont').css({"background-color":"blue"});
	    $('.incfont').css({"background-image":"white"});
	  	$('.decfont').css({"background-color":"blue"});
	    $('.decfont').css({"background-image":"white"});
	    $('.reset').css({"background-color":"blue"});
	    $('.reset').css({"background-image":"white"});
});