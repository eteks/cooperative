$().ready(function () {
    "use strict";
    var sliderLinks = $('.sliderlinks').children(),
        face1 = $(".slider .face1"),
        face2 = $(".slider .face2"),
        face3 = $(".slider .face3"),
        face4 = $(".slider .face4"),
        atrSrc = $('.sliderlinks img'),
        i,
        mainArr = [],
        degree = 90;
    
    for (i = 0; i < atrSrc.length; i++) {
        mainArr.push($(atrSrc[i]).attr('src'));
    }
    console.log(mainArr);
    
    $.fn.extend({
        qcss: function (css) {
            return $(this).queue(function(next) {
                $(this).css(css);
                next();
            });
        }
    });
    function imgAppend() {
//        face1.append(sliderlinksCopy[0]);
//        face2.append(sliderlinksCopy[1]);
//        face3.append(sliderlinksCopy[2]);
//        face4.append(sliderlinksCopy[3]);
        $('.face').children().remove();
        $('<img src=' + mainArr[0]+ '>').appendTo(face1);
        $('<img src=' + mainArr[1]+ '>').appendTo(face2);
        $('<img src=' + mainArr[2]+ '>').appendTo(face3);
        $('<img src=' + mainArr[3]+ '>').appendTo(face4);
        $('.face > img').height($('.slider').height());
        $('.face > img').width($('.slider').width());
    }
    function imgRotate() {
//        $('.cube1').delay(700).qcss({transform: 'rotateX(90deg)'})
//            .next().delay(1400).qcss({transform: 'rotateX(90deg)'})
//            .next().delay(2100).qcss({transform: 'rotateX(90deg)'})
//            .next().delay(2800).qcss({transform: 'rotateX(90deg)'});
        setTimeout(function(){
            $('.cube1').css({transform: 'rotateX(' + degree + 'deg)'});
            setTimeout(function(){
                $('.cube2').css({transform: 'rotateX(' + degree + 'deg)'});
                setTimeout(function(){
                    $('.cube3').css({transform: 'rotateX(' + degree + 'deg)'});
                    setTimeout(function(){
                        $('.cube4').css({transform: 'rotateX(' + degree + 'deg)'});
                        degree += 90;
                    },700);
                },700);
            },700);
        },700)
        if (degree == 360) {
            degree = 0;
             $('.cube').css({transform: 'rotateX(' + degree + 'deg)'});
            mainArr.push(mainArr[0],mainArr[1],mainArr[2],mainArr[3]);
            mainArr.splice(0,4);
            setTimeout(function() {
                imgAppend();
                console.log(mainArr);
            },700);
            
        }
    }
    imgAppend();
    setInterval(imgRotate,8400);

    console.log();
    
    
});