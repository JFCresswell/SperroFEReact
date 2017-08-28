import expect from 'expect';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import GameForm from './GameForm';


function setup() {
  let props = {
    game: {}, saving: false, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<GameForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('GameForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();

    expect(output.type).toBe('form');
  });
});
