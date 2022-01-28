import "./styles/Header.css";
import logo from "../images/logo.svg";

type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {
  return (
    <main className="header-panel">
      <img src={logo} width={32} className="header-logo" />
      <p className="header-title">{props.title}</p>
    </main>
  );
}
