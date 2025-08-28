"use strict";
var Portfolio;
(function (Portfolio) {
    class TimelineObj {
        constructor(_type, _text, _img, _team, _contribution, _tool, _team_text) {
            this.type = _type;
            this.text = _text;
            this.img = _img;
            this.team = _team;
            this.contribution = _contribution;
            this.tool = _tool;
            this.team_text = _team_text;
            if (_type === "Text" || _type === "Image") {
                this.element = document.createElement("div");
            }
            else {
                this.element = document.createElement("iframe");
            }
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
