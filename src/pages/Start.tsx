import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";
import "./Start.css";

export function Start() {
  return (
    <main className="start-main">
      <Header title="Núvem Qi" />
      <Welcome />
    </main>
  );
}
