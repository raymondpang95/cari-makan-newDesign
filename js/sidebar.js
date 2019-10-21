
$('.openChild').click(function (){
    var elemt = $(this).children();
    
    if(elemt.hasClass("active")){
        elemt.removeClass("active");
    }
    else{
        $('.openChild').children().removeClass("active");
        elemt.addClass('active');
    }
})

$('.toggle').click(function (){
    var side1 = $('.sidebar');
    var side2 = $('.simple_sidebar');

    if(side1.hasClass("active")){
        side1.removeClass("active");
        side2.addClass("active");
    }
    else{
        side2.removeClass("active");
        side1.addClass("active");
    }
})