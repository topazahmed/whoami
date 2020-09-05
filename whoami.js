(function ($) {
    "use strict";

    console.log("Who Am I?");
    var ActiveCardId = 10;


    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y
        // are, calculate pageX/Y - logic taken from jQuery
        // Calculate pageX/Y if missing and clientX/Y available
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

    function getCurrentCard() {
        var $activeCard = $(".card.active");
        var cardId = $($activeCard).Id;
        console.log(cardId);
        ActiveCardId = cardId;
    }

    function getNextCard(direction){
        switch (direction) {
            case "up":
                // code block
                break;
            case y:
                // code block
                break;
            default:
            // code block
        }
    }

    function goUp() {
        console.log("going up");
    }
    function goDown() {
        console.log("going down");
    }
    function goLeft() {
        console.log("going left");
    }
    function goRight() {
        console.log("going right");
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

})(jQuery);

