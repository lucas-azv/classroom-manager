import { Classroom } from "../types";

interface Props {
classroom: Classroom;
onEdit?: (id: number) => void;
onDelete?: (id: number) => void;
}

export const ClassroomCard = ({ classroom, onEdit, onDelete }: Props) => {
return (
<div className="border rounded shadow p-4 bg-white hover:shadow-lg transition">
<img src={classroom.image} alt={classroom.name} className="h-40 w-full object-cover rounded mb-2" />
<h2 className="text-xl font-semibold">{classroom.name}</h2>
<p className="text-sm text-gray-600">{classroom.text}</p>

php-template
Copiar
Editar
  <div className="mt-4 flex justify-between text-sm">
    {onEdit && (
      <button
        onClick={() => onEdit(classroom.id)}
        className="text-blue-600 hover:underline"
      >
        Editar
      </button>
    )}
    {onDelete && (
      <button
        onClick={() => onDelete(classroom.id)}
        className="text-red-600 hover:underline"
      >
        Deletar
      </button>
    )}
  </div>
</div>
);
};