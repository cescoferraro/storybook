import * as React from 'react';
import {Button, createStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {boolean, select, text} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

let regular = "primary";
let defaultProps = {
  submit: false,
  style: {},
  onClick: () => {},
  type: regular,
  disabled: false
};

const B2BButtonTypes: any = [regular, "secondary"];

let propTypes = {
  submit: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(B2BButtonTypes),
  onClick: PropTypes.func
};

const ya = (type:any) => makeStyles(() => {
  let background = "#0098A6";
  let sbackground = "white";
  let hoverbackground = "#006a74";
  let shoverbackground = "#b2b2b2";
  let textColor = "white";
  let stextColor = background;
  return createStyles({
    root: {
      background: type === regular ? background : sbackground,
      color: type === regular ? textColor : stextColor,
      "&:hover": {
        color: type === regular ? textColor : stextColor,
        background: type === regular ? hoverbackground : shoverbackground
      }
    },
    containedSecondary: {
      boxShadow: "none",
    }
  });
});

export const B2BButton = (
  {type, disabled, style, submit, label, onClick}:
    any
    // PropTypes.InferProps<typeof propTypes>
) => {
  const ktype = select("Type", {primary: "primary", secondary: "secondary"}, type)
  const classes: any = ya(ktype)();
  return (
    <Button
      classes={{
        root: classes.root,
        containedSecondary: classes.containedSecondary,
      }}
      href={""}
      disabled={boolean("disabled", disabled)}
      type={submit ? "submit" : "button"}
      style={{minWidth: 300, margin: 0, ...style}}
      color={ktype}
      variant={"contained"}
      onClick={action("onClick", onClick)}
    >
      {text("Label", label)}
    </Button>
  );
};

B2BButton.propTypes = propTypes;
B2BButton.defaultProps = defaultProps;

export default B2BButton;
