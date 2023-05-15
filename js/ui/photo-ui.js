const picturesFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');
const currentPicture = document.querySelector('#picture').content.querySelector('.picture');

function showPhotos(photos){

  photos.forEach(({url, likes, comments})=>{

    const currentPictureClone = currentPicture.cloneNode(true);

    currentPictureClone.querySelector('.picture__img').src = url;
    currentPictureClone.querySelector('.picture__likes').textContent = likes;
    currentPictureClone.querySelector('.picture__comments').textContent = comments;

    picturesFragment.appendChild(currentPictureClone);
  });

  pictures.appendChild(picturesFragment);
  //Задание 7 часть 2
}

export {
  showPhotos
};
