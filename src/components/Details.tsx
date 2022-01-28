import "./styles/Details.css";
import icon from "../images/pdf.png";

export function Details() {
  return (
    <main className="details-panel">
      <p className="details-parent">Documentos</p>
      <img className="details-icon" src={icon} alt="Arquivo PDF" width={200} />
      <div className="details-info">
        <p className="details-label">visita21.pdf</p>
        <p className="details-data">Arquivo PDF - 1.1 MB</p>
        <p className="details-data">Criado em: 28/01/2022 as 01:07</p>
      </div>
    </main>
  );
}
