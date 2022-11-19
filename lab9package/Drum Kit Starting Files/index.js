$(".w").click(function() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
});

$(".a").click(function() {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
});

$(".s").click(function() {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
});

$(".d").click(function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
});

$(".j").click(function() {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
});

$(".k").click(function() {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
});

$(".l").click(function() {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
});

//универсальная функция для всех клавиш
$(document).keypress(function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//функция для всех клавиш
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
}

//анимация нажатия на кнопку
function buttonAnimation(currentKey) {
    var activeButton = $("." + currentKey);
    activeButton.addClass("pressed");
    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 100);
}