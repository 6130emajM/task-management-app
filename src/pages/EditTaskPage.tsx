// EditTaskPage.tsx
import { useNavigate, useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { Task } from "../types/Task";
import PageLayout from "../components/PageLayout";
import TaskForm from "../components/TaskForm";

const EditTaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTaskById, updateTask } = useTaskContext();
  const navigate = useNavigate();

  const task = getTaskById(id || '');

  if (!task) {
    return (
      <PageLayout>
        <h2>Task not found!</h2>
      </PageLayout>
    );
  }

  const handleSubmit = (updatedTask: Task) => {
    updateTask(updatedTask);
    navigate('/dashboard');
  };

  return (
    <PageLayout>
      <h2 className="mb-4">Edit Task</h2>
      <TaskForm initialData={task} onSubmit={handleSubmit} />
    </PageLayout>
  );
};

export default EditTaskPage;