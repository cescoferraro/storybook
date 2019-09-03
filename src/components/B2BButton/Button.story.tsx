import {storiesOf} from '@storybook/react';
import * as React from 'react';
import B2BButton from './B2BButton';


storiesOf('B2BButton', module)
  .add('primary', () =>
    <B2BButton
      label={"CLICK ME"}
    />
  )
  .add('secondary', () =>
    <B2BButton
      type={"secondary"}
      label={"CLICK ME"}
      onClick={()=>{
        console.log(2378324)
      }}
    />
  );
