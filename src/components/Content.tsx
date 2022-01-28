import { Buttons, Labels, Dir, Breadcrumbs } from "./content/Display";

import "./styles/Content.css";

export function Content() {
  const files = [
    { name: "visita21.08.pdf", size: "2.4 MB" },
    { name: "orcamentoPejoa.docx", size: "1.6 MB" },
    { name: "mensagem.txt", size: "300 KB" },
    { name: "IMG23003.png", size: "23.1 MB" },
  ];

  const folders = [
    "Agenda de Visitas",
    "Apoio Qualidade",
    "Contratos",
    "Documentos Auditoriais",
    "Empresas",
    "Mídias",
    "Orçamentos",
    "Propostas",
    "Sistemas Empresas",
  ];

  return (
    <main className="content-panel">
      <Buttons />
      <Labels />
      <Dir folders={folders} files={files} />
      <Breadcrumbs />
    </main>
  );
}
