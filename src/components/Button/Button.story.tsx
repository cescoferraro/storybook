import {storiesOf} from '@storybook/react';
import * as React from 'react';
import B2BButton from '../Button';
import {withKnobs} from '@storybook/addon-knobs';

const stories = storiesOf('B2BButton', module);
stories.addDecorator(withKnobs);


stories.add('with text', () => <B2BButton/>);
// .add('with some emoji', () => <B2BButton label={<span role="image">😀 😎 👍 </span>}/>);
