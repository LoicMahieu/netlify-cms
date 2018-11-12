import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from '@igloo-be/netlify-cms-ui-default';

const TextPreview = ({ value }) => <WidgetPreviewContainer>{value}</WidgetPreviewContainer>;

TextPreview.propTypes = {
  value: PropTypes.node,
};

export default TextPreview;
