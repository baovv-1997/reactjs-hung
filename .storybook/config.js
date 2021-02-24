import { configure, addDecorator } from '@storybook/react';

// Using style in storybook
import '../src/App.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
