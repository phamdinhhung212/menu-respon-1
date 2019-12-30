$(document).ready(function() {
    $("#icon-menu").click(function() {
        $("#menu-respon").stop().slideToggle(500);
    });
    $(window).resize(function() {
        if( $(window).width() >= 1024 ) {
            $("#menu-respon").css('display','none');
        }
    });
});
$(document).ready(function() {
    $("#btn-search").click(function() {
        $("#form-search input").stop().fadeToggle(500);
        return false;
    });
});