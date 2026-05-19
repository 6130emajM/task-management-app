// CreateTaskPage.tsx
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { Task } from "../types/Task";
import PageLayout from "../components/PageLayout";
import TaskForm from "../components/TaskForm";

const CreateTaskPage: React.FC = () => {
  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  const handleSubmit = (task: Task) => {
    addTask(task);
    navigate('/dashboard');
  };

  return (
    <PageLayout>
      <h2 className="mb-4">Create New Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </PageLayout>
  );
};

export default CreateTaskPage;