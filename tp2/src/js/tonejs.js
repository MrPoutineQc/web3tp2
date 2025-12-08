import * as Tone from "tone.js";

// Initialisation des Instruments et Effets

const delay = new Tone.FeedbackDelay("4n", 0.4).toDestination();

const pluckSynth = new Tone.Synth({
    oscillator: { type: "sine" },
    envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.05,
        release: 0.5
    }
}).connect(delay);
pluckSynth.volume.value = -16;

const companionSynth = new Tone.MembraneSynth().toDestination();
companionSynth.volume.value = -25;

// Musique

function startBackgroundMusic() {

    const melodyPattern = new Tone.Part((time, note) => {
        pluckSynth.triggerAttackRelease(note, "8n", time);
    }, [
        ["0:0:0", "G4"],
        ["1:0:0", "C4"],
        ["2:0:0", "F3"],
        ["3:0:0", "G3"]
    ]).start(0);

    melodyPattern.loop = true;
    melodyPattern.loopEnd = "4m";

    const rhythmPattern = new Tone.Part((time, note) => {
        companionSynth.triggerAttackRelease(note, "16n", time);
    }, [
        ["0:0:0", "C2"],
        ["0:1:2", "C3"],
        ["0:3:0", "C2"]
    ]).start("8n");

    rhythmPattern.loop = true;
    rhythmPattern.loopEnd = "1m";

    Tone.Transport.bpm.value = 110;
    Tone.Transport.start();
}

// Fonction Principale

function initializeAudioSystem() {
    startBackgroundMusic();
}

document.body.addEventListener('click', async () => {
    if (Tone.context.state !== 'running') {
        await Tone.start();
        initializeAudioSystem();
    }
}, { once: true });
