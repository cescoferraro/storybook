import * as React from 'react';
import {Button} from "@material-ui/core";
import PropTypes from 'prop-types';
import {text} from '@storybook/addon-knobs';
import {action} from "@storybook/addon-actions";

export interface IButtonProps {
  onClick?: (e: any) => void;
  label?: string | any
}

const B2BButton = (
  {
    label = "LABEL",
    onClick
  }
    : IButtonProps
) => (
  <Button
    variant="contained"
    onClick={action( "aaaclick")}
    type="button"
  >
    {text("Label", label)}
  </Button>
);

B2BButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
  
};

export default B2BButton;
