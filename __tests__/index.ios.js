import 'react-native';
import React from 'react';
import Index from '../index.js';

// Note: test renderer must be required after react-native.
import {create} from 'react-test-renderer';

it('renders correctly', () => {
  create(
    <Index />
  );
});
