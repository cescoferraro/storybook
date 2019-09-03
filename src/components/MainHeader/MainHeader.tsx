import * as React from 'react';
import {Typography} from "@material-ui/core";
import {boolean, color, text} from "@storybook/addon-knobs";
import PropTypes from "prop-types";

const buttonPropTypes = {
  /** textColor label */
  textColor: PropTypes.string,
  /** title label */
  title: PropTypes.string.isRequired,
  /** subtitle label */
  subtitle: PropTypes.string.isRequired,
  /** mobile label */
  mobile: PropTypes.bool
};

/** Another label */
export const B2BMainText = (
  {mobile = false, textColor, title, subtitle}:
    PropTypes.InferProps<hey>
) => {
  const isMobile = boolean("mobile", mobile);
  let innerColor = color("cor", textColor);
  return (
    <React.Fragment>
      <div style={{height: isMobile ? 16 : 40}}/>
      <Typography
        style={{fontSize: 30, textAlign: "center", color: innerColor}}
        variant={isMobile ? "h5" : "h4"}
      >
        {text("Title", title)}
      </Typography>
      {!isMobile &&
      <Typography
          style={{fontSize: 12, textAlign: "center", color: innerColor}}
          variant={isMobile ? "h4" : "h3"}
      >
        {text("Subtitle", subtitle)}
      </Typography>
      }
      <div style={{height: isMobile ? 16 : 40}}/>
    </React.Fragment>
  );
};

B2BMainText.defaultProps = {
  textColor: "#1B3C4D",
  mobile: false
};

B2BMainText.propTypes = buttonPropTypes;

export default B2BMainText;
