import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from 'Routing/history';
import store from 'Redux/index';
import { getPhrases } from 'Constants/defaultPhrases';
import { I18n } from 'react-polyglot';
import { ErrorBoundary } from 'UI';
import App from 'App/App';
import 'EditorWidgets';
import 'src/mediaLibrary';
import 'what-input';

/**
 * Create connected root component.
 */
const Root = (props) => (
  <I18n locale={'en'} messages={getPhrases()}>
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route render={(routeProps) => <App {...props} {...routeProps} />} />
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  </I18n>
);

export default Root;
