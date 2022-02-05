import { SetStateAction, useState } from "react";
import { Title, Description, BtnLogin, BtnRegister } from "./welcome/Display";
import {
  FormName,
  FormEmail,
  FormPassword,
  FormForgotPassword,
} from "./welcome/Auth";
// import { useAuth } from "../hooks/useAuth";
import "./styles/Welcome.css";

export function Welcome() {
  const [step, setStep] = useState(1);
  // const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e: any) => {
    setPass(e.target.value);
  };

  const handleStep = (step: SetStateAction<number>) => {
    setStep(step);
  };

  return (
    <form className="welcome-area">
      {step == 1 ? (
        <>
          <Title title="Bem vindo à Núvem Qi." />
          <Description description="Pastas, Arquivos, e Documentos Qi em uma plataforma Única e Inteligente." />
          <div className="welcome-buttons">
            <BtnLogin updateStep={handleStep} />
            <p className="welcome-or">ou</p>
            <BtnRegister updateStep={handleStep} />
          </div>
        </>
      ) : step == 2 ? (
        <FormEmail
          step={step}
          updateStep={handleStep}
          title="Entrar"
          value={email}
          onChange={handleEmailChange}
        />
      ) : step == 3 ? (
        <FormPassword
          step={step}
          updateStep={handleStep}
          title="Entrar"
          value={pass}
          onChange={handlePassChange}
          // handleSubmit={handleSubmit}
        />
      ) : step == 4 ? (
        <FormForgotPassword
          step={step}
          updateStep={handleStep}
          title="Recuperar Senha"
          value={email}
          onChange={handleEmailChange}
          // handleSubmit={handleSubmit}
        />
      ) : step == 5 ? (
        <FormName
          step={step}
          updateStep={handleStep}
          title="Criar Conta"
          value={name}
          onChange={handleNameChange}
        />
      ) : step == 6 ? (
        <FormEmail
          step={step}
          updateStep={handleStep}
          title="Criar Conta"
          value={email}
          onChange={handleEmailChange}
        />
      ) : (
        <FormPassword
          step={step}
          updateStep={handleStep}
          title="Criar Conta"
          value={pass}
          onChange={handlePassChange}
          // handleSubmit={handleSubmit}
        />
      )}
    </form>
  );
}
