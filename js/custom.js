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