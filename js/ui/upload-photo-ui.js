import '../../pristine/pristine.min.js';
import { setupScale, dismissScale } from '../domain/render-scale.js';
import { setupEffects, dismissEffects } from '../domain/render-effects.js';
import { showErrorMessage, showSuccessMessage } from './base-information-events.js';
import { postData } from '../data/upload-photo-api.js';

const uploadInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const uploadSelectImage = document.getElementById('upload-select-image');

const pristine = new Pristine(
  uploadSelectImage,
  {
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
    closeUpload();
  }
}

function startUpload() {
  showForm();
  document.addEventListener('keydown', handleKeydownEvent);
  uploadSelectImage.addEventListener('submit', validateListener);

  setupEffects();
  setupScale();
}

function validateListener(event) {
  event.preventDefault();
  if (pristine.validate()) {
    const onSuccess = () => {
      closeUpload();
      showSuccessMessage();
    };
    const onFailure = () => {
      hideForm();
      showErrorMessage();
    };

    isEnableUploadButton(false);
    postData(new FormData(event.target), onSuccess, onFailure, () => isEnableUploadButton(true));
  }
}

function closeUpload() {
  hideForm();
  document.removeEventListener('keydown', handleKeydownEvent);
  uploadSelectImage.reset();

  dismissEffects();
  dismissScale();
  cancelButton.removeEventListener('click', closeUpload);
  uploadSelectImage.removeEventListener('submit', validateListener);
}

function validateDescription(description, minDescriptionLength, maxDescriptionLength) {
  return description.length >= minDescriptionLength && description.length <= maxDescriptionLength;
}

function setupUploadView(minDescriptionLength, maxDescriptionLength) {

  uploadInput.addEventListener('change', startUpload);
  cancelButton.addEventListener('click', closeUpload);

  const descriptionTitle = `От ${minDescriptionLength} до ${maxDescriptionLength} символов`;

  pristine.addValidator(
    uploadSelectImage.querySelector('.text__description'),
    (text) => {
      const isValid = validateDescription(text, minDescriptionLength, maxDescriptionLength);

      return isValid;
    },
    descriptionTitle
  );
}

function isEnableUploadButton(isEnable) {
  uploadSelectImage.disabled = isEnable;
}

export {
  setupUploadView
};
