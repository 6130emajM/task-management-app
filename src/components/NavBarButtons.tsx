// NavBarButtons.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const NavBarButtons: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div className="p-2">
      {!isAuthenticated && (
        <Button variant="primary" onClick={handleLogin}>
          Log In
        </Button>
      )}
      {isAuthenticated && (
        <Button variant="danger" onClick={handleLogout}>
          Log Out
        </Button>
      )}
    </div>
  );
};

export default NavBarButtons;