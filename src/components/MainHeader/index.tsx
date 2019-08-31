import * as React from 'react';
import {Typography} from "@material-ui/core";
import {boolean, color, text} from "@storybook/addon-knobs";
import PropTypes from "prop-types";

let s = "#1B3C4D";
/** Another label */
const B2BMainText = (
  {mobile = false, textColor = s, title = "Titutle Referencia", subtitle = "Subtitule REferencia"}:
    { mobile?: boolean, textColor?: string, title: string, subtitle: string }
) => {
  const isMobile = boolean("mobile", mobile)
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
      <Typography style={{fontSize: 12, textAlign: "center", color: innerColor}} variant="subtitle2">
        {text("Subtitle", subtitle)}
      </Typography>
      }
      <div style={{height: isMobile ? 16 : 40}}/>
    </React.Fragment>
  );
};

B2BMainText.defaultProps = {
  textColor: s,
  mobile: false
};

B2BMainText.propTypes = {
  /** textColor label */
  textColor: {type: PropTypes.string, description: "sdkjfn"},
  /** title label */
  title: PropTypes.string.isRequired,
  /** subtitle label */
  subtitle: PropTypes.string.isRequired,
  /** mobile label */
  mobile: PropTypes.bool
};

export default B2BMainText;
