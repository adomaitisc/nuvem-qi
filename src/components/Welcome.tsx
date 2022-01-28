import { useState } from "react";
import {
  Title,
  Description,
  Login as BtnLogin,
  Register as BtnRegister,
} from "./welcome/Display";
import { Login } from "./Login";
import "./styles/Welcome.css";

export function Welcome() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <main className="welcome-area">
      {login ? (
        <Login />
      ) : register ? (
        <Login />
      ) : (
        <>
          <Title title="Bem vindo à Núvem Qi." />
          <Description description="Pastas, Arquivos, e Documentos Qi em uma plataforma Única e Inteligente." />
          <div className="welcome-buttons">
            <BtnLogin
              onClick={() => {
                setLogin(true);
              }}
            />
            <p className="welcome-or">ou</p>
            <BtnRegister
              onClick={() => {
                setRegister(true);
              }}
            />
          </div>
        </>
      )}
    </main>
  );
}
