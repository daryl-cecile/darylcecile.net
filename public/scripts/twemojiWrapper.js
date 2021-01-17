/*
    Twemoji adapter created to quickly add Twemoji on this website
*/
function updateEmojis(content) {
    return twemoji.parse(content !== null && content !== void 0 ? content : document.body, {
        callback: function (icon, options, variant) {
            switch (icon) {
                case 'a9': // © copyright
                case 'ae': // ® registered trademark
                case '2122': // ™ trademark
                    return false;
            }
            return ''.concat(options.base, options.size, '/', icon, options.ext);
        },
        className: "twemoji",
        ext: ".png",
        attributes: function () {
            return {
                width: 72,
                height: 72
            };
        }
    });
}
function loadTwemoji() {
    /*
    Copyright 2019 Twitter, Inc and other contributors
    Code licensed under the MIT License: http://opensource.org/licenses/MIT
    Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/
 */
    var script = document.createElement("script");
    script.src = "https://twemoji.maxcdn.com/v/latest/twemoji.min.js";
    script.crossOrigin = "anonymous";
    script.onload = function () {
        updateEmojis();
        var style = document.createElement("style");
        style.innerText = "img.twemoji {\n\t\theight: 1em;\n\t\twidth: 1em;\n\t\tmargin: 0 .05em 0 .1em;\n\t\tvertical-align: -0.1em;\n\t\tdisplay: inline-block;\n\t}";
        document.head.appendChild(style);
    };
    document.head.appendChild(script);
}
if (document.readyState != "loading")
    loadTwemoji();
else
    document.addEventListener("DOMContentLoaded", loadTwemoji);
