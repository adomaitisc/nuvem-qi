import "./Display.css";

type DirProps = {
  folders: any;
  files: any;
};

type FileProps = {
  name: string;
  size: string;
};

type FolderProps = {
  name: string;
};

const NewFile: any = () => {
  return <button className="display-button">Novo Arquivo</button>;
};

const File: any = (props: FileProps) => {
  const name = props.name.substring(0, props.name.indexOf("."));
  const type = props.name
    .split("")
    .reverse()
    .join("")
    .substring(0, props.name.split("").reverse().join("").indexOf("."))
    .split("")
    .reverse()
    .join("")
    .toUpperCase();
  return (
    <div className="display-dir-item">
      <p className="display-dir-label">{name}</p>
      <span className="display-dir-size">{props.size}</span>
      <span className="display-dir-type">Arquivo {type}</span>
    </div>
  );
};

const NewFolder: any = () => {
  return <button className="display-button">Nova Pasta</button>;
};

const Folder: any = (props: FolderProps) => {
  return (
    <div className="display-dir-item">
      <p className="display-dir-label">{props.name}</p>
      <span className="display-dir-size">--</span>
      <span className="display-dir-type">Pasta</span>
    </div>
  );
};

export function Buttons() {
  return (
    <div className="display-buttons">
      <NewFile />
      <NewFolder />
    </div>
  );
}

export function Labels() {
  return (
    <div className="display-labels">
      <p className="display-label-name">Nome</p>
      <p className="display-label-size">Tamanho</p>
      <p className="display-label-type">Tipo</p>
    </div>
  );
}

export function Dir(props: DirProps) {
  const folders = props.folders;
  const files = props.files;

  return (
    <div className="display-dir">
      {folders.map((name: string, index: number) => {
        return <Folder name={name} />;
      })}
      {files.map((file: any, index: number) => {
        return <File name={file.name} size={file.size} />;
      })}
    </div>
  );
}

export function Breadcrumbs() {
  return (
    <div className="display-breadcrumbs">
      <p className="display-path">Núvem Qi / Documentos</p>
    </div>
  );
}
