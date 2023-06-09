/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";
import { ThemeProvider } from "@emotion/react";
import Color from "color";

export function StyleThemeProvider(props: InferProps<typeof StyleThemeProvider.propTypes>): ReactElement {
  const colorSystem = {
    primary: {
      main: "#38567b",
      dark: "#022d4f",
      light: "#6682aa",
    },
  };

  const sizes = {
    tableSpacerWidth: "20px",
    tableSpacerWidthSmall: "10px",
    tableSpacerWidthLittle: "5px",
  };

  const colors = {
    link: {
      default: colorSystem.primary.light,
      hover: colorSystem.primary.main,
    },
    navbar: {
      backgroundColor: Color(colorSystem.primary.dark).darken(0.3).string(),
    },
    sections: {
      hardSkills: {
        spacerBackground: "antiquewhite",
      },
      softSkills: {
        spacerBackground: "#ffe599",
      },
      education: {
        spacerBackground: "lightgrey",
      },
      experience: {
        spacerBackground: "#70bd7c",
      },
    },
  };

  const theme: any = {
    colorSystem,
    sizes,
    colors,
  };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

StyleThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
