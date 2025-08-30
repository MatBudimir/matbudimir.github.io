"use strict";
var Portfolio;
(function (Portfolio) {
    window.addEventListener("load", load);
    // Defaults and Variables
    let imageDefaultWidth = 5;
    let imageExpandedWidth = 10;
    let videoWidth = `${innerWidth * 0.4}px`;
    let videoHeight = `${innerWidth * 0.22}px`;
    function load() {
        const body = document.querySelector("body");
        // Create Header HTMLElements
        const introCard = document.createElement("div");
        introCard.id = "card";
        body.append(introCard);
        const name = document.createElement("div");
        name.className = "header";
        name.id = "name";
        name.innerText = "Matej Budimir";
        const subtitle = document.createElement("div");
        subtitle.className = "header";
        subtitle.id = "subtitle";
        subtitle.innerText = "Game Design Student";
        const about = document.createElement("div");
        about.className = "header";
        about.id = "descr";
        about.innerText = "Game Designer with a background in visual arts, on a journey to create engaging games and meaningful experiences.";
        const email = document.createElement("div");
        email.className = "header";
        email.id = "mail";
        email.innerText = "xmatbudimir@gmail.com";
        introCard.append(name, subtitle, about, email);
        const timeline = document.createElement("div");
        timeline.className = "timeline";
        body.append(timeline);
        const canvas = document.createElement("canvas");
        canvas.className = "canvas";
        const game1 = document.createElement("div");
        const game2 = document.createElement("div");
        const game3 = document.createElement("div");
        const game4 = document.createElement("div");
        const game5 = document.createElement("div");
        const game6 = document.createElement("div");
        const game7 = document.createElement("div");
        game1.className = "game";
        game2.className = "game";
        game3.className = "game";
        game4.className = "game";
        game5.className = "game";
        game6.className = "game";
        game7.className = "game";
        timeline.append(canvas, game1, game2, game3, game4, game5, game6, game7);
        // game1
        const title1 = document.createElement("div");
        title1.id = "";
        const game1_name = document.createElement("div");
        game1_name.className = "game-title";
        game1_name.innerText = "Diceonomicon (2025)";
        const row1 = document.createElement("div");
        row1.id = "row1";
        const game1_left = document.createElement("div");
        const game1_right = document.createElement("div");
        game1_left.id = "col_left";
        game1_right.id = "col_right";
        const game1_img = document.createElement("div");
        game1_img.className = "img1";
        game1_img.id = "img1";
        const game1_vid = document.createElement("div");
        game1_vid.id = "vid1";
        game1.append(title1, row1);
        title1.append(game1_name);
        row1.append(game1_left, game1_right);
        game1_right.append(game1_img, game1_vid);
        // game2
        const title2 = document.createElement("div");
        title2.id = "";
        const game2_name = document.createElement("div");
        game2_name.className = "game-title";
        game2_name.innerText = "Resonance (2025)";
        const row2 = document.createElement("div");
        row2.id = "row2";
        const game2_left = document.createElement("div");
        const game2_right = document.createElement("div");
        game2_left.id = "col_left2";
        game2_right.id = "col_right2";
        const game2_img = document.createElement("div");
        game2_img.className = "img2";
        game2_img.id = "img2";
        const game2_vid = document.createElement("div");
        game2_vid.id = "vid2";
        game2.append(title2, row2);
        title2.append(game2_name);
        row2.append(game2_left, game2_right);
        game2_right.append(game2_img, game2_vid);
        // game3
        const title3 = document.createElement("div");
        title3.id = "";
        const game3_name = document.createElement("div");
        game3_name.className = "game-title";
        game3_name.innerText = "Fall of Egypt: The Last City (2025)";
        const row3 = document.createElement("div");
        row3.id = "row3";
        const game3_left = document.createElement("div");
        const game3_right = document.createElement("div");
        game3_left.id = "col_left3";
        game3_right.id = "col_right3";
        const game3_img = document.createElement("div");
        game3_img.className = "img3";
        game3_img.id = "img3";
        const game3_vid = document.createElement("div");
        game3_vid.id = "vid3";
        game3.append(title3, row3);
        title3.append(game3_name);
        row3.append(game3_left, game3_right);
        game3_right.append(game3_img, game3_vid);
        // game4
        const title4 = document.createElement("div");
        title4.id = "";
        const game4_name = document.createElement("div");
        game4_name.className = "game-title";
        game4_name.innerText = "Ishavar's Guide to Curses (2019)";
        const row4 = document.createElement("div");
        row4.id = "row4";
        const game4_left = document.createElement("div");
        const game4_right = document.createElement("div");
        game4_left.id = "col_left4";
        game4_right.id = "col_right4";
        const game4_img = document.createElement("div");
        game4_img.className = "img4";
        game4_img.id = "img4";
        const game4_vid = document.createElement("div");
        game4_vid.id = "vid4";
        game4.append(title4, row4);
        title4.append(game4_name);
        row4.append(game4_left, game4_right);
        game4_right.append(game4_img, game4_vid);
        // game5
        const title5 = document.createElement("div");
        title4.id = "";
        const game5_name = document.createElement("div");
        game5_name.className = "game-title";
        game5_name.innerText = "Dead Man's Call (2024)";
        const row5 = document.createElement("div");
        row5.id = "row5";
        const game5_left = document.createElement("div");
        const game5_right = document.createElement("div");
        game5_left.id = "col_left5";
        game5_right.id = "col_right5";
        const game5_img = document.createElement("div");
        game5_img.className = "img5";
        game5_img.id = "img5";
        const game5_vid = document.createElement("div");
        game5_vid.id = "vid5";
        game5.append(title5, row5);
        title5.append(game5_name);
        row5.append(game5_left, game5_right);
        game5_right.append(game5_img, game5_vid);
        // game6
        const title6 = document.createElement("div");
        title6.id = "";
        const game6_name = document.createElement("div");
        game6_name.className = "game-title";
        game6_name.innerText = "Unseen (2023)";
        const row6 = document.createElement("div");
        row6.id = "row6";
        const game6_left = document.createElement("div");
        const game6_right = document.createElement("div");
        game6_left.id = "col_left6";
        game6_right.id = "col_right6";
        const game6_img = document.createElement("div");
        game6_img.className = "img6";
        game6_img.id = "img6";
        const game6_vid = document.createElement("div");
        game6_vid.id = "vid6";
        game6.append(title6, row6);
        title6.append(game6_name);
        row6.append(game6_left, game6_right);
        game6_right.append(game6_img, game6_vid);
        // game7
        const title7 = document.createElement("div");
        title7.id = "";
        const game7_name = document.createElement("div");
        game7_name.className = "game-title";
        game7_name.innerText = "SymphoTea (GGJ 2025)";
        const row7 = document.createElement("div");
        row7.id = "row7";
        const game7_left = document.createElement("div");
        const game7_right = document.createElement("div");
        game7_left.id = "col_left7";
        game7_right.id = "col_right7";
        const game7_img = document.createElement("div");
        game7_img.className = "img7";
        game7_img.id = "img7";
        const game7_vid = document.createElement("div");
        game7_vid.id = "vid7";
        game7.append(title7, row7);
        title7.append(game7_name);
        row7.append(game7_left, game7_right);
        game7_right.append(game7_img, game7_vid);
        // Draw Timeline on Canvas
        drawTimeline();
        // Create Game Information
        createGameInfo(game1_vid, game2_vid, game3_vid, game4_vid, game5_vid, game6_vid, game7_vid);
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
        ctx.strokeStyle = "rgba(105, 110, 105, 0.6)";
        ctx.stroke();
    }
    // Game Info: 
    // 1) Resonance or Diceonomicon
    // 2) Diceonomicon or Resonance
    // 3) Fall of Egypt
    // 4) Ishavar's Guide to Curses
    // 5) Unseen
    // 6) Dead Man's Call
    // 7) SymphoTea
    function createGameInfo(vid1, vid2, vid3, vid4, vid5, vid6, vid7) {
        // Game 1: ...
        let game1Objects = [
            new Portfolio.TimelineObj("Text", "Denise Franz\nFlorine Bienhüls\nJannick Klose\nMatej Budimir", "", true, false, false, false, "PGame Design, (Lead) Programming, Music\nUI/UX Design\nGame Design, Programming\n(Lead) Game Design, Programming, Art, Project Management"),
            new Portfolio.TimelineObj("Text", "· Designed and pitched the core game concept\n· Discussed, prototyped and playtested multiple versions of the combat system (team)\n· Implemented a number of core gameplay features using C# and Unity\n· Designed and illustrated characters and UI elements (combat)\n· Planned and organized tasks in an agile environment to reach our goals\n· Assisted other team members by learning Unity features and teaching them how to use them", "", false, true),
            new Portfolio.TimelineObj("Text", "A dice-builder from hell. Collect souls, demons and more dice to fight the evil manifestations of the seven deadly sins. And always remember: if you are going through hell, keep going. Diceonomicon is a turn-based roguelike game with a focus on dicebuilding. To progress the players have to collect demon companions called Implings to fight for them, which they command using their bag of dice. The game takes place in a fantastical vibrant hell, inspired by ragtime, jazz and prohibition era America. It draws inspiration from different cultures and underworld representations.", ""),
            new Portfolio.TimelineObj("Text", "Unity, Clip Studio Paint, FMOD", "", false, false, true),
            new Portfolio.TimelineObj("Image", "", "img/diegif1.gif"),
            new Portfolio.TimelineObj("Image", "", "img/diegif2.gif"),
            new Portfolio.TimelineObj("Image", "", "img/Mockup.png"),
            //new Portfolio.TimelineObj("Image", "", "img/Screenshot.png"),
            new Portfolio.TimelineObj("Image", "", "img/dice7.png"),
            new Portfolio.TimelineObj("Image", "", "img/dicesheet2.png"),
            new Portfolio.TimelineObj("Image", "", "img/dicesheet.png"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/avDXDpk1lAY"),
        ];
        for (let obj of game1Objects) {
            const colLeft = document.getElementById("col_left");
            const colRight = document.getElementById("col_right");
            if (obj.type === "Text") {
                const cardContainer = document.createElement("div");
                cardContainer.className = "card-container visible";
                cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(35, 35, 35, 1))";
                const cardTitle = document.createElement("div");
                cardTitle.className = "title-card";
                cardTitle.innerText = "Description";
                const cardDescription = document.createElement("div");
                cardDescription.innerText = obj.text;
                cardDescription.className = "card-content";
                const icon = document.createElement("img");
                icon.className = "icon";
                icon.style.marginLeft = "auto";
                icon.src = "icon_info.png";
                cardContainer.append(cardTitle, cardDescription);
                cardTitle.append(icon);
                if (obj.team === true) {
                    cardTitle.innerText = "Team";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(60, 30, 40, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(60, 30, 40, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    cardDescription.style.display = "grid";
                    cardDescription.style.gridTemplateColumns = "repeat(2, auto)";
                    const teamDescription = document.createElement("div");
                    teamDescription.innerText = obj.team_text;
                    icon.src = "icon_team.png";
                    cardTitle.append(icon);
                    cardDescription.append(teamDescription);
                }
                if (obj.contribution === true) {
                    cardTitle.innerText = "Contribution";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(40, 20, 30, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(40, 20, 30, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_skill.png";
                    cardTitle.append(icon);
                }
                if (obj.tool === true) {
                    cardTitle.innerText = "Tools";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(20, 40, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 40, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_tools.png";
                    cardTitle.append(icon);
                }
                colLeft.appendChild(cardContainer);
                obj.element = cardContainer;
            }
            else if (obj.type === "Image") {
                const imageContainer = document.getElementById("img1");
                imageContainer.className = "img1 visible";
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.225}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                imageContainer.append(img);
                colRight.append(imageContainer);
            }
            else if (obj.type === "Video") {
                vid1.classList.add("visible");
                const video = document.createElement("iframe");
                video.src = obj.img;
                video.width = videoWidth;
                video.height = videoHeight;
                vid1.append(video);
            }
        }
        let game2Objects = [
            new Portfolio.TimelineObj("Text", "Jannick Klose\nMatej Budimir\nYasmin Zahrir", "", true, false, false, false, "Programming, Accessibility, Sound\n(Lead) Game Design Level Design, Programming, Sound\nProgramming, Accessibility (Menu/Settings)"),
            new Portfolio.TimelineObj("Text", "· Designed and pitched the core game concept\n· Designed and implemented the level layout using a modular room system\n· Created simple 3D assets (spike blocks and floor spikes) in Blender\n· Implemented basic gameplay functions and interactions using Unreal Engine 5's Blueprints\n· Created sounds with Ableton Live and implemented them using FMOD", "", false, true, false),
            new Portfolio.TimelineObj("Text", "Exhibited the game at Gamescom 2025 in Cologne", "", false, false, false, true),
            new Portfolio.TimelineObj("Text", "Resonance is a sound puzzle game in which the player has to listen to the sound of obstacles and recreate the sound using their sound orb by bouncing it off the environment in the correct combination. \n\n Resonance is an audio game we designed as part of the Sound2 course in two weeks. The goal was to create a game you can only beat by listening to audio cues and to make it accessible to visually impaired players.", ""),
            new Portfolio.TimelineObj("Text", "Unreal Engine 5, FMOD, Ableton Live, Blender", "", false, false, true),
            new Portfolio.TimelineObj("Image", "", "img/resgif1.gif"),
            new Portfolio.TimelineObj("Image", "", "img/resgif2.gif"),
            new Portfolio.TimelineObj("Image", "", "img/resgif4.gif"),
            new Portfolio.TimelineObj("Image", "", "img/resgif5.gif"),
            // new Portfolio.TimelineObj("Image", "", "img/6.png"),
            // new Portfolio.TimelineObj("Image", "", "img/1.png"),
            new Portfolio.TimelineObj("Image", "", "img/gc1.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/gc2.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/gc3.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/gc4.jpg"),
            // new Portfolio.TimelineObj("Image", "", "img/7.png"),
            // new Portfolio.TimelineObj("Image", "", "img/8.png"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/r-vaTw5A26A"),
        ];
        for (let obj of game2Objects) {
            const colLeft = document.getElementById("col_left2");
            const colRight = document.getElementById("col_right2");
            if (obj.type === "Text") {
                const cardContainer = document.createElement("div");
                cardContainer.className = "card-container visible";
                cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(35, 35, 35, 1))";
                cardContainer.style.boxShadow = "inset -2px 2px rgba(35, 35, 35, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                const cardTitle = document.createElement("div");
                cardTitle.className = "title-card";
                cardTitle.innerText = "Description";
                const cardDescription = document.createElement("div");
                cardDescription.innerText = obj.text;
                cardDescription.className = "card-content";
                const icon = document.createElement("img");
                icon.className = "icon";
                icon.style.marginLeft = "auto";
                icon.src = "icon_info.png";
                cardContainer.append(cardTitle, cardDescription);
                cardTitle.append(icon);
                if (obj.team === true) {
                    cardTitle.innerText = "Team";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(90, 65, 30, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(90, 65, 30, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    cardDescription.style.display = "grid";
                    cardDescription.style.gridTemplateColumns = "repeat(2, auto)";
                    const teamDescription = document.createElement("div");
                    teamDescription.innerText = obj.team_text;
                    icon.src = "icon_team.png";
                    cardTitle.append(icon);
                    cardDescription.append(teamDescription);
                }
                if (obj.contribution === true) {
                    cardTitle.innerText = "Contribution";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(65, 45, 30, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(65, 45, 30, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_skill.png";
                    cardTitle.append(icon);
                }
                if (obj.tool === true) {
                    cardTitle.innerText = "Tools";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(20, 40, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 40, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_tools.png";
                    cardTitle.append(icon);
                }
                if (obj.award === true) {
                    cardTitle.innerText = "Achievement";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(50, 30, 20, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(50, 30, 20, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_award.png";
                    cardTitle.append(icon);
                }
                colLeft.appendChild(cardContainer);
                obj.element = cardContainer;
            }
            else if (obj.type === "Image") {
                const imageContainer = document.getElementById("img2");
                imageContainer.className = "img1 visible";
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.225}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                imageContainer.append(img);
                colRight.append(imageContainer);
            }
            else if (obj.type === "Video") {
                vid2.classList.add("visible");
                const video = document.createElement("iframe");
                video.src = obj.img;
                video.width = videoWidth;
                video.height = videoHeight;
                vid2.append(video);
            }
        }
        // Fall of Egypt (2025)
        let game3Objects = [
            new Portfolio.TimelineObj("Text", "Andi Niederreiter\nMarcel Herbst\nMatej Budimir\nThore Stullich", "", true, false, false, false, "Game Design, Art\n Game Design, 3D Art\n(Lead) Game Design, Art, Programming, Project Management\nGame Design"),
            new Portfolio.TimelineObj("Text", "· Designed the key game mechanics and play patterns\n· Lead group meetings to discuss game design problems and questions\n· Painted the box and game board illustrations\n· Designed and engraved wooden game tokens\n· Assisted other members in their 2D and 3D art related tasks\n· Wrote the narrative outline for the setting, as well as the descriptions for event cards\n· Programmed simulations for the game to collect data", "", false, true, false),
            new Portfolio.TimelineObj("Text", "Fall of Egypt: The Last City is a Cooperative city-builder during a zombie apocalypse in a snow covered, ancient Egypt, where players, who take control of unique factions, have to work together to find a way to end the zombie onslaught before their city dies out. \n\n Fall of Egypt is the first board game we designed as part of our studies. In six weeks we went from a rough idea for a game to a heavily playtested and simulated, high quality prototype which is fun to play.", ""),
            new Portfolio.TimelineObj("Text", "Clip Studio Paint, Adobe InDesign", "", false, false, true),
            new Portfolio.TimelineObj("Image", "", "img/doe2.png"),
            new Portfolio.TimelineObj("Image", "", "img/doe1.png"),
            new Portfolio.TimelineObj("Image", "", "img/doe3.png"),
            new Portfolio.TimelineObj("Image", "", "img/e1.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e4.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e3.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e0.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e5.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e2.JPG"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/o_HRBv0w6kY"),
        ];
        for (let obj of game3Objects) {
            const colLeft = document.getElementById("col_left3");
            const colRight = document.getElementById("col_right3");
            if (obj.type === "Text") {
                const cardContainer = document.createElement("div");
                cardContainer.className = "card-container visible";
                cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(35, 30, 30, 1))";
                const cardTitle = document.createElement("div");
                cardTitle.className = "title-card";
                cardTitle.innerText = "Description";
                const cardDescription = document.createElement("div");
                cardDescription.innerText = obj.text;
                cardDescription.className = "card-content";
                const icon = document.createElement("img");
                icon.className = "icon";
                icon.style.marginLeft = "auto";
                icon.src = "icon_info.png";
                cardContainer.append(cardTitle, cardDescription);
                cardTitle.append(icon);
                if (obj.team === true) {
                    cardTitle.innerText = "Team";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(60, 60, 25, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(60, 60, 25, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    cardDescription.style.display = "grid";
                    cardDescription.style.gridTemplateColumns = "repeat(2, auto)";
                    const teamDescription = document.createElement("div");
                    teamDescription.innerText = obj.team_text;
                    icon.src = "icon_team.png";
                    cardTitle.append(icon);
                    cardDescription.append(teamDescription);
                }
                if (obj.contribution === true) {
                    cardTitle.innerText = "Contribution";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(45, 40, 10, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(45, 40, 10, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_skill.png";
                    cardTitle.append(icon);
                }
                if (obj.tool === true) {
                    cardTitle.innerText = "Tools";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(20, 40, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 40, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_tools.png";
                    cardTitle.append(icon);
                }
                if (obj.award === true) {
                    cardTitle.innerText = "Achievement";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(25, 20, 20, 0.9), rgba(40, 30, 10, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(40, 30, 10, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_award.png";
                    cardTitle.append(icon);
                }
                colLeft.appendChild(cardContainer);
                obj.element = cardContainer;
            }
            else if (obj.type === "Image") {
                const imageContainer = document.getElementById("img3");
                imageContainer.className = "img1 visible";
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                imageContainer.append(img);
                colRight.append(imageContainer);
            }
            else if (obj.type === "Video") {
                vid3.classList.add("visible");
                const video = document.createElement("iframe");
                video.src = obj.img;
                video.width = videoWidth;
                video.height = videoHeight;
                vid3.append(video);
            }
        }
        let game4Objects = [
            new Portfolio.TimelineObj("Text", "Adam Hancock\nMatej Budimir", "", true, false, false, false, "Editor\nGame Design, Art, Writing"),
            new Portfolio.TimelineObj("Text", "· Designed features and attributes for player races, sub-classes, and backgrounds\n· Designed stats and behaviour of monsters\n· Designed special rules and roll tables for curses and blessings\n· Painted the book cover and character illustrations, as well as other miscelanious illustrations found in the book\n· Wrote descriptions for monsters, cultures, and classes\n· Wrote rule texts for features described in the book", "", false, true, false),
            new Portfolio.TimelineObj("Text", "Reached the GOLD Bestseller status on the DMsGuild", "", false, false, false, true),
            new Portfolio.TimelineObj("Text", "Ishavar's Guide to Curses offers players and Dungeon Masters the option to play as various cursed creatures from pop culture and Dungeons & Dragons lore. It also features a new original race: the Ashen. More than just providing stats and numbers, this book also expands on the theme of some of these creatures and adds character options that are thematically appropriate. Dungeon Masters also get monsters to use, that not only expand on the cursed creatures, but also add inspiration for adventures and stories. \n\n Ishavar's Guide to Curses was my first official foray into game design, and what ultimately got me interested in pursuing it as a career.", ""),
            // new Portfolio.TimelineObj("Text", "Ishavar's Guide to Curses offers players and Dungeon Masters the option to play as various cursed creatures from pop culture and Dungeons & Dragons lore. It also features a new original race: the Ashen. More than just providing stats and numbers, this book also expands on the theme of some of these creatures and adds character options that are thematically appropriate. Dungeon Masters also get monsters to use, that not only expand on the cursed creatures, but also add inspiration for adventures and stories. \n\n Ishavar's Guide to Curses was my first official foray into game design, and what ultimately got me interested in pursuing it as a career.", ""),
            // new Portfolio.TimelineObj("Text", "Game Design \n• Created stats for Races, Sub-classes, and Backgrounds\n• Created stat blocks for Monsters\n• Created special rules and roll tables for curses and blessings", "", true),
            // new Portfolio.TimelineObj("Text", "2D Art \n• Cover Illustration\n• Character and Monster Illustrations\n• 2D Background Environments", "", true),
            // new Portfolio.TimelineObj("Text", "Narrative Writing \n• Wrote narrative descriptions for cultures, features, and monsters\n• Wrote rule texts for features described in the book", "", true),
            // new Portfolio.TimelineObj("Text", "Photoshop", "", false, true),
            // new Portfolio.TimelineObj("Image", "", "img/Guide_to_Curses_Cover.jpg"),
            // new Portfolio.TimelineObj("Image", "", "img/matej-budimir-ashen-preview.jpg"),
            // new Portfolio.TimelineObj("Image", "", "img/medusa_preview.JPG"),
            // new Portfolio.TimelineObj("Image", "", "img/matej-budimir-skeleton-preview.jpg"),
            // new Portfolio.TimelineObj("Image", "", "img/blood_preview.JPG"),
            // new Portfolio.TimelineObj("Image", "", "img/matej-budimir-monster-preview.jpg"),
            // new Portfolio.TimelineObj("Text", "Game Design \n• Created stats for Races, Sub-classes, and Backgrounds\n• Created stat blocks for Monsters\n• Created special rules and roll tables for curses and blessings", "", true),
            // new Portfolio.TimelineObj("Text", "2D Art \n• Cover Illustration\n• Character and Monster Illustrations\n• 2D Background Environments", "", true),
            // new Portfolio.TimelineObj("Text", "Narrative Writing \n• Wrote narrative descriptions for cultures, features, and monsters\n• Wrote rule texts for features described in the book", "", true),
            new Portfolio.TimelineObj("Text", "Photoshop", "", false, false, true),
            new Portfolio.TimelineObj("Image", "", "img/Guide_to_Curses_Cover.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/matej-budimir-ashen-preview.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/medusa_preview.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/matej-budimir-skeleton-preview.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/blood_preview.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/matej-budimir-monster-preview.jpg"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/GeFujoNXXk4"),
        ];
        for (let obj of game4Objects) {
            const colLeft = document.getElementById("col_left4");
            const colRight = document.getElementById("col_right4");
            if (obj.type === "Text") {
                const cardContainer = document.createElement("div");
                cardContainer.className = "card-container visible";
                cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(30, 35, 30, 1))";
                const cardTitle = document.createElement("div");
                cardTitle.className = "title-card";
                cardTitle.innerText = "Description";
                const cardDescription = document.createElement("div");
                cardDescription.innerText = obj.text;
                cardDescription.className = "card-content";
                const icon = document.createElement("img");
                icon.className = "icon";
                icon.style.marginLeft = "auto";
                icon.src = "icon_info.png";
                cardContainer.append(cardTitle, cardDescription);
                cardTitle.append(icon);
                if (obj.team === true) {
                    cardTitle.innerText = "Team";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(30, 60, 40, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(30, 60, 40, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    cardDescription.style.display = "grid";
                    cardDescription.style.gridTemplateColumns = "repeat(2, auto)";
                    const teamDescription = document.createElement("div");
                    teamDescription.innerText = obj.team_text;
                    icon.src = "icon_team.png";
                    cardTitle.append(icon);
                    cardDescription.append(teamDescription);
                }
                if (obj.contribution === true) {
                    cardTitle.innerText = "Contribution";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(20, 40, 30, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 40, 30, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_skill.png";
                    cardTitle.append(icon);
                }
                if (obj.tool === true) {
                    cardTitle.innerText = "Tools";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(20, 40, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 40, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_tools.png";
                    cardTitle.append(icon);
                }
                if (obj.award === true) {
                    cardTitle.innerText = "Achievement";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(15, 25, 20, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(15, 25, 20, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_award.png";
                    cardTitle.append(icon);
                }
                colLeft.appendChild(cardContainer);
                obj.element = cardContainer;
            }
            else if (obj.type === "Image") {
                const imageContainer = document.getElementById("img4");
                imageContainer.className = "img1 visible";
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                imageContainer.append(img);
                colRight.append(imageContainer);
            }
            else if (obj.type === "Video") {
                vid4.classList.add("visible");
                const video = document.createElement("iframe");
                video.src = obj.img;
                video.width = videoWidth;
                video.height = videoHeight;
                vid4.append(video);
            }
        }
        let game5Objects = [
            new Portfolio.TimelineObj("Text", "Christian Friedrich Bauer\nFlorine Bienhüls\nJustin Frei\nMatej Budimir\nMikhail Ko", "", true, false, false, false, "Narrative Design, Art\nNarrative Design, UI\nGame Design\nLevel Design, Concept Art, UI\nGame Design"),
            new Portfolio.TimelineObj("Text", "· Designed the general layout for the spaceship with modular rooms\n· Kitbashed 3D assets provided to us to create an environment fitting the narrative direction\n· Drew concept art for the spaceship enterior testing different atmospheres\n· Implemented several functions including: Button UI displays, FMOD and Sound implementation\n· Composed atmospheric background music and radio songs\n· Created and mixed various sounds part for the game, including: doors, pickups, and footsteps", "", false, true, false),
            new Portfolio.TimelineObj("Text", "Dead Man's Call is a first-person narrative puzzle game set in the far future. The game takes place in the spaceship “Nightlight” crewed by three suspicious individuals. The aim is to find out what happened to the captain and his medical robot, H3A1_TH, from whom you received a distress call. To solve the mystery the player must explore the spaceship and complete puzzles to gather clues and find keys which help them solve the case. \n\n Dead Man's Call was the first project we did at Furtwangen University as part of the Entry Project course. With a total of five team members we ventured into the shallow waters of Unreal Engine's blueprint system and applied agile work methods to create a playable prototype in two weeks", ""),
            new Portfolio.TimelineObj("Text", "Unreal Engine 5, Ableton Live, FMOD", "", false, false, true),
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
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/3yir6aBrSkw"),
        ];
        for (let obj of game5Objects) {
            const colLeft = document.getElementById("col_left5");
            const colRight = document.getElementById("col_right5");
            if (obj.type === "Text") {
                const cardContainer = document.createElement("div");
                cardContainer.className = "card-container visible";
                cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(30, 30, 35, 1))";
                const cardTitle = document.createElement("div");
                cardTitle.className = "title-card";
                cardTitle.innerText = "Description";
                const cardDescription = document.createElement("div");
                cardDescription.innerText = obj.text;
                cardDescription.className = "card-content";
                const icon = document.createElement("img");
                icon.className = "icon";
                icon.style.marginLeft = "auto";
                icon.src = "icon_info.png";
                cardContainer.append(cardTitle, cardDescription);
                cardTitle.append(icon);
                if (obj.team === true) {
                    cardTitle.innerText = "Team";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(30, 40, 70, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(30, 40, 70, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    cardDescription.style.display = "grid";
                    cardDescription.style.gridTemplateColumns = "repeat(2, auto)";
                    const teamDescription = document.createElement("div");
                    teamDescription.innerText = obj.team_text;
                    icon.src = "icon_team.png";
                    cardTitle.append(icon);
                    cardDescription.append(teamDescription);
                }
                if (obj.contribution === true) {
                    cardTitle.innerText = "Contribution";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(20, 30, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 30, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_skill.png";
                    cardTitle.append(icon);
                }
                if (obj.tool === true) {
                    cardTitle.innerText = "Tools";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(20, 40, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 40, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_tools.png";
                    cardTitle.append(icon);
                }
                colLeft.appendChild(cardContainer);
                obj.element = cardContainer;
            }
            else if (obj.type === "Image") {
                const imageContainer = document.getElementById("img5");
                imageContainer.className = "img5 visible";
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.225}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                imageContainer.append(img);
                colRight.append(imageContainer);
            }
            else if (obj.type === "Video") {
                vid5.classList.add("visible");
                const video = document.createElement("iframe");
                video.src = obj.img;
                video.width = videoWidth;
                video.height = videoHeight;
                vid5.append(video);
            }
        }
        let game6Objects = [
            new Portfolio.TimelineObj("Text", "Matej Budimir\nThomas Brush\nDream Protocol", "", true, false, false, false, "Game Design, Level Design, Art\n2D Unity Template\nMusic"),
            new Portfolio.TimelineObj("Text", "· Designed and implemented the core game mechanics\n· Painted and designed the 2D Environment and Characters\n· Painted animations for the character and monsters\n· Learned and applied C# Programming basics editing a 2D platforming template project in Unity", "", false, true, false),
            new Portfolio.TimelineObj("Text", "Unseen is a 2D platformer set in a plague ridden Prague in 1349, with horror elements in which you have to collect eyes to increase your radius of vision and to see hidden things in the world. Special eyes change your perception of the world and let you see new and different things. The focus is on platforming, solving puzzles, and the story. \n\n Unseen was my first atempt at a digital video game prototype. I started work on it without any prior experience with game engines or programming.", ""),
            new Portfolio.TimelineObj("Text", "Unity, Photoshop, Clip Studio Paint", "", false, false, true),
            new Portfolio.TimelineObj("Image", "", "img/unseen_0.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_2.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_4.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_3.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_1.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_8.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_9.png"),
            new Portfolio.TimelineObj("Image", "", "img/unseen_7.png"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/ZoC-6GQcf30"),
        ];
        for (let obj of game6Objects) {
            const colLeft = document.getElementById("col_left6");
            const colRight = document.getElementById("col_right6");
            if (obj.type === "Text") {
                const cardContainer = document.createElement("div");
                cardContainer.className = "card-container visible";
                cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(30, 35, 35, 1))";
                const cardTitle = document.createElement("div");
                cardTitle.className = "title-card";
                cardTitle.innerText = "Description";
                const cardDescription = document.createElement("div");
                cardDescription.innerText = obj.text;
                cardDescription.className = "card-content";
                const icon = document.createElement("img");
                icon.className = "icon";
                icon.style.marginLeft = "auto";
                icon.src = "icon_info.png";
                cardContainer.append(cardTitle, cardDescription);
                cardTitle.append(icon);
                if (obj.team === true) {
                    cardTitle.innerText = "Team";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(30, 50, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(30, 50, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    cardDescription.style.display = "grid";
                    cardDescription.style.gridTemplateColumns = "repeat(2, auto)";
                    const teamDescription = document.createElement("div");
                    teamDescription.innerText = obj.team_text;
                    icon.src = "icon_team.png";
                    cardTitle.append(icon);
                    cardDescription.append(teamDescription);
                }
                if (obj.contribution === true) {
                    cardTitle.innerText = "Contribution";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(15, 40, 40, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(15, 40, 40, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_skill.png";
                    cardTitle.append(icon);
                }
                if (obj.tool === true) {
                    cardTitle.innerText = "Tools";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(20, 40, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 40, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_tools.png";
                    cardTitle.append(icon);
                }
                colLeft.appendChild(cardContainer);
                obj.element = cardContainer;
            }
            else if (obj.type === "Image") {
                const imageContainer = document.getElementById("img6");
                imageContainer.className = "img6 visible";
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.225}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                imageContainer.append(img);
                colRight.append(imageContainer);
            }
            else if (obj.type === "Video") {
                vid6.classList.add("visible");
                const video = document.createElement("iframe");
                video.src = obj.img;
                video.width = videoWidth;
                video.height = videoHeight;
                vid6.append(video);
            }
        }
        let game7Objects = [
            new Portfolio.TimelineObj("Text", "Denise\nDennis\nFlorine\nMarcel\nMarkus\nMatej\nMoritz\nTimo\nTimon", "", true, false, false, false, "Game Design\nProgramming\nGame Design\nSound\nSound\nArt\nProgramming\nProgramming\nSound"),
            new Portfolio.TimelineObj("Text", "· Painted 2D art characters and level assets", "", false, true, false),
            new Portfolio.TimelineObj("Text", "SymphoTea is a game about deciding which social bubble each customer belongs to. This can be found out by listening to their inner part of a symphony and their persona. This way you can serve them the perfect match bubble tea. \n\n SympoTea was designed as part of the Global Game Jam 2025. The theme was 'Bubbles' and as an additional challange our team incoorporated two classical pieces which were provided to us.", ""),
            new Portfolio.TimelineObj("Text", "Clip Studio Paint", "", false, false, true),
            new Portfolio.TimelineObj("Image", "", "img/tea3.jpg"),
            //new Portfolio.TimelineObj("Image", "", "img/tea4.png"),
            //new Portfolio.TimelineObj("Image", "", "img/tea5.png"),
            new Portfolio.TimelineObj("Image", "", "img/tea1.png"),
            new Portfolio.TimelineObj("Image", "", "img/tea6.png"),
            new Portfolio.TimelineObj("Image", "", "img/tea2.png"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/tjHG_9CtPx0"),
        ];
        for (let obj of game7Objects) {
            const colLeft = document.getElementById("col_left7");
            const colRight = document.getElementById("col_right7");
            if (obj.type === "Text") {
                const cardContainer = document.createElement("div");
                cardContainer.className = "card-container visible";
                cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(20, 15, 20, 0.9), rgba(35, 30, 35, 1))";
                const cardTitle = document.createElement("div");
                cardTitle.className = "title-card";
                cardTitle.innerText = "Description";
                const cardDescription = document.createElement("div");
                cardDescription.innerText = obj.text;
                cardDescription.className = "card-content";
                const icon = document.createElement("img");
                icon.className = "icon";
                icon.style.marginLeft = "auto";
                icon.src = "icon_info.png";
                cardContainer.append(cardTitle, cardDescription);
                cardTitle.append(icon);
                if (obj.team === true) {
                    cardTitle.innerText = "Team";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(60, 30, 60, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(60, 30, 60, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    cardDescription.style.display = "grid";
                    cardDescription.style.gridTemplateColumns = "repeat(2, auto)";
                    const teamDescription = document.createElement("div");
                    teamDescription.innerText = obj.team_text;
                    icon.src = "icon_team.png";
                    cardTitle.append(icon);
                    cardDescription.append(teamDescription);
                }
                if (obj.contribution === true) {
                    cardTitle.innerText = "Contribution";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(40, 20, 40, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(40, 20, 40, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_skill.png";
                    cardTitle.append(icon);
                }
                if (obj.tool === true) {
                    cardTitle.innerText = "Tools";
                    cardContainer.style.backgroundImage = "linear-gradient(to bottom left, rgba(15, 20, 20, 0.9), rgba(20, 40, 50, 0.9))";
                    cardContainer.style.boxShadow = "inset -2px 2px rgba(20, 40, 50, 0.8), -10px 10px 20px rgba(0, 0, 0, 0.8)";
                    icon.src = "icon_tools.png";
                    cardTitle.append(icon);
                }
                colLeft.appendChild(cardContainer);
                obj.element = cardContainer;
            }
            else if (obj.type === "Image") {
                const imageContainer = document.getElementById("img7");
                imageContainer.className = "img7 visible";
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.225}px`;
                img.style.height = "auto";
                toggleImageSize(img);
                imageContainer.append(img);
                colRight.append(imageContainer);
            }
            else if (obj.type === "Video") {
                vid7.classList.add("visible");
                const video = document.createElement("iframe");
                video.src = obj.img;
                video.width = videoWidth;
                video.height = videoHeight;
                vid7.append(video);
            }
        }
        window.addEventListener("scroll", fade);
        function fade() {
            const allObjects = [...game1Objects, ...game2Objects, ...game3Objects, ...game4Objects, ...game5Objects, ...game7Objects];
            for (const obj of allObjects) {
                const rect = obj.element.getBoundingClientRect();
                const isVisible = rect.top >= -window.innerHeight / 5 && rect.bottom <= window.innerHeight * 1.1;
                isVisible ? obj.fadeIn() : obj.fadeOut();
            }
        }
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
})(Portfolio || (Portfolio = {}));
