$(document).ready(function () {
    ($('.navbar .elBtn').on('click',function(){
        if($('.menu').css('right')=== '-300px'){
            $('.menu').animate({
                right:0
            },500)
           }else{
            $('.menu').animate({
                right:'-300px'
            },500)
           }
    }));
    ($('.elBtn').on('click',function(){
        if($('.menu').css('right')=== 0){
            $('.menu').animate({
                right:'-300px'
            },500)
           }
    }));

    
    // Scroll
      $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        if(scroll >= 100){
            $('#scroll').fadeIn();
        }else{
          $('#scroll').fadeOut();
        }
    })
    $('#scroll').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })
    


    // Scroll




    var $Links = $('.menu li a');
    // console.log($Links);
    $Links.click(function(event){
        event.preventDefault();

        $Links.removeClass('active')
        let id = $(this).addClass('active').attr('href');
        let target = $(id).offset().top ;
        $('html,body').animate({
            scrollTop:target,
        },500)
    })

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();

        $Links.each(function(){
            let truew = $(this).attr('href');
            let selector = $(truew).offset().top - 50;
console.log(scroll);
console.log(truew);
console.log(selector);

            if(scroll >= selector){
                $Links.removeClass('active');
                $(this).addClass('active');
            }
        })
    })
});
window.addEventListener('load',function(){
    let text = this.document.querySelector('h3');
//    console.log(text);
    let str = text.innerHTML;
     text.innerHTML = '';
    let i = 0;


   function print(){
       text.innerHTML = text.innerHTML  +  str.charAt(i);
       i++;
   }
  this.setInterval(print,150)
})