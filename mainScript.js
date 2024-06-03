document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector(".logo");
    if (logo) {
        logo.style.display = "inline-block";

        logo.innerHTML += '<div id="cursor-container"></div>';
        
        var cursorContainer = document.getElementById("cursor-container");
        if (cursorContainer) {
            cursorContainer.innerHTML = '<div id="blinking-cursor"></div>';
        }
        
        cursorContainer.style.position = "relative";
        cursorContainer.style.display = "inline-block";
        cursorContainer.style.verticalAlign = "middle";

        var blinkingCursor = document.getElementById("blinking-cursor");
        if (blinkingCursor) {
            blinkingCursor.style.width = "0.7em";
            blinkingCursor.style.height = "3px";
            blinkingCursor.style.background = "white";
            blinkingCursor.style.position = "absolute";
            blinkingCursor.style.top = "50%";
            blinkingCursor.style.margin = "0px 0px 0px 5px";
            blinkingCursor.style.transform = "translateY(100%)";
            blinkingCursor.style.animation = "blink 1s infinite";
        }
    }
});
