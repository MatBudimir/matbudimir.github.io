"use strict";
var Portfolio;
(function (Portfolio) {
    class TimelineObj {
        constructor(_type, _text, _img) {
            this.type = _type;
            this.text = _text;
            this.img = _img;
            this.element = document.createElement("div");
        }
        fadeIn() {
            this.element.classList.add("visible");
            this.element.classList.remove("hidden");
        }
        fadeOut() {
            this.element.classList.add("hidden");
            this.element.classList.remove("visible");
        }
    }
    Portfolio.TimelineObj = TimelineObj;
})(Portfolio || (Portfolio = {}));
