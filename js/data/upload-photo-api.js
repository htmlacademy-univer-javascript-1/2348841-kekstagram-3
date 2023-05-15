const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

function getData (onSuccess, onFailure) {
  fetch(
    `${BASE_URL}/data`,
    {
      method: 'GET',
    }
  ).then((response) => {
    if(response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  }).then((result) => onSuccess(result))
    .catch(() => onFailure());
}

function postData (body, onSuccess, onFailure, onFinaly) {
  fetch(
    BASE_URL,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {

    if (response.ok) {
      onSuccess();
    } else {
      onFailure();
    }
  })
    .catch(() => onFailure())
    .finally(() => onFinaly());
}

export {
  getData,
  postData
};
