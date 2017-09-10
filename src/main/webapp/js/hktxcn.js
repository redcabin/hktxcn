$(
    function () {
        $(".side-icon li").hover(function () {
            $(".side-icon-ifn").fadeOut();
            $(this).find(".side-icon-ifn").fadeIn();

        }, function () {
            $(".side-icon-ifn").fadeOut();
        })
    }
)
