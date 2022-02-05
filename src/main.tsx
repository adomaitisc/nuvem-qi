import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { AuthProvider } from "./hooks/useAuth";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
  document.getElementById("root")
);
