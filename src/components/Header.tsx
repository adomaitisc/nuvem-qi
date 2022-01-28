import { Clock } from "./header/Display";
import "./styles/Header.css";

import logo from "../images/logo.svg";

export function Header() {
  return (
    <main className="header-panel">
      <img src={logo} width={32} className="header-logo" />
      <p className="header-user">Cauã Adomaitis</p>
    </main>
  );
}
