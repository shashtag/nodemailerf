$("li").on("click", function () {
    $("li").removeClass("active");
    $(this).addClass("active");
});

if( $(window).width() >= 992 ) {
    $("#al").on("click", function () {
        $("#b1").hide("blind",500);
        $(".nm").hide( "blind",500, function () {
            $("#am").removeClass("col-lg-3 mh", 500, "swing", function () {
                $(".ah").removeClass("dn", 500, "swing")
            });
        });
    });
};

$(window).resize(function() {
    if( $(this).width() >= 992 ) {
        $("#al").on("click", function () {
            $("#b1").hide("blind",500);
            $(".nm").hide( "blind",500, function () {
                $("#am").removeClass("col-lg-3 mh", 500, "swing", function () {
                    $(".ah").show(500);
                });
             });
        });
    };
});