var list = document.querySelectorAll("[data-image]");

for (var i = 0; i < list.length; i++) {
  var url = list[i].getAttribute('data-image');
  list[i].style.backgroundImage="url('" + url + "')";
}
AOS.init()
if($('.splide').length > 0) {
    new Splide( '.splide',{
        type  : 'fade',
        rewind: true,
    }).mount();
}
$(document).ready(function(){
    var running = false;
    var x = 0;
    var count = 0;
    var timer = 10;
    var interval;
    $('.click-box').click(function(){
        if(!running) {
            running = true;
            x = x+0.25
            $(this).children('.click-second-box').css('right',x+"%")
            $(this).children('.click-second-box').css('left',x+"%")
            $(this).children('.click-second-box').css('transition','all ease 0.3s')
            $(this).children('.click-text').addClass('d-none')
            $(this).children('.click-text-2').removeClass('d-none')
            count=1;
            $('.click-count').text(count)
            interval = setInterval(function(){
                if(timer > 0) {
                    timer--;
                    $('.click-value').text(timer)
                }
            },1000)
            setTimeout(function(){
                clearInterval(interval)
                $('.click-cps').text(count/10)
                alert('Cps: '+count/10)
                running=false;
                timer=10;
                $('.click-value').text(timer)
                x=0;
                $('.click-box').children('.click-second-box').css('right',0+"%")
                $('.click-box').children('.click-second-box').css('left',0+"%")
                $('.click-box').children('.click-text').removeClass('d-none')
                $('.click-box').children('.click-text-2').addClass('d-none')
            },11000)
        } else {
            x = x+0.25
            $(this).children('.click-second-box').css('right',x+"%")
            $(this).children('.click-second-box').css('left',x+"%")
            $(this).children('.click-second-box').css('transition','all ease 0.3s')
            count=count+1;
            $('.click-count').text(count)
        }
    })
})
$('#navbarMobileOpen').on('click',function(){
    $('#navbarMobileContainer').addClass('active')
})
$('#navbarMobileClose').on('click',function(){
    $('#navbarMobileContainer').removeClass('active')
})
var config_particles = {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":0.2,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":10,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
particlesJS("particles-js", config_particles);
particlesJS("particles-js-2", config_particles);
