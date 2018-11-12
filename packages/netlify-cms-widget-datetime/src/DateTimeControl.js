import React from 'react';
import { DateControl } from '@igloo-be/netlify-cms-widget-date';

export default class DateTimeControl extends React.Component {
  render() {
    return <DateControl {...this.props} includeTime />;
  }
}
