import { animate, utils, svg } from 'animejs';


// ANIMATION DEUX CERCLE DE TEXT (TOP)
const latencyElement = document.getElementById("latency-num");
const creditElement = document.getElementById("credit-num");

// RING LATENCY
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

// RING Q-CREDIT EN CIRCULATION
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

const ringElements = svg.createDrawable(".ring");

const updateDrawLabel = () => {
    ringElements.forEach((ringElement) => {
        const drawValue = ringElement.getAttribute("draw");
        const values = drawValue.trim().split(/\s+/);
        const percent = Math.round(values[1] * 100);
        ringElement
            .closest(".circle-container")
            .querySelector("span").textContent = `${percent}`;
    });
};

animate(ringElements, {
    draw: { from: "0 0", to: () => `0 ${utils.random(0, 1, 2)}` },
    loop: true,
    onUpdate: updateDrawLabel,
    onLoop: (self) => {
        self.refresh();
        updateDrawLabel();
    }
});
updateDrawLabel();



// ANIMATION DES JAUGES
const animateGauge = (id, min, max) => {
    const gaugeElement = document.getElementById(id);
    const textElement = gaugeElement.nextElementSibling;

    animate(gaugeElement, {
        width: () => `${utils.random(min, max)}%`,
        duration: () => utils.random(2000, 4000),
        ease: 'inOutCubic',
        loop: true,
        onUpdate: (self) => {
            const currentWidth = parseFloat(gaugeElement.style.width) || 0;
            textElement.textContent = `${Math.round(currentWidth)}%`;
        },
        onLoop: (self) => self.refresh()
    });
};

// VALEUR DES 3 JAUGES AVEC DIFFÉRENTES VALEURS
animateGauge('gauge1', 60, 75);
animateGauge('gauge2', 35, 85);
animateGauge('gauge3', 75, 90);



