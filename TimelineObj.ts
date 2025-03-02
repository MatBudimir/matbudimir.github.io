namespace Portfolio {
    export class TimelineObj {
        type: string; // "Text" or "Image"
        text: string;
        img: string;
        element: HTMLDivElement;

        constructor(_type: string, _text: string, _img: string) {
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
}
