import React from 'react';
import { render } from 'react-dom';
import store from 'Redux';
import { mergeConfig } from 'Actions/config';

import Root from './Root'

const ROOT_ID = 'nc-root';

function bootstrap(opts = {}) {
  const { config } = opts;

  /**
   * Log the version number.
   */
  if (NETLIFY_CMS_VERSION) {
    console.log(`netlify-cms ${NETLIFY_CMS_VERSION}`);
  } else if (NETLIFY_CMS_CORE_VERSION) {
    console.log(`netlify-cms-core ${NETLIFY_CMS_CORE_VERSION}`);
  }

  /**
   * Get DOM element where app will mount.
   */
  function getRoot() {
    /**
     * Return existing root if found.
     */
    const existingRoot = document.getElementById(ROOT_ID);
    if (existingRoot) {
      return existingRoot;
    }

    /**
     * If no existing root, create and return a new root.
     */
    const newRoot = document.createElement('div');
    newRoot.id = ROOT_ID;
    document.body.appendChild(newRoot);
    return newRoot;
  }

  /**
   * Dispatch config to store if received. This config will be merged into
   * config.yml if it exists, and any portion that produces a conflict will be
   * overwritten.
   */
  if (config) {
    store.dispatch(mergeConfig(config));
  }

  /**
   * Render application root.
   */
  render(<Root />, getRoot());
}

export default bootstrap;
