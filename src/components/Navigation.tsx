import { css, jsx, useTheme } from "@emotion/react";
import { ReactElement } from "react";
import { Header } from "src/pages/Root/components/Header.tsx";
import { StyleThemeProvider } from "src/contexts/StyleThemeProvider.tsx";

export function Navigation(): ReactElement {
  const theme: any = useTheme();
  const navCss = css`
    background-color: ${theme.colors.navbar.backgroundColor} !important;
  `;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
      css={navCss}
    >
      <a className="navbar-brand" href="#">
        <img
          src="images/maze.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <div className="navbar-nav mr-auto">
          <a className="nav-item nav-link" href="#about">
            About <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#hard-skills">
            Hard skills
          </a>
          <a className="nav-item nav-link" href="#soft-skills">
            Soft skills
          </a>
          <a className="nav-item nav-link" href="#education">
            Education
          </a>
          <a className="nav-item nav-link" href="#experience">
            Work experience
          </a>
        </div>
      </div>
    </nav>
  );
}
