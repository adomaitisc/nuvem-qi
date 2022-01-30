import { Button, Field, Forgot } from "./auth/Display";
import "./Auth.css";

type AuthProps = {
  step: number;
  updateStep: any;
  title: string;
  value: string;
  onChange: any;
  handleSubmit?: any;
};

export function FormName(props: AuthProps) {
  const step = props.step;

  const nextStep = () => {
    props.updateStep(step + 1);
  };

  const prevStep = () => {
    props.updateStep(1);
  };

  const isInputElement = (
    elem: HTMLElement | null
  ): elem is HTMLInputElement => {
    if (!elem) {
      return false;
    }
    return elem.tagName === "INPUT";
  };

  const handleNext = () => {
    const input = document.getElementById("input");

    if (isInputElement(input)) {
      if (input.checkValidity()) {
        nextStep();
      } else {
        input.reportValidity();
      }
    }
  };

  return (
    <>
      <h1 className="auth-title">
        <span onClick={prevStep} className="auth-return">
          ‹
        </span>
        {props.title}
      </h1>
      <Field
        label="Nome"
        info="* Seu nome precisa de 4 caracteres ou mais."
        type="name"
        onChange={props.onChange}
        placeholder="Pedro Henrique"
        value={props.value}
        pattern={".{4,}"}
      />
      <div className="auth-buttons">
        <Button label="Proximo" onClick={handleNext} />
      </div>
    </>
  );
}

export function FormEmail(props: AuthProps) {
  const step = props.step;
  const nextStep = () => {
    props.updateStep(step + 1);
  };

  const prevStep = () => {
    props.updateStep(step - 1);
  };

  const isInputElement = (
    elem: HTMLElement | null
  ): elem is HTMLInputElement => {
    if (!elem) {
      return false;
    }
    return elem.tagName === "INPUT";
  };

  const handleNext = () => {
    const input = document.getElementById("input");

    if (isInputElement(input)) {
      if (input.checkValidity()) {
        nextStep();
      } else {
        input.reportValidity();
      }
    }
  };

  return (
    <>
      <h1 className="auth-title">
        <span onClick={prevStep} className="auth-return">
          ‹
        </span>
        {props.title}
      </h1>
      <Field
        label="Email"
        type="email"
        onChange={props.onChange}
        placeholder="exemplo@qi.com"
        value={props.value}
      />
      <div className="auth-buttons">
        <Button label="Proximo" onClick={handleNext} />
      </div>
    </>
  );
}

export function FormPassword(props: AuthProps) {
  const step = props.step;

  const nextStep = () => {
    props.updateStep(step + 1);
  };

  const prevStep = () => {
    props.updateStep(step - 1);
  };

  const submit = () => {
    props.handleSubmit(step);
  };

  return (
    <>
      <h1 className="auth-title">
        <span onClick={prevStep} className="auth-return">
          ‹
        </span>
        {props.title}
      </h1>
      <Field
        label="Senha"
        info="* Sua senha deve ter 6 caracteres ou mais."
        type="password"
        placeholder="Senha"
        onChange={props.onChange}
        value={props.value}
        pattern={".{6,}"}
      />
      <div className="auth-buttons">
        <Button label={props.title} onClick={submit} />
        {step == 3 && <Forgot label="Esqueceu a Senha?" onClick={nextStep} />}
      </div>
    </>
  );
}

export function FormForgotPassword(props: AuthProps) {
  const step = props.step;

  const prevStep = () => {
    props.updateStep(step - 1);
  };

  const submit = () => {
    props.handleSubmit(step);
  };

  return (
    <>
      <h1 className="auth-title">
        <span onClick={prevStep} className="auth-return">
          ‹
        </span>
        {props.title}
      </h1>
      <Field
        label="Email"
        type="email"
        placeholder="exemplo@qi.com"
        onChange={props.onChange}
        value={props.value}
      />
      <div className="auth-buttons">
        <Button label="Enviar email de Recuperação" onClick={submit} />
      </div>
    </>
  );
}
