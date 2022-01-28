import { Group } from "./sidebar/Display";
import "./styles/Sidebar.css";

export function Sidebar() {
  const folders = [
    "Contratos",
    "Documentos Auditoriais",
    "Empresas",
    "Mídias",
    "Orçamentos",
    "Propostas",
  ];

  return (
    <main className="sidebar-panel">
      <Group title="Favoritos" folders={folders} />
    </main>
  );
}
