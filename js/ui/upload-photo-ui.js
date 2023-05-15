import '../../pristine/pristine.min.js';
import { setupScale, dismissScale } from '../domain/render-scale-ui.js';
import { setupEffects, dismissEffects } from '../domain/render-effects-ui.js';

const uploadInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const uploadSelectImage = document.getElementById('upload-select-image');

const pristine = new Pristine(uploadSelectImage, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'item--invalid',
  successClass: 'item--valid',
  errorTextParent: 'img-upload__field-wrapper',
}
);

function showForm () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

function hideForm() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
}

function handleKeydownEvent(event) {
  if (event.key === 'Escape') {
    cancelUpload();
  }
}

function startUpload() {
  showForm();
  document.addEventListener('keydown', handleKeydownEvent);

  setupEffects();
  setupScale();
}

function validateListener(event) {
  if (!pristine.validate()) {
    event.preventDefault();
  }
}

function cancelUpload() {
  hideForm();
  document.removeEventListener('keydown', handleKeydownEvent);
  uploadSelectImage.reset();

  dismissEffects();
  dismissScale();
  cancelButton.removeEventListener('click', cancelUpload);
  uploadSelectImage.removeEventListener('submit', validateListener);
}

function validateDescription(description, minDescriptionLength, maxDescriptionLength) {
  return description.length >= minDescriptionLength && description.length <= maxDescriptionLength;
}

function setupUploadView(minDescriptionLength, maxDescriptionLength) {

  uploadInput.addEventListener('change', startUpload);
  cancelButton.addEventListener('click', cancelUpload);

  const descriptionTitle = `От ${minDescriptionLength} до ${maxDescriptionLength} символов`;

  pristine.addValidator(
    uploadSelectImage.querySelector('.text__description'),
    (text) => {
      validateDescription(text, minDescriptionLength, maxDescriptionLength);
    },
    descriptionTitle
  );

  uploadSelectImage.addEventListener('submit', validateListener);
}

export {
  setupUploadView
};
