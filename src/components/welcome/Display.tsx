import "./Display.css";

type ButtonProps = {
  onClick: any;
};

type TitleProps = {
  title: string;
};

type DescriptionProps = {
  description: string;
};

export function Login(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className="display-login">
      Entrar
    </button>
  );
}

export function Register(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className="display-register">
      Registrar
    </button>
  );
}

export function Title(props: TitleProps) {
  return <h1 className="display-title">{props.title}</h1>;
}

export function Description(props: DescriptionProps) {
  return <p className="display-description">{props.description}</p>;
}
