// DashboardPage.tsx
import { useTaskContext } from "../context/TaskContext";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Row, Col } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const { tasks } = useTaskContext();
  const { user } = useAuth0();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user?.name}!</h2>
        <Button variant="primary" onClick={() => navigate('/create-task')}>
          + Create Task
        </Button>
      </div>
      {tasks.length === 0 ? (
        <div className="text-center mt-5">
          <h4>No tasks yet!</h4>
          <p>Click "Create Task" to get started.</p>
        </div>
      ) : (
        <Row>
          {tasks.map((task) => (
            <Col key={task.id} md={4}>
              <TaskCard task={task} />
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  );
};

export default DashboardPage;