import cms from '@igloo-be/netlify-cms-core';
import uploadcare from '@igloo-be/netlify-cms-media-library-uploadcare';

const { registerMediaLibrary } = cms;

registerMediaLibrary(uploadcare);
