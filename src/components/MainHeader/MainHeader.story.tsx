import {storiesOf} from '@storybook/react';
import * as React from 'react';
import MainHeader from '../MainHeader';
import {withKnobs} from "@storybook/addon-knobs";

const stories = storiesOf('MainHeader', module);
stories
  .addDecorator(withKnobs)
  
  .add('default', () => <MainHeader
      title={"Title"}
      subtitle={"Subtitle"}
    />
  )
  .add('different color', () => <MainHeader
    title={"Title"}
    textColor={"red"}
    subtitle={"Subtitle"}
  />);
// .add('with some emoji', () => <B2BButton label={<span role="image">😀 😎 👍 </span>}/>);
