import { animate, utils } from 'animejs';


// ANIMATION DEUX CERCLE DE TEXT (TOP)
const latencyElement = document.getElementById("latency-num");
const creditElement = document.getElementById("credit-num");

animate(latencyElement, {
    textContent: () => utils.random(10, 45),
    modifier: utils.round(0),
    ease: 'linear',
    duration: () => utils.random(500, 1200),
    loop: true,
    onLoop: (self) => {
        self.refresh();
    }
});

animate(creditElement, {
    textContent: () => utils.random(6000, 10000),
    modifier: utils.round(0),
    ease: 'inOutQuad',
    duration: () => utils.random(800, 2000),
    loop: true,
    onLoop: (self) => {
        self.refresh();
    }
});

// ANIMATION QUATRE CERCLE (BOTTOM)

