import React, {useContext} from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <footer className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        Ryan Cabaruvias · IT Applications & Systems Integration
      </p>
    </footer>
  );
}
