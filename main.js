"use strict";
var Portfolio;
(function (Portfolio) {
    window.addEventListener("load", load);
    function load() {
        const body = document.querySelector("body");
        // Create Header HTMLElements
        const name = document.createElement("div");
        name.className = "header";
        name.id = "name";
        name.innerText = "Matej Budimir";
        const aboutme = document.createElement("div");
        aboutme.className = "header";
        aboutme.id = "descr";
        aboutme.innerText = "Hello, I am Matej Budimir.";
        const email = document.createElement("div");
        email.className = "header";
        email.id = "mail";
        email.innerText = "xmatbudimir@gmail.com";
        body.append(name, aboutme, email);
        // Create Timeline HTMLElements
        const timeline = document.createElement("div");
        timeline.className = "timeline";
        const canvas = document.createElement("canvas");
        canvas.className = "canvas";
        const container2019 = document.createElement("div");
        const container2023 = document.createElement("div");
        const container2024 = document.createElement("div");
        const container2025 = document.createElement("div");
        container2019.className = "yearContainer";
        container2023.className = "yearContainer";
        container2024.className = "yearContainer";
        container2025.className = "yearContainer";
        const year2019 = document.createElement("div");
        const year2023 = document.createElement("div");
        const year2024 = document.createElement("div");
        const year2025 = document.createElement("div");
        year2019.className = "year";
        year2019.innerText = "2019";
        year2023.className = "year";
        year2023.innerText = "2023";
        year2024.className = "year";
        year2024.innerText = "2024";
        year2025.className = "year";
        year2025.innerText = "2025";
        const row1 = document.createElement("div");
        const row2 = document.createElement("div");
        const row3 = document.createElement("div");
        const row4 = document.createElement("div");
        const row5 = document.createElement("div");
        const row6 = document.createElement("div");
        const row7 = document.createElement("div");
        row1.id = "row1";
        row2.id = "row2";
        row3.id = "row3";
        row4.id = "row4";
        row5.id = "row5";
        row6.id = "row6";
        row7.id = "row7";
        const col1 = document.createElement("div");
        const col2 = document.createElement("div");
        const col3 = document.createElement("div");
        const col4 = document.createElement("div");
        const col5 = document.createElement("div");
        const col6 = document.createElement("div");
        const col7 = document.createElement("div");
        const col8 = document.createElement("div");
        const col9 = document.createElement("div");
        const col10 = document.createElement("div");
        const col11 = document.createElement("div");
        const col12 = document.createElement("div");
        const col13 = document.createElement("div");
        const col14 = document.createElement("div");
        col1.id = "col_left";
        col2.id = "col_right";
        col3.id = "col_left2";
        col4.id = "col_right2";
        col5.id = "col_left3";
        col6.id = "col_right3";
        col7.id = "col_left4";
        col8.id = "col_right4";
        col9.id = "col_left5";
        col10.id = "col_right5";
        col11.id = "col_left6";
        col12.id = "col_right6";
        col13.id = "col_left7";
        col14.id = "col_right7";
        const vidRow1 = document.createElement("div");
        const vidRow2 = document.createElement("div");
        const vidRow3 = document.createElement("div");
        const vidRow4 = document.createElement("div");
        const vidRow5 = document.createElement("div");
        const vidRow6 = document.createElement("div");
        const vidRow7 = document.createElement("div");
        vidRow1.id = "row1";
        vidRow2.id = "row2";
        vidRow3.id = "row3";
        vidRow4.id = "row4";
        vidRow5.id = "row5";
        vidRow6.id = "row6";
        vidRow7.id = "row7";
        const vid1 = document.createElement("iframe");
        const vid2 = document.createElement("iframe");
        const vid3 = document.createElement("iframe");
        const vid4 = document.createElement("iframe");
        const vid5 = document.createElement("iframe");
        const vid6 = document.createElement("iframe");
        const vid7 = document.createElement("iframe");
        vid1.id = "vid1";
        vid1.src = "https://www.youtube.com/embed/GeFujoNXXk4";
        vid1.style.width = `${innerWidth * 0.4}px`;
        vid1.style.height = `${innerWidth * 0.22}px`;
        vid2.id = "vid2";
        vid3.id = "vid3";
        vid4.id = "vid4";
        vid5.id = "vid5";
        vid6.id = "vid6";
        vid7.id = "vid7";
        body.append(timeline);
        timeline.append(canvas, container2019, row1, vidRow1, container2023, row2, vidRow2, container2024, row3, vidRow3, container2025, row4, vidRow4, row5, vidRow5, row6, vidRow6, row7, vidRow7);
        container2019.append(year2019);
        container2023.append(year2023);
        container2024.append(year2024);
        container2025.append(year2025);
        row1.append(col1, col2);
        row2.append(col3, col4);
        row3.append(col5, col6);
        row4.append(col7, col8);
        row5.append(col9, col10);
        row6.append(col11, col12);
        row7.append(col13, col14);
        vidRow1.append(vid1);
        vidRow2.append(vid2);
        vidRow3.append(vid3);
        vidRow4.append(vid4);
        vidRow5.append(vid5);
        vidRow6.append(vid6);
        vidRow7.append(vid7);
        // Draw Timeline on Canvas
        drawTimeline();
        // Create Timeline Information
        createTimelineInfo();
    }
    function toggleImageSize(img) {
        img.addEventListener("click", toggleImg);
        function toggleImg() {
            if (img.classList.contains("expanded")) {
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                img.classList.remove("expanded");
            }
            else {
                img.style.width = `${window.innerWidth * 0.45}px`;
                img.style.height = "auto";
                img.classList.add("expanded");
            }
        }
        ;
    }
    function drawTimeline() {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.beginPath();
        ctx.moveTo(window.innerWidth / 2, window.innerHeight / 25);
        ctx.lineTo(window.innerWidth / 2, window.innerHeight * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(105, 110, 105, 1)";
        ctx.stroke();
    }
    function createTimelineInfo() {
        // Timeline objects
        let guideObjects = [
            new Portfolio.TimelineObj("Text", "Ishavar's Guide to Curses", ""),
            new Portfolio.TimelineObj("Text", "Ishavar's Guide to Curses offers players and Dungeon Masters the option to play as various cursed creatures from pop culture and Dungeons & Dragons lore. It also features a new original race: the Ashen. More than just providing stats and numbers, this book also expands on the theme of some of these creatures and adds character options that are thematically appropriate. Dungeon Masters also get evil monsters to use, that not only expand on the cursed creatures, but also add inspiration for adventures and stories.", ""),
            new Portfolio.TimelineObj("Text", "Game Design", "", true),
            new Portfolio.TimelineObj("Text", "2D Art", "", true),
            new Portfolio.TimelineObj("Text", "Narrative Writing", "", true),
            new Portfolio.TimelineObj("Text", "Photoshop", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/Guide_to_Curses_Cover.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/matej-budimir-ashen-preview.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/medusa_preview.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/matej-budimir-skeleton-preview.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/blood_preview.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/matej-budimir-monster-preview.jpg"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/GeFujoNXXk4"),
        ];
        for (let obj of guideObjects) {
            const colLeft = document.getElementById("col_left");
            const colRight = document.getElementById("col_right");
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.6)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 30, 0.6)";
                }
                colLeft.appendChild(contentContainer);
            }
            else if (obj.type === "Image") {
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                contentContainer.appendChild(img);
                colRight.appendChild(contentContainer);
            }
            obj.element = contentContainer;
        }
        let unseenObjects = [
            new Portfolio.TimelineObj("Text", "Unseen", ""),
            new Portfolio.TimelineObj("Text", "Unseen is a 2D platformer set in a plague ridden Prague in 1349, with horror elements in which you have to collect eyes to increase your radius of vision and to see hidden things in the world. Special eyes change your perception of the world and let you see new and different things. The focus is on platforming, solving puzzles, and the story.", ""),
            new Portfolio.TimelineObj("Text", "Game Design", "", true),
            new Portfolio.TimelineObj("Text", "2D Art & Animation", "", true),
            new Portfolio.TimelineObj("Text", "C# Programming", "", true),
            new Portfolio.TimelineObj("Text", "Unity", "", false, true),
            new Portfolio.TimelineObj("Text", "Clip Studio Paint", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/unseen_0.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_2.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_11.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_4.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_3.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_1.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_8.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_9.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_7.png"),
        ];
        for (let obj of unseenObjects) {
            const colLeft = document.getElementById("col_left2");
            const colRight = document.getElementById("col_right2");
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.6)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 30, 0.6)";
                }
                colRight.appendChild(contentContainer);
            }
            else if (obj.type === "Image") {
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                contentContainer.appendChild(img);
                colLeft.appendChild(contentContainer);
            }
            obj.element = contentContainer;
        }
        let deadObjects = [
            new Portfolio.TimelineObj("Text", "Dead Man's Call", ""),
            new Portfolio.TimelineObj("Text", "Dead Man's Call is a first-person narrative puzzle game set in the far future. The game takes place in the spaceship “Nightlight” crewed by three suspicious individuals. The aim is to find out what happened to the captain and his medical robot, H3A1_TH, from whom you received a distress call. To solve the mystery the player must explore the spaceship and complete puzzles to gather clues and find keys which help them solve the case.", ""),
            new Portfolio.TimelineObj("Text", "Level Design", "", true),
            new Portfolio.TimelineObj("Text", "Concept Art", "", true),
            new Portfolio.TimelineObj("Text", "Blueprint Programming", "", true),
            new Portfolio.TimelineObj("Text", "Unreal Engine 5", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/d2.png"),
            new Portfolio.TimelineObj("Image", "", "img/d1.png"),
            new Portfolio.TimelineObj("Image", "", "img/d3.png"),
            new Portfolio.TimelineObj("Image", "", "img/d4.png"),
            new Portfolio.TimelineObj("Image", "", "img/d5.png"),
            new Portfolio.TimelineObj("Image", "", "img/d6.png"),
            new Portfolio.TimelineObj("Image", "", "img/d7.png"),
            new Portfolio.TimelineObj("Image", "", "img/d8.png"),
            new Portfolio.TimelineObj("Image", "", "img/d9.png"),
            new Portfolio.TimelineObj("Image", "", "img/d10.png"),
            new Portfolio.TimelineObj("Image", "", "img/d11.png"),
            new Portfolio.TimelineObj("Image", "", "img/d12.png"),
        ];
        for (let obj of deadObjects) {
            const colLeft = document.getElementById("col_left3");
            const colRight = document.getElementById("col_right3");
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.6)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 30, 0.6)";
                }
                colLeft.appendChild(contentContainer);
            }
            else if (obj.type === "Image") {
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                contentContainer.appendChild(img);
                colRight.appendChild(contentContainer);
            }
            obj.element = contentContainer;
        }
        let symphoObjects = [
            new Portfolio.TimelineObj("Text", "SymphoTea", ""),
            new Portfolio.TimelineObj("Text", "SymphoTea is a game about deciding which social bubble each customer belongs to. This can be found out by listening to their inner part of a symphony and their persona. This way you can serve them the perfect match bubble tea.", ""),
            new Portfolio.TimelineObj("Text", "2D Art", "", true),
            new Portfolio.TimelineObj("Text", "Clip Studio Paint", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/tea3.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/tea1.png"),
            new Portfolio.TimelineObj("Image", "", "img/tea2.png"),
        ];
        for (let obj of symphoObjects) {
            const colLeft = document.getElementById("col_left4");
            const colRight = document.getElementById("col_right4");
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.6)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 30, 0.6)";
                }
                colRight.appendChild(contentContainer);
            }
            else if (obj.type === "Image") {
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                contentContainer.appendChild(img);
                colLeft.appendChild(contentContainer);
            }
            obj.element = contentContainer;
        }
        let egyptObjects = [
            new Portfolio.TimelineObj("Text", "Fall of Egypt: The Last City", ""),
            new Portfolio.TimelineObj("Text", "Fall of Egypt: The Last City is a Cooperative city-builder during a zombie apocalypse in a snow covered, ancient Egypt, where players, who take control of unique factions, have to work together to find a way to end the zombie onslaught before their city dies out.", ""),
            new Portfolio.TimelineObj("Text", "Lead Game Design", "", true),
            new Portfolio.TimelineObj("Text", "2D Art", "", true),
            new Portfolio.TimelineObj("Text", "Narrative Design", "", true),
            new Portfolio.TimelineObj("Text", "Clip Studio Paint", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/e1.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e4.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e3.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e0.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e5.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e2.JPG"),
        ];
        for (let obj of egyptObjects) {
            const colLeft = document.getElementById("col_left5");
            const colRight = document.getElementById("col_right5");
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.6)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 30, 0.6)";
                }
                colLeft.appendChild(contentContainer);
            }
            else if (obj.type === "Image") {
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                contentContainer.appendChild(img);
                colRight.appendChild(contentContainer);
            }
            obj.element = contentContainer;
        }
        let resonanceObjects = [
            new Portfolio.TimelineObj("Text", "Resonance", ""),
            new Portfolio.TimelineObj("Text", "Resonance is a sound puzzle game in which the player has to listen to the sound of obstacles and recreate the sound using their sound orb by bouncing it off the environment in the correct combination.", ""),
            new Portfolio.TimelineObj("Text", "Lead Game Design", "", true),
            new Portfolio.TimelineObj("Text", "Level Design", "", true),
            new Portfolio.TimelineObj("Text", "Blueprint Programming", "", true),
            new Portfolio.TimelineObj("Text", "Unreal Engine 5", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/6.png"),
            new Portfolio.TimelineObj("Image", "", "img/1.png"),
            new Portfolio.TimelineObj("Image", "", "img/3.png"),
            new Portfolio.TimelineObj("Image", "", "img/4.png"),
            new Portfolio.TimelineObj("Image", "", "img/7.png"),
            new Portfolio.TimelineObj("Image", "", "img/8.png"),
        ];
        for (let obj of resonanceObjects) {
            const colLeft = document.getElementById("col_left6");
            const colRight = document.getElementById("col_right6");
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.6)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 30, 0.6)";
                }
                colRight.appendChild(contentContainer);
            }
            else if (obj.type === "Image") {
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                contentContainer.appendChild(img);
                colLeft.appendChild(contentContainer);
            }
            obj.element = contentContainer;
        }
        let p3Objects = [
            new Portfolio.TimelineObj("Text", "Project 3", ""),
            new Portfolio.TimelineObj("Text", "Coming soon...", ""),
            new Portfolio.TimelineObj("Text", "Coming soon...", "", true),
            new Portfolio.TimelineObj("Text", "Coming soon...", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/null.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/null.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/null.jpg"),
        ];
        for (let obj of p3Objects) {
            const colLeft = document.getElementById("col_left7");
            const colRight = document.getElementById("col_right7");
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.6)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 30, 0.6)";
                }
                colLeft.appendChild(contentContainer);
            }
            else if (obj.type === "Image") {
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                contentContainer.appendChild(img);
                colRight.appendChild(contentContainer);
            }
            obj.element = contentContainer;
        }
        window.addEventListener("scroll", fade);
        function fade() {
            const allObjects = [...guideObjects, ...unseenObjects, ...deadObjects, ...symphoObjects, ...egyptObjects, ...p3Objects];
            for (const obj of allObjects) {
                const rect = obj.element.getBoundingClientRect();
                const isVisible = rect.top >= -window.innerHeight / 5 && rect.bottom <= window.innerHeight;
                isVisible ? obj.fadeIn() : obj.fadeOut();
            }
        }
    }
})(Portfolio || (Portfolio = {}));
