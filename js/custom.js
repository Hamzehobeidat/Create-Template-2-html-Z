/* global $, alert, console*/

$(function () {

    'use strict';

    //Adjust Header Height يعدل

    var myHeader = $('.header'),
        mySlider = $('.bxslider');

    myHeader.height($(window).height());//اجعل ارتفاع header يساوي ارتفاع الشاشة

    $(window).resize(function (){ //حتى يتاقلم مع ارتفاع الشاشة 

    myHeader.height($(window).height());//اجعل ارتفاع header يساوي ارتفاع الشاشة

    //Adjust Bxslider List Item Center

    mySlider.each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li ').height()) / 2);
    });

    });


    // links add active class

    $('.links li a').click(function(){
        //هون بدي اشيل class active  من li  عندما اضغط على li الثانيات

        $(this).parent().addClass('active').siblings().removeClass('active');
    });


    //Adjust Bxslider List Item Center

    mySlider.each(function () {//each تعني كل عنصر

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li ').height()) / 2);
    });

    //Trigger The Bx Slider

    mySlider.bxSlider({
        pager : false
    });


    //Smooth Scrol To Div

    $('.links li a').click(function () {
        $('html, body').animate({
           scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    //our auto slider code

    (function autoSlider() {
        $('.slider .active').each(function () {
           if(!$(this).is(':last-child')) {

               $(this).delay(2000).fadeOut(1000, function () {

                   $(this).removeClass('active').next().addClass('active').fadeIn();

                   autoSlider();

               });
           } else {

               $(this).delay(3000).fadeOut(1000, function () {

                   $(this).removeClass('active');

                   $('.slider div').eq(0).addClass('active').fadeIn();

                   autoSlider();
               });

           }
        });

    }());

    //trigger mixitup
      mixitup('#container');


    //adjust shuffle links

    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass();
    });

    //triger nice scroll

    $("body").niceScroll({
  cursorcolor:"#979797",
  cursorwidth:"10px",
  background:"rgba(20,20,20,0.3)",
  cursorborderradius:'4px'
});










});
