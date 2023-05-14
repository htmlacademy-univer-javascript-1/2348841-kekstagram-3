
function getRangomInt(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError();
  }

  if (min > max) {
    throw new Error('The max value is less than the min');
  }

  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  if (maxInt === minInt) {
    return maxInt;
  }

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

function validateTextLength(text, maxLength) {
  if (typeof text !== 'string' || typeof maxLength !== 'number') {
    throw new TypeError();
  }

  if (maxLength < 0) {
    throw new Error('The maxLength value is less than 0');
  }

  const maxLengthInt = Math.floor(maxLength);

  return text.length <= maxLengthInt;
}

const MAX_PHOTO_COUNT = 25;
const MAX_LIKES_COUNT = 200;
const MAX_COMMENT_COUNT = 200;
const MIN_LIKES_COUNT = 15;
const MIN_COMMENT_COUNT = 0;

function getPhotos(count) {
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
}

getPhotos(MAX_PHOTO_COUNT);
