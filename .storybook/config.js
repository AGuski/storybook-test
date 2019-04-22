import { configure, addDecorator } from '@storybook/angular';
import { configureCompodoc, withCompodoc } from 'storybook-addon-compodoc';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


configureCompodoc({
  compodocUrl:'http://localhost:8080'
});
addDecorator(withCompodoc());
