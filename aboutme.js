(function ($) {
    "use strict";

    console.log("Who Am I?");
    // Size of browser viewport.
    console.log("window height" + $(window).height());
    console.log("window height" + $(window).width());

    // Size of HTML document (same as pageHeight/pageWidth in screenshot).
    console.log("document height" + $(document).height());
    console.log("document height" + $(document).width());

    console.log("screen height" + window.screen.height);
    console.log("screen width" + window.screen.width);

    var ActiveCardId = 100;

    function setSize() {
        var height = $(document).height();
        var width = $(document).width();

        $(".card").each(function (index) {
            var theId = parseInt($(this).attr("id"));
            if (!!theId) {
                $(this).css("min-height", height);
                $(this).css("min-width", width);
            } else {
                console.log("no where else to go");
            }
        });
    }

    function setZindex() {
        $(".card").each(function (index) {
            var theId = parseInt($(this).attr("id"));
            if (!!theId) {
                $(this).css("zIndex", theId);

                var sameColumnDiff = theId - ActiveCardId;

                if (sameColumnDiff > 1 && sameColumnDiff < 100) {
                    $(this).css("top", (parseInt(sameColumnDiff) * 100) + "vh");
                }
            } else {
                console.log("no where else to go");
            }
        });
    }

    setSize();

})(jQuery);

