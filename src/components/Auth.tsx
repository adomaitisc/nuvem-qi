import { useRef } from "react";
import { Button, Field } from "./auth/Display";
import "./styles/Auth.css";

type AuthProps = {
  onClick: any;
  onSubmit: any;
};

export function Login(props: AuthProps) {
  let emailRef = useRef<HTMLInputElement>(null);
  let passRef = useRef<HTMLInputElement>(null);
  const back = "‹";
  return (
    <form className="auth-form">
      <h1 className="auth-title">
        <span onClick={props.onClick} className="auth-return">
          {back}
        </span>
        Entrar
      </h1>
      <Field
        label="Email"
        type="email"
        placeholder="exemplo@qi.com"
        ref={emailRef}
      />
      <Field label="Senha" type="password" placeholder="123456" ref={passRef} />
      <Button label="Entrar" onClick={props.onSubmit} />
    </form>
  );
}

export function Register(props: AuthProps) {
  let emailRef = useRef<HTMLInputElement>(null);
  let passRef = useRef<HTMLInputElement>(null);
  let nameRef = useRef<HTMLInputElement>(null);
  const back = "‹";
  return (
    <form className="auth-form">
      <h1 className="auth-title">
        <span onClick={props.onClick} className="auth-return">
          {back}
        </span>
        Registrar
      </h1>
      <Field label="Nome" type="name" placeholder="João Silva" ref={nameRef} />
      <Field
        label="Email"
        type="email"
        placeholder="exemplo@qi.com"
        ref={emailRef}
      />
      <Field label="Senha" type="password" placeholder="123456" ref={passRef} />
      <Button label="Registrar" onClick={props.onSubmit} />
    </form>
  );
}
