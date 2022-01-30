import "./Display.css";

type ButtonProps = {
  updateStep: any;
};

type TitleProps = {
  title: string;
};

type DescriptionProps = {
  description: string;
};

export function Login({ updateStep }: any) {
  const handleStep = () => {
    updateStep(2);
  };
  return (
    <button onClick={handleStep} className="display-login">
      Entrar
    </button>
  );
}

export function Register({ updateStep }: any) {
  const handleStep = () => {
    updateStep(5);
  };
  return (
    <button onClick={handleStep} className="display-register">
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
