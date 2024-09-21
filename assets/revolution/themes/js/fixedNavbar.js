$(document).ready(function(){
    $("body").get(0).style.setProperty("--navbar-height",$('#navbarContainer').outerHeight()+"px")
})
$( window ).scroll(function() {
    if($(window).scrollTop() > 100) {
        $('#navbarContainer').addClass('sticky')
        $("body").get(0).style.setProperty("--navbar-height",$('#navbarContainer').outerHeight()+"px")
    } else {
        if($('#navbarContainer').hasClass('sticky')) {
            $('#navbarContainer').removeClass('sticky')
        }
        $("body").get(0).style.setProperty("--navbar-height",$('#navbarContainer').outerHeight()+"px")
    }
})
