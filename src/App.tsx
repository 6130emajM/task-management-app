// App.tsx
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { TaskProvider } from "./context/TaskContext";
import AuthenticationGuard from "./components/AuthenticationGuard";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import CallbackPage from "./pages/CallbackPage";

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={<AuthenticationGuard component={DashboardPage} />}
        />
        <Route
          path="/task/:id"
          element={<AuthenticationGuard component={TaskDetailPage} />}
        />
        <Route
          path="/create-task"
          element={<AuthenticationGuard component={CreateTaskPage} />}
        />
        <Route
          path="/edit-task/:id"
          element={<AuthenticationGuard component={EditTaskPage} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </TaskProvider>
  );
};

export default App;