import { Content } from "../components/Content";
import { Details } from "../components/Details";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import "./Dashboard.css";

import { useAuth } from "../hooks/useAuth";

export function Dashboard() {
  const { user } = useAuth();
  return (
    <main className="dashboard-main">
      <Header title={user.email} />
      <Sidebar />
      <Content />
      <Details />
    </main>
  );
}
