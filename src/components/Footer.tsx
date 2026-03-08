import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CyfrinIcon from "./CyfrinIcon";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/18121A05L2"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/lakshmi-reddy-1a355a1a1/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://profiles.cyfrin.io/u/lucky2892000"
          target="_blank"
          rel="noreferrer"
        >
          <CyfrinIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{" "}
        <a
          href="https://www.linkedin.com/in/lakshmi-reddy-1a355a1a1/"
          target="_blank"
          rel="noreferrer"
        >
          Lakshi Sanikommu
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
