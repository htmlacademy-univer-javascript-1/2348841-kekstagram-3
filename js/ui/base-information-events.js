function handleKeydownEvent(event, action) {
  if (event.key === 'Escape') {
    action();
  }
}

function closeMessage(type){
  const message = document.querySelector(`.${type}`);
  document.body.removeChild(message);
  document.removeEventListener('keydown', handleKeydownEvent);
}

function showEventByType(type) {
  const messageTemplate = document.querySelector(`#${type}`).content.cloneNode(true);
  document.body.appendChild(messageTemplate);

  const closeButton = document.querySelector(`.${type}__button`);

  closeButton.addEventListener('click', () => closeMessage(type));
  document.addEventListener('keydown', (event) => handleKeydownEvent(event, closeMessage(type)));
}

function showSuccessMessage () {
  showEventByType('success');
}

function showErrorMessage () {
  showEventByType('error');
}

function showLoadingError() {
  showEventByType('loading--error');
}

export {
  showSuccessMessage,
  showErrorMessage,
  showLoadingError
};
