namespace Portfolio {
    window.addEventListener("load", load);

    function load() {
        const body: HTMLElement = document.querySelector("body")!;

        // Create Header HTMLElements
        const name = document.createElement("div");
        name.className = "header";
        name.id = "name";
        name.innerText = "Matej Budimir";

        const aboutme = document.createElement("div");
        aboutme.className = "header";
        aboutme.id = "descr";
        aboutme.innerText = "Hello, I am Matej Budimir - A game design student and freelance artist. \nWelcome to my game dev portfolio! \n\nMy art portfolio can be viewed at www.matbudimir.com";

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
        vidRow1.id = "row1"
        vidRow2.id = "row2"
        vidRow3.id = "row3"
        vidRow4.id = "row4"
        vidRow5.id = "row5"
        vidRow6.id = "row6"
        vidRow7.id = "row7"

        const vid1 = document.createElement("iframe");
        const vid2 = document.createElement("iframe");
        const vid3 = document.createElement("iframe");
        const vid4 = document.createElement("iframe");
        const vid5 = document.createElement("iframe");
        const vid6 = document.createElement("iframe");
        const vid7 = document.createElement("iframe");
        vid1.id = "vid1"
        vid1.src = "https://www.youtube.com/embed/GeFujoNXXk4";
        vid1.style.width = `${innerWidth * 0.4}px`;
        vid1.style.height = `${innerWidth * 0.22}px`;
        vid2.id = "vid2"
        vid2.src = "https://www.youtube.com/embed/ZoC-6GQcf30";
        vid2.style.width = `${innerWidth * 0.4}px`;
        vid2.style.height = `${innerWidth * 0.22}px`;
        vid3.id = "vid3"
        vid3.src = "https://www.youtube.com/embed/3yir6aBrSkw";
        vid3.style.width = `${innerWidth * 0.4}px`;
        vid3.style.height = `${innerWidth * 0.22}px`;
        vid4.id = "vid4"
        vid4.src = "https://www.youtube.com/embed/tjHG_9CtPx0"
        vid4.style.width = `${innerWidth * 0.4}px`;
        vid4.style.height = `${innerWidth * 0.22}px`;
        vid5.id = "vid5"
        vid5.src = "https://www.youtube.com/embed/o_HRBv0w6kY"
        vid5.style.width = `${innerWidth * 0.4}px`;
        vid5.style.height = `${innerWidth * 0.22}px`;
        vid6.id = "vid6"
        vid6.src = "https://www.youtube.com/embed/sXS_kBqfG6o"
        vid6.style.width = `${innerWidth * 0.4}px`;
        vid6.style.height = `${innerWidth * 0.22}px`;
        vid7.id = "vid7"
        vid7.src = "https://www.youtube.com/embed/avDXDpk1lAY"
        vid7.style.width = `${innerWidth * 0.4}px`;
        vid7.style.height = `${innerWidth * 0.22}px`;

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

    function toggleImageSize(img: HTMLImageElement) {
        img.addEventListener("click", toggleImg);

        function toggleImg() {
            if (img.classList.contains("expanded")) {
                img.style.width = `${window.innerWidth * 0.15}px`;
                img.style.height = "auto";
                img.classList.remove("expanded");
            } else {
                img.style.width = `${window.innerWidth * 0.45}px`;
                img.style.height = "auto";
                img.classList.add("expanded");
            }
        };
    }

    function drawTimeline() {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
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
        let guideObjects: Portfolio.TimelineObj[] = [
            new Portfolio.TimelineObj("Text", "Ishavar's Guide to Curses", ""),
            new Portfolio.TimelineObj("Text", "Ishavar's Guide to Curses offers players and Dungeon Masters the option to play as various cursed creatures from pop culture and Dungeons & Dragons lore. It also features a new original race: the Ashen. More than just providing stats and numbers, this book also expands on the theme of some of these creatures and adds character options that are thematically appropriate. Dungeon Masters also get monsters to use, that not only expand on the cursed creatures, but also add inspiration for adventures and stories. \n\n Ishavar's Guide to Curses was my first official foray into game design, and what ultimately got me interested in pursuing it as a career.", ""),
            new Portfolio.TimelineObj("Text", "Game Design \n• Created stats for Races, Sub-classes, and Backgrounds\n• Created stat blocks for Monsters\n• Created special rules and roll tables for curses and blessings", "", true),
            new Portfolio.TimelineObj("Text", "2D Art \n• Cover Illustration\n• Character and Monster Illustrations\n• 2D Background Environments", "", true),
            new Portfolio.TimelineObj("Text", "Narrative Writing \n• Wrote narrative descriptions for cultures, features, and monsters\n• Wrote rule texts for features described in the book", "", true),
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
            const colLeft = document.getElementById("col_left")!;
            const colRight = document.getElementById("col_right")!;
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";

                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.9)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 50, 0.9)";
                }
                colLeft.appendChild(contentContainer);

            } else if (obj.type === "Image") {
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

        let unseenObjects: Portfolio.TimelineObj[] = [
            new Portfolio.TimelineObj("Text", "Unseen", ""),
            new Portfolio.TimelineObj("Text", "Unseen is a 2D platformer set in a plague ridden Prague in 1349, with horror elements in which you have to collect eyes to increase your radius of vision and to see hidden things in the world. Special eyes change your perception of the world and let you see new and different things. The focus is on platforming, solving puzzles, and the story. \n\n Unseen was my first atempt at a digital video game prototype. I started work on it without any prior experience with game engines or programming.", ""),
            new Portfolio.TimelineObj("Text", "Game Design \n• Designed the fundamental game mechanics: Player's raidus of visibility increasing with the number of basic eyes collected & special eyes which unlock previously hidden objects in the world", "", true),
            new Portfolio.TimelineObj("Text", "2D Art & Animation \n• Painted 2D art assets \n• Painted animations for the character and enemies", "", true),
            new Portfolio.TimelineObj("Text", "C# Programming \n• Learned basics of C# programming editing and modifying a 2D platforming template project for Unity", "", true),
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
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/ZoC-6GQcf30"),
        ];

        for (let obj of unseenObjects) {
            const colLeft = document.getElementById("col_left2")!;
            const colRight = document.getElementById("col_right2")!;
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.9)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 50, 0.9)";
                }
                colRight.appendChild(contentContainer);
            } else if (obj.type === "Image") {
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

        let deadObjects: Portfolio.TimelineObj[] = [
            new Portfolio.TimelineObj("Text", "Dead Man's Call", ""),
            new Portfolio.TimelineObj("Text", "Dead Man's Call is a first-person narrative puzzle game set in the far future. The game takes place in the spaceship “Nightlight” crewed by three suspicious individuals. The aim is to find out what happened to the captain and his medical robot, H3A1_TH, from whom you received a distress call. To solve the mystery the player must explore the spaceship and complete puzzles to gather clues and find keys which help them solve the case. \n\n Dead Man's Call was the first project we did at Furtwangen University as part of the Entry Project course. With a total of five team members we ventured into the shallow waters of Unreal Engine's blueprint system and applied agile work methods to create a playable prototype in two weeks", ""),
            new Portfolio.TimelineObj("Text", "Level Design \n• I designed a general layout for the spaceship, starting with a rough blockout, which allowed for modular use of it's room\n• I kitbashed 3D assets provided to us to create an environment fitting our narrative needs", "", true),
            new Portfolio.TimelineObj("Text", "Concept Art \n• I drew concept art for the spaceship enterior to find what kind of atmosphere we want the environment to have", "", true),
            new Portfolio.TimelineObj("Text", "Blueprint Programming \n• I worked on several functions including: Button inputs and UI displays, FMOD and Sound implementation", "", true),
            new Portfolio.TimelineObj("Text", "Sound \n• Composed an atmospheric ambient sound\n• Created and mixed various sounds part of the game, including: doors, pickups, and footsteps", "", true),
            new Portfolio.TimelineObj("Text", "Unreal Engine 5", "", false, true),
            new Portfolio.TimelineObj("Text", "Ableton Live & FMOD", "", false, true),
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

        for (let obj of deadObjects) {
            const colLeft = document.getElementById("col_left3")!;
            const colRight = document.getElementById("col_right3")!;
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.9)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 50, 0.9)";
                }

                colLeft.appendChild(contentContainer);
            } else if (obj.type === "Image") {
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


        let symphoObjects: Portfolio.TimelineObj[] = [
            new Portfolio.TimelineObj("Text", "SymphoTea", ""),
            new Portfolio.TimelineObj("Text", "SymphoTea is a game about deciding which social bubble each customer belongs to. This can be found out by listening to their inner part of a symphony and their persona. This way you can serve them the perfect match bubble tea. \n\n SympoTea was designed as part of the Global Game Jam 2025. The theme was 'Bubbles' and as an additional challange our team incoorporated two classical pieces which were provided to us.", ""),
            new Portfolio.TimelineObj("Text", "2D Art \n• I painted 2D art assets inlcuding the characters", "", true),
            new Portfolio.TimelineObj("Text", "Clip Studio Paint", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/tea3.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/tea4.png"),
            new Portfolio.TimelineObj("Image", "", "img/tea5.png"),
            new Portfolio.TimelineObj("Image", "", "img/tea1.png"),
            new Portfolio.TimelineObj("Image", "", "img/tea6.png"),
            new Portfolio.TimelineObj("Image", "", "img/tea2.png"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/tjHG_9CtPx0"),
        ];

        for (let obj of symphoObjects) {
            const colLeft = document.getElementById("col_left4")!;
            const colRight = document.getElementById("col_right4")!;
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.9)";
                }
                if (obj.tool === true) {
                   contentContainer.style.background = "rgba(20, 40, 50, 0.9)";
                }
                colRight.appendChild(contentContainer);
            } else if (obj.type === "Image") {
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

        let egyptObjects: Portfolio.TimelineObj[] = [
            new Portfolio.TimelineObj("Text", "Fall of Egypt: The Last City", ""),
            new Portfolio.TimelineObj("Text", "Fall of Egypt: The Last City is a Cooperative city-builder during a zombie apocalypse in a snow covered, ancient Egypt, where players, who take control of unique factions, have to work together to find a way to end the zombie onslaught before their city dies out. \n\n Fall of Egypt is the first board game we designed as part of our studies. In six weeks we went from a rough idea for a game to a heavily playtested and simulated, high quality prototype which is fun to play.", ""),
            new Portfolio.TimelineObj("Text", "Lead Game Design \n• Designed the major game mechanics and play patterns\n• Desigined specific features for player factions and buildings\n• Designed the progression system\n• Lead group meetings to discuss game design questions and directions", "", true),
            new Portfolio.TimelineObj("Text", "2D Art \n• Painted the box art illustration\n• Painted the board art illustration\n• Designed and created the engraved wood tokens\n• Assisted other members in their 2D and 3D art related tasks", "", true),
            new Portfolio.TimelineObj("Text", "Narrative Design \n• Created the rough narrative outline for the setting of the game\n• Wrote the narrative descriptions for the event cards", "", true),
            new Portfolio.TimelineObj("Text", "TypeScript Programming\n• Programmed simulations for game systems that could run thousands\nof games and collect valuable data used for balancing", "", true),
            new Portfolio.TimelineObj("Text", "Clip Studio Paint", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/e1.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e4.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e3.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e0.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e5.JPG"),
            new Portfolio.TimelineObj("Image", "", "img/e2.JPG"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/o_HRBv0w6kY"),

        ];

        for (let obj of egyptObjects) {
            const colLeft = document.getElementById("col_left5")!;
            const colRight = document.getElementById("col_right5")!;
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.9)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 50, 0.9)";
                }
                colLeft.appendChild(contentContainer);
            } else if (obj.type === "Image") {
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

        let resonanceObjects: Portfolio.TimelineObj[] = [
            new Portfolio.TimelineObj("Text", "Resonance", ""),
            new Portfolio.TimelineObj("Text", "Resonance is a sound puzzle game in which the player has to listen to the sound of obstacles and recreate the sound using their sound orb by bouncing it off the environment in the correct combination. \n\n Resonance is an audio game we designed as part of the Sound2 course in two weeks. The goal was to create a game you can only beat by listening to audio cues and to make it accessible to visually impaired players.", ""),
            new Portfolio.TimelineObj("Text", "Lead Game Design \n• Designed and pitched the general game mechanics and play patterns", "", true),
            new Portfolio.TimelineObj("Text", "Level Design\n• Designed the level layout using a modular room system\n• Designed enviornmental puzzles\n• Furnished the level with assets we got from the asset store", "", true),
            new Portfolio.TimelineObj("Text", "Blueprint Programming\n• Implemented the basic gameplay functions and interactions using blueprints", "", true),
            new Portfolio.TimelineObj("Text", "Sound Design\n• Created sounds using Ableton Live\n• Implemented sounds using FMOD", "", true),
            new Portfolio.TimelineObj("Text", "Unreal Engine 5", "", false, true),
            new Portfolio.TimelineObj("Text", "Ableton Live & FMOD", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/6.png"),
            new Portfolio.TimelineObj("Image", "", "img/1.png"),
            new Portfolio.TimelineObj("Image", "", "img/3.png"),
            new Portfolio.TimelineObj("Image", "", "img/4.png"),
            new Portfolio.TimelineObj("Image", "", "img/7.png"),
            new Portfolio.TimelineObj("Image", "", "img/8.png"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/sXS_kBqfG6o"),
        ];

        for (let obj of resonanceObjects) {
            const colLeft = document.getElementById("col_left6")!;
            const colRight = document.getElementById("col_right6")!;
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.9)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 50, 0.9)";
                }
                colRight.appendChild(contentContainer);
            } else if (obj.type === "Image") {
                const img = document.createElement("img");
                img.src = obj.img;
                img.style.width = `${window.innerWidth * 0.225}px`;
                img.style.height = "auto";

                toggleImageSize(img);

                contentContainer.appendChild(img);
                colLeft.appendChild(contentContainer);
            }
            obj.element = contentContainer;
        }

        let p3Objects: Portfolio.TimelineObj[] = [
            new Portfolio.TimelineObj("Text", "Diceonomicon", ""),
            new Portfolio.TimelineObj("Text", "A dice-builder from hell. Collect souls, demons and more dice to fight the evil manifestations of the seven deadly sins. And always remember: if you are going through hell, keep going. Diceonomicon is a turn-based roguelike game with a focus on dicebuilding. To progress the players have to collect demon companions called Implings to fight for them, which they command using their bag of dice. The game takes place in a fantastical vibrant hell, inspired by ragtime, jazz and prohibition era America. It draws inspiration from different cultures and underworld representations. \n\n Diceonomicon was our end of third semester project. The only limitation was that it had to be a digital game. The main focus for our team was to design a game that we can complete with our skills, and is fun to play.", ""),
            new Portfolio.TimelineObj("Text", "Game Design \n• Designed and pitched the core game concept which consists of: Turn-based strategy and deck-building, using a deck of dice to create powerful combinations, and collecting demons with unique abilities\n• Designed game content including Impling characters, dice effects, and dice slot effects", "", true),
            new Portfolio.TimelineObj("Text", "2D Art \n• Painted Impling character designs and illustrations\n• Painted UI elements for the combat scene\n• Painted concept art and mockups", "", true),
            new Portfolio.TimelineObj("Text", "C# Programming\n• Programmed some of the features and combat algorithms", "", true),
            new Portfolio.TimelineObj("Text", "Project Management\n• Planned out tasks week by week and assigned tasks to reach our goals", "", true),
            new Portfolio.TimelineObj("Text", "Unity", "", false, true),
            new Portfolio.TimelineObj("Text", "Clip Studio Paint", "", false, true),
            new Portfolio.TimelineObj("Text", "FMOD", "", false, true),
            new Portfolio.TimelineObj("Image", "", "img/Prototype.jpg"),
            new Portfolio.TimelineObj("Image", "", "img/Mockup.png"),
            new Portfolio.TimelineObj("Image", "", "img/Screenshot.png"),
            new Portfolio.TimelineObj("Video", "", "https://www.youtube.com/embed/avDXDpk1lAY"),
        ];

        for (let obj of p3Objects) {
            const colLeft = document.getElementById("col_left7")!;
            const colRight = document.getElementById("col_right7")!;
            const contentContainer = document.createElement("div");
            contentContainer.className = "timeline-item visible";
            if (obj.type === "Text") {
                contentContainer.innerText = obj.text;
                contentContainer.id = "text-item";
                if (obj.skill === true) {
                    contentContainer.style.background = "rgba(30, 60, 40, 0.9)";
                }
                if (obj.tool === true) {
                    contentContainer.style.background = "rgba(20, 40, 50, 0.9)";
                }
                colLeft.appendChild(contentContainer);
            } else if (obj.type === "Image") {
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
                const isVisible = rect.top >= -window.innerHeight / 5 && rect.bottom <= window.innerHeight * 1.1;

                isVisible ? obj.fadeIn() : obj.fadeOut();
            }
        }
    }
}
