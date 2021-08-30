Run this for add cypress for unit testing

---yarn add cypress @cypress/react @cypress/webpack-dev-server --dev

---Update cypress.json

{
  "component": {
    "testFiles": "**/*.test.{js,ts,jsx,tsx}",
    "componentFolder": "src"
  }
}

---By default plugins are loaded from cypress/plugins/index.js. Create that file and add:

const injectDevServer = require("@cypress/react/plugins/react-scripts")

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}

---Let's migrate src/App.test.tsx, which comes with the Create React App template, to use Cypress

import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});

---To run cypress

yarn cypress open-ct
