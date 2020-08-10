/* Key press functions*/


document.addEventListener("keydown", function (event) {


    if (event.code === "KeyA") {
        let audio = new Audio("sounds/A.mp3").play();

    } else if (event.code === "KeyS") {
        let audio = new Audio("sounds/S.mp3").play();
    } else if (event.code === "KeyD") {
        let audio = new Audio("sounds/D.mp3").play();

    } else if (event.code === "KeyF") {
        let audio = new Audio("sounds/F.mp3").play();
    } else if (event.code === "KeyG") {
        let audio = new Audio("sounds/G.mp3").play();

    } else if (event.code === "KeyH") {
        let audio = new Audio("sounds/H.mp3").play();

    } else if (event.code === "KeyJ") {
        let audio = new Audio("sounds/J.mp3").play();

    } else if (event.code === "KeyJ") {
        let audio = new Audio("sounds/J.mp3").play();


    } else if (event.code === "KeyW") {
        let audio = new Audio("sounds/W.mp3").play();

    } else if (event.code === "KeyE") {
        let audio = new Audio("sounds/E.mp3").play();


    } else if (event.code === "KeyT") {
        let audio = new Audio("sounds/T.mp3").play();



    } else if (event.code === "KeyY") {
        let audio = new Audio("sounds/Y.mp3").play();

    } else if (event.code === "KeyU") {
        let audio = new Audio("sounds/U.mp3").play();




    } else {
        console.log("Press a white key: A, S, D, F, G, H or J or a black key: W, E, T, Y or U.");
    }




});
