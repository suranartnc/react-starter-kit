import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import TestUtils from 'react-addons-test-utils';

import App from '../src/App';

describe('Test App Component', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<App />);

	const output = renderer.getRenderOutput();

	it('root element must be div', () => {
		expect(output.type).to.equal('div');
	});

	it('children should render properly', () => {
		expect(output.props.children).to.equal('React Starter Kit');
	});
});