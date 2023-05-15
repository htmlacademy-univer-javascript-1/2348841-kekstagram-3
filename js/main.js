import './ui/photo-ui.js';
import { setupUploadView } from './ui/upload-photo-ui.js';

const MAX_DESCRIPTION_LENGTH = 20;
const MIN_DESCRIPTION_LENGTH = 140;

setupUploadView(MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH);
