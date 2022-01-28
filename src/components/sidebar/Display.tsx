import "./Display.css";

type GroupProps = {
  title: string;
  folders: any;
};

export function Group(props: GroupProps) {
  const folders = props.folders;
  return (
    <div>
      <p className="display-heading">{props.title}</p>
      <div className="display-folders">
        {folders.map((name: string) => {
          return <p className="display-folder">{name}</p>;
        })}
      </div>
    </div>
  );
}
