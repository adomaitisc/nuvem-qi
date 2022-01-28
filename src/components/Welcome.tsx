import { useState } from "react";
import {
  Title,
  Description,
  Login as BtnLogin,
  Register as BtnRegister,
} from "./welcome/Display";
import { Login, Register } from "./Auth";
import "./styles/Welcome.css";

export function Welcome() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleLogin = () => {
    window.alert("Login");
  };
  const handleRegister = () => {
    window.alert("Register");
  };

  return (
    <main className="welcome-area">
      {login ? (
        <Login
          onSubmit={() => {
            handleLogin();
          }}
          onClick={() => {
            setLogin(false);
          }}
        />
      ) : register ? (
        <Register
          onSubmit={() => {
            handleRegister();
          }}
          onClick={() => {
            setRegister(false);
          }}
        />
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
