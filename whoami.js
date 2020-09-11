(function ($) {
    "use strict";

    console.log("Who Am I?");
    var ActiveCardId = 100;



    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }

        if (event.pageY < 60) {
            $("#mainNav").addClass("active");
        } else {
            $("#mainNav").removeClass("active");
        }

        // Add a dot to follow the cursor
        dot = document.createElement('div');
        dot.className = "dot";
        dot.style.left = event.pageX + "px";
        dot.style.top = event.pageY + "px";
        document.body.appendChild(dot);

        setTimeout(function () { document.body.removeChild(dot) }, 3000);

    }

    function getCurrentCardId() {
        var $activeCard = $(".card.active");
        var cardId = $($activeCard).attr("id");
        console.log(cardId);
        ActiveCardId = cardId;

        return ActiveCardId;
    }

    function showNextCard(cardId) {
        var $nextCard = $("#" + cardId);
        if ($($nextCard).length > 0) {
            console.log($nextCard.attr("id"));

            $(".card").removeClass("active");
            $($nextCard).addClass("active");
        } else {
            console.log("Nothing more to show...");
        }
    }

    function getNextCard(direction) {
        ActiveCardId = getCurrentCardId();
        switch (direction) {
            case "up":
                ActiveCardId = parseInt(ActiveCardId) - 1;
                showNextCard(ActiveCardId);
                break;
            case "down":
                ActiveCardId = parseInt(ActiveCardId) + 1;
                showNextCard(ActiveCardId);
                break;
            case "left":
                ActiveCardId = parseInt(ActiveCardId) - 100;
                showNextCard(ActiveCardId);
                break;
            case "right":
                ActiveCardId = parseInt(ActiveCardId) + 100;
                showNextCard(ActiveCardId);
                break;
            default:
            // code block
        }
    }

    function goUp() {
        console.log("going up");
        getNextCard("up");
    }
    function goDown() {
        console.log("going down");
        getNextCard("down");
    }
    function goLeft() {
        console.log("going left");
        getNextCard("left");
    }
    function goRight() {
        console.log("going right");
        getNextCard("right");
    }

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            goUp();
        }
        else if (e.keyCode == '40') {
            goDown();
        }
        else if (e.keyCode == '37') {
            goLeft();
        }
        else if (e.keyCode == '39') {
            goRight();
        }

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

    setZindex();

})(jQuery);

