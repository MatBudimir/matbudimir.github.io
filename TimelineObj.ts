namespace Portfolio {
    export class TimelineObj {
        type: string; // "Text" or "Image"
        text: string;
        img: string;
        team?: boolean;
        contribution?: boolean;
        tool?: boolean;
        award?:boolean;
        team_text?: string;
        element: HTMLDivElement;

        constructor(_type: string, _text: string, _img: string, _team?: boolean, _contribution?: boolean, _tool?:boolean, _award?:boolean, _team_text?:string) {
            this.type = _type;
            this.text = _text;
            this.img = _img;
            this.team = _team;
            this.contribution = _contribution;
            this.tool = _tool;
            this.team_text = _team_text;
            this.award = _award;
            
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
