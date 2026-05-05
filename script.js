const phrases = [
    { text: "Ma cosa dici?!", audio: "audio/frase1.mp3" },
    { text: "Incredibile!", audio: "audio/frase2.mp3" },
    { text: "Competenza pura.", audio: "audio/frase3.mp3" }
];

const splash = document.getElementById('splash-screen');
const appContent = document.getElementById('app-content');
const btn = document.getElementById('btn-action');
const img = document.getElementById('person-img');
const textDisplay = document.getElementById('phrase-display');
const player = document.getElementById('audio-player');

// 1. Simulazione caricamento (Splash Screen)
window.addEventListener('load', () => {
    setTimeout(() => {
        splash.classList.add('hidden');
        appContent.classList.remove('hidden');
    }, 3000); // 3 secondi di splash
});

// 2. Funzione "Dì qualcosa"
btn.addEventListener('click', () => {
    // Scegli frase a caso
    const randomIdx = Math.floor(Math.random() * phrases.length);
    const selected = phrases[randomIdx];

    // Animazione vibrazione
    img.classList.add('shake');
    setTimeout(() => img.classList.remove('shake'), 500);

    // Testo e Audio
    textDisplay.innerText = selected.text;
    player.src = selected.audio;
    player.play();
});

// 3. Suggerimenti
function openSuggestion() {
    const email = "tua-email@esempio.com";
    const subject = "Suggerimento CompetEnzo";
    const body = "Ciao Tata, ecco una nuova frase e il link all'audio:";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}