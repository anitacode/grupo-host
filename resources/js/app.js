require('./bootstrap'); // eslint-disable-line no-undef
require('./apps/App'); // eslint-disable-line no-undef

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './apps/App'

const root = createRoot(document.getElementById('root'));
  
root.render(<App />);