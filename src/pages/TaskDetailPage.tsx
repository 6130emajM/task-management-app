// TaskDetailPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { Badge, Button } from "react-bootstrap";
import PageLayout from "../components/PageLayout";

const TaskDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTaskById, deleteTask } = useTaskContext();
  const navigate = useNavigate();

  const task = getTaskById(id || '');

  if (!task) {
    return (
      <PageLayout>
        <h2>Task not found!</h2>
        <Button onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </PageLayout>
    );
  }

  const getBadgeColor = () => {
    switch (task.status) {
      case 'todo': return 'secondary';
      case 'in-progress': return 'warning';
      case 'done': return 'success';
    }
  };

  const handleDelete = () => {
    deleteTask(task.id);
    navigate('/dashboard');
  };

  return (
    <PageLayout>
      <h2>{task.title}</h2>
      <Badge bg={getBadgeColor()} className="mb-3">{task.status}</Badge>
      <p>{task.description}</p>
      <p><small>Created: {new Date(task.createdAt).toLocaleDateString()}</small></p>
      <p><small>Updated: {new Date(task.updatedAt).toLocaleDateString()}</small></p>
      <div className="d-flex gap-2">
        <Button
          variant="warning"
          onClick={() => navigate(`/edit-task/${task.id}`)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          Back
        </Button>
      </div>
    </PageLayout>
  );
};

export default TaskDetailPage;