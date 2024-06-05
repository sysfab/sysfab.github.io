document.addEventListener("DOMContentLoaded", function() {
    var logo = $(".logo");
    if (logo) {
        logo.css({"display": "inline-block"});

        logo.append('<div id="cursor-container"></div>');
        
        var cc = $("#cursor-container");
        cc.append('<div id="blinking-cursor"></div>');

        cc.css({"position": "relative"});
        cc.css({"display": "inline-block"});
        cc.css({"verticalAlign": "middle"});

        var bc = $("#blinking-cursor");
        bc.css({"width": "0.7em"});
        bc.css({"height": "3px"});
        bc.css({"background": "white"});
        bc.css({"position": "absolute"});
        bc.css({"top": "50%"});
        bc.css({"margin": "0px 0px 0px 5px"});
        bc.css({"transform": "translateY(100%)"});
        bc.css({"animation": "blink 1s infinite"});
    }
});
