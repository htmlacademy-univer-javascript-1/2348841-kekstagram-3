import { getData } from './data/upload-photo-api.js';
import { showLoadingError } from './ui/base-information-events.js';
import './ui/photo-ui.js';
import { showPhotos } from './ui/photo-ui.js';
import { setupUploadView } from './ui/upload-photo-ui.js';

const MAX_DESCRIPTION_LENGTH = 20;
const MIN_DESCRIPTION_LENGTH = 140;

getData(showPhotos, showLoadingError);
setupUploadView(MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH);
