import React from "react";
import logoSmall from "../../media/images/logo-small.svg";
import logo from "../../media/images/logo.svg";
import "./styles.scss";

export const Header: React.FunctionComponent<{}> = () => {
  return (
    <header className="header">
      {/* <img className="header__logo--small" alt="Meema" src={logoSmall}/> */}
      <img className="header__logo" alt="Meema" src={logo}/>
    </header>
  )
}
