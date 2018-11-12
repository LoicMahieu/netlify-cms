import cms from '@igloo-be/netlify-cms-core/src';
import uploadcare from '@igloo-be/netlify-cms-media-library-uploadcare/src';

const { registerMediaLibrary } = cms;

registerMediaLibrary(uploadcare);
