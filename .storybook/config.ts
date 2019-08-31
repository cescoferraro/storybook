import {addDecorator, configure} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withInfo({
  header: false,
  inline: true,
  source: true
}));

configure(loadStories, module);
