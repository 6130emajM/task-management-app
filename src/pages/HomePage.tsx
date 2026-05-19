// HomePage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from "react-bootstrap";
import PageLayout from "../components/PageLayout";

const HomePage: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <PageLayout>
      <Container className="text-center mt-5">
        <h1>Task Management App</h1>
        <p className="lead">
          Manage your tasks efficiently and stay organized.
        </p>
        {!isAuthenticated && (
          <Button variant="primary" size="lg" onClick={handleLogin}>
            Get Started
          </Button>
        )}
        {isAuthenticated && (
          <Button variant="success" size="lg" href="/dashboard">
            Go to Dashboard
          </Button>
        )}
      </Container>
    </PageLayout>
  );
};

export default HomePage;