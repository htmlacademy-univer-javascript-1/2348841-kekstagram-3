const preview = document.querySelector('.img-upload__preview');
const clearEffect = document.getElementById('effect-none');
const chromeEffect = document.getElementById('effect-chrome');
const sepiaEffect = document.getElementById('effect-sepia');
const marvinEffect = document.getElementById('effect-marvin');
const phobosEffect = document.getElementById('effect-phobos');
const heatEffect = document.getElementById('effect-heat');

const effects = new Array (clearEffect, chromeEffect, sepiaEffect, marvinEffect, phobosEffect, heatEffect);

let currentEffect = clearEffect.value;

const eventListeners = new Array(6);

function generateEventListener(effect) {
  const newEffect = `effects__preview--${effect.value}`;

  const eventListener = function() {
    preview.classList.remove(currentEffect);
    preview.classList.add(newEffect);
    currentEffect = newEffect;
  };

  return eventListener;
}

function dismissEffects() {
  for(let i = 0; i < effects.length; i++) {
    effects[i].removeEventListener('click', eventListeners[i]);
  }

  preview.classList.remove(currentEffect);
}

function setupEffects() {
  for(let i = 0; i < effects.length; i++) {
    eventListeners[i] = generateEventListener(effects[i]);
    effects[i].addEventListener('click', eventListeners[i]);
  }
}

export {
  setupEffects,
  dismissEffects
};
