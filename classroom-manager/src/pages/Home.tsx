import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteClassroom, fetchClassrooms } from "../api/classroom";
import { Classroom } from "../types";

export function Home() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClassrooms().then(setClassrooms);
  }, []);

  const handleDelete = async (id: number) => {
    await deleteClassroom(id);
    setClassrooms((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {classrooms.map((classroom) => (
        <div key={classroom.id} className="border p-4 rounded shadow">
          <img src={classroom.image} alt={classroom.name} className="h-40 object-cover rounded" />
          <h2 className="text-xl font-bold">{classroom.name}</h2>
          <p>{classroom.text}</p>
          <div className="mt-2 flex justify-between">
            <button
              onClick={() => navigate(`/edit/${classroom.id}`)}
              className="text-blue-500"
            >
              Editar
            </button>
            <button
              onClick={() => handleDelete(classroom.id)}
              className="text-red-500"
            >
              Deletar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
