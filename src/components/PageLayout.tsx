// PageLayout.tsx
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import NavBarButtons from "./NavBarButtons";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-dark">
        <NavBar />
        <NavBarButtons />
      </div>
      <Container className="mt-4">
        {children}
      </Container>
    </div>
  );
};

export default PageLayout;