import { getPhotos, MAX_PHOTO_COUNT } from './data/photo-repository.js';

const picturesFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');
const currentPicture = document.querySelector('#picture').content;

const photos = getPhotos(MAX_PHOTO_COUNT);

photos.forEach(({url, likes, comments})=>{

  const currentPictureClone = currentPicture.cloneNode(true);

  currentPictureClone.querySelector('.picture__img').src = url;
  currentPictureClone.querySelector('.picture__likes').textContent=likes;
  currentPictureClone.querySelector('.picture__comments').textContent=comments.length;

  picturesFragment.appendChild(currentPictureClone);
});

pictures.appendChild(picturesFragment);
