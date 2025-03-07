namespace Portfolio {
    export class TimelineObj {
        type: string; // "Text" or "Image" or "Skill"
        text: string;
        img: string;
        skill?: boolean;
        tool?: boolean;
        element: HTMLDivElement;

        constructor(_type: string, _text: string, _img: string, _skill?: boolean, _tool?:boolean) {
            this.type = _type;
            this.text = _text;
            this.img = _img;
            this.skill = _skill;
            this.tool = _tool;
            
            if (_type === "Text" || _type === "Image"){
                this.element = document.createElement("div");
            } else {
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
}
