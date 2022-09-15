// Vanilla Tilt

VanillaTilt.init(document.querySelector("#card-custom"), {
    startX: 45,
    startY: 45,
    reset: false,
});

// Prevents page from scrolling

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}