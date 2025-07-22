import { useNavigate } from "react-router-dom";
import { saveClassroom } from "../api/classroom";
import { ClassroomForm } from "../components/ClassroomForm";

export function CreateClassroom() {
  const navigate = useNavigate();

  const handleSave = async (data: any) => {
    await saveClassroom(data);
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Criar Nova Turma</h1>
      <ClassroomForm onSubmit={handleSave} />
    </div>
  );
}
