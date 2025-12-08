import Zdog from 'zzz';

const illo = new Zdog.Illustration({
    element: '#zdog-rings-bg',
    zoom: 0.9,
    dragRotate: false,
});

const atomGroup = new Zdog.Group({
    addTo: illo,
});

// ELLIPSES
const ringProps = {
    addTo: atomGroup,
    diameter: 160,
    stroke: 2,
    color: '#F4D03F',
};

new Zdog.Ellipse({
    ...ringProps,
    rotate: { x: Zdog.TAU / 2.5 },
});

new Zdog.Ellipse({
    ...ringProps,
    rotate: { x: Zdog.TAU / 3, y: Zdog.TAU / 3 },
});

new Zdog.Ellipse({
    ...ringProps,
    rotate: { x: Zdog.TAU / 3, y: -Zdog.TAU / 3 },
});

// CERCLE
new Zdog.Shape({
    addTo: atomGroup,
    stroke: 20,
    color: '#F4D03F',
});

// ANIMATION ROTATION
function animate() {
    atomGroup.rotate.y += 0.005;
    atomGroup.rotate.x += 0.003;

    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();
