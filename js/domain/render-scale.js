const scaleValueText = document.querySelector('.scale__control--value');
const biggerButton = document.querySelector('.scale__control--bigger');
const smallerButton = document.querySelector('.scale__control--smaller');
const preview = document.querySelector('.img-upload__preview');

const STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;

let currentScale = MAX_VALUE;

function applyScale(scale) {
  scaleValueText.value = `${scale}%`;
  preview.style.transform = `scale(${scale / 100})`;
}

function smallerButtonListener() {
  currentScale = Math.max(MIN_VALUE, currentScale - STEP);
  applyScale(currentScale);
}

function biggerButtonListener() {
  currentScale =  Math.min(MAX_VALUE, currentScale + STEP);
  applyScale(currentScale);
}

function dismissScale() {
  smallerButton.removeEventListener('click', smallerButtonListener);
  biggerButton.removeEventListener('click', biggerButtonListener);
}

function setupScale() {
  applyScale(MAX_VALUE);
  smallerButton.addEventListener('click', smallerButtonListener);
  biggerButton.addEventListener('click', biggerButtonListener);
}

export {
  setupScale,
  dismissScale
};
