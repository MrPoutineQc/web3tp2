import maplibregl from "maplibre-gl";

const COLORS = {
    gold: '#F4D03F',
    grey: '#4a4a4a',
    water: 'rgba(244, 208, 63, 0.15)'
};

const carte = new maplibregl.Map({
    container: "globe-container",
    style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    center: [-75.7026609, 45.4208346], // Ottawa (Banque du Canada)
    zoom: 1.5,
    pitch: 0,
    attributionControl: false,
});

carte.on('load', () => {
    carte.setProjection({ type: 'globe' });

    // STYLE DU GLOBE
    if (carte.getLayer('water')) {
        carte.setPaintProperty('water', 'fill-color', COLORS.water);
    }
    carte.getStyle().layers.forEach(layer => {
        if (layer.type === 'line') {
            const isMotorway = layer.id.includes('motorway');
            carte.setPaintProperty(layer.id, 'line-color', isMotorway ? COLORS.gold : COLORS.grey);
            if (isMotorway) carte.setPaintProperty(layer.id, 'line-opacity', 0.5);
        }
    });

    // 4. Marqueur
    const marker = document.createElement('div');
    marker.className = 'scifi-marker';

    new maplibregl.Marker({ element: marker })
        .setLngLat([-75.7026609, 45.4208346])
        .addTo(carte);

    // ROTATION AUTOMATIQUE
    let userInteracting = false;
    const spinSpeed = 3;

    function spinGlobe() {
        const zoom = carte.getZoom();
        if (!userInteracting && zoom < 5) {
            const center = carte.getCenter();
            center.lng -= spinSpeed;
            
            carte.easeTo({ center, duration: 1000, easing: (n) => n });
        }
    }

    // Arrêter la rotation quand on touche la carte
    carte.on('mousedown', () => { userInteracting = true; });
    carte.on('dragstart', () => { userInteracting = true; });

    // Reprendre quand on lâche
    carte.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    carte.on('touchend', () => { userInteracting = false; spinGlobe(); });

    // Lancer la boucle
    setInterval(spinGlobe, 1000);
    spinGlobe();
});