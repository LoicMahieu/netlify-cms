import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from '@igloo-be/netlify-cms-ui-default';

const StringPreview = ({ value }) => <WidgetPreviewContainer>{value}</WidgetPreviewContainer>;

StringPreview.propTypes = {
  value: PropTypes.node,
};

export default StringPreview;
