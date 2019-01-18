import React from 'react';
import renderer from 'react-test-renderer';
import AboutContainer from '../../../containers/aboutContainer/AboutContainer';

describe('About container', () => {
  it('AboutContainer renders correctly', () => {
    renderer.create(
      <AboutContainer />
    );
  });
});