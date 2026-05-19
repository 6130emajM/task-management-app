// NavBar.tsx
import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Nav>
        <Nav.Link href="/">Home |</Nav.Link>
        {isAuthenticated && (
          <>
            <Nav.Link href="/dashboard"> Dashboard |</Nav.Link>
            <Nav.Link href="/create-task"> Create Task</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;