// TaskCard.tsx
import { Card, Badge, Button } from "react-bootstrap";
import { Task } from "../types/Task";
import { useTaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

type TaskCardProps = {
  task: Task;
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { deleteTask } = useTaskContext();
  const navigate = useNavigate();

  const getBadgeColor = () => {
    switch (task.status) {
      case 'todo': return 'secondary';
      case 'in-progress': return 'warning';
      case 'done': return 'success';
    }
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Badge bg={getBadgeColor()}>{task.status}</Badge>
        <div className="mt-3 d-flex gap-2">
          <Button
            variant="info"
            size="sm"
            onClick={() => navigate(`/task/${task.id}`)}
          >
            View
          </Button>
          <Button
            variant="warning"
            size="sm"
            onClick={() => navigate(`/edit-task/${task.id}`)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;