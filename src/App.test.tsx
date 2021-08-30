import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    mount(<App />);
    // use standard Cypress commands
    cy.contains('Learn React').should('be.visible');
  });
});