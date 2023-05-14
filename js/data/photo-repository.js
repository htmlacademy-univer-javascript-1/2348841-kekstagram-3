import { getRangomInt } from '../utils/number-utils.js';

const MAX_PHOTO_COUNT = 25;
const MAX_LIKES_COUNT = 200;
const MAX_COMMENTS_COUNT = 200;
const MIN_LIKES_COUNT = 15;
const MIN_COMMENTS_COUNT = 0;

const getPhotos = function (count) {
  if (typeof count !== 'number') {
    throw new TypeError();
  }

  if (count <= 0) {
    throw new RangeError('Count must be more than zero');
  }

  const correctCount = Math.min(count, MAX_PHOTO_COUNT);
  const photos = new Array(correctCount);

  for (let i = 0; i < photos.length; i++) {
    const photoId = i + 1;

    photos[i] = (
      {
        id: photoId,
        url: `photos/${photoId}.png`,
        description: `Фотография №/${photoId}`,
        likes: getRangomInt(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
        comments: getRangomInt(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)
      }
    );
  }

  return photos;
};

export {
  getPhotos,
  MAX_PHOTO_COUNT
};
