/** AL JS - Maceió - Connected-cultural with yellow motifs and beaches */
const STATE_CONFIG = {
  stateCode: 'al',
  capital: 'Maceió',
  formspreeUrl: 'https://formspree.io/f/mojqobbg',
  colors: { primary: '#f4d03f', secondary: '#ffeb3b', accent: '#87ceeb' },
  animations: {"enabled": true, "header": {"type": "slideDown", "duration": "0.6s", "easing": "cubic-bezier(0.4, 0, 0.2, 1)", "delay": "0s"}, "sections": {"type": "waveReveal", "duration": "1.2s", "easing": "ease-in-out", "stagger": "0.15s"}, "hero": {"type": "beachParallax", "speed": 0.6, "direction": "horizontal"}, "cards": {"type": "festivalPop", "scale": 1.08, "rotation": 2}, "images": {"type": "zoomReveal", "scale": 1.2, "duration": "0.8s"}},
  interactions: {"hover": "energetic-bounce", "scroll": "wave-sync", "transitions": "coastal-flow", "click": "splash-effect"},
  premiumEffects: ["beach-waves", "cultural-patterns", "sunset-gradient", "floating-particles"]
};

const SECTIONS = ["al-index-section--map", "al-index-section-frequently-asked-questions-about-living-in-", "al-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
