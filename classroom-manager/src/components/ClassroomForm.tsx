import { useState } from "react";
import { Classroom } from "../types";

interface Props {
  onSubmit: (data: Classroom) => void;
  defaultValues?: Classroom;
}

export function ClassroomForm({ onSubmit, defaultValues }: Props) {
  const [form, setForm] = useState<Classroom>(
    defaultValues || {
      id: 0,
      name: "",
      code: "",
      image: "",
      text: "",
      students: [],
      subject: [],
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="flex flex-col gap-3"
    >
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Nome da Turma"
        className="border p-2 rounded"
      />
      <input
        value={form.code}
        onChange={(e) => setForm({ ...form, code: e.target.value })}
        placeholder="Código"
        className="border p-2 rounded"
      />
      <input
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        placeholder="URL da imagem"
        className="border p-2 rounded"
      />
      <textarea
        value={form.text}
        onChange={(e) => setForm({ ...form, text: e.target.value })}
        placeholder="Descrição"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Salvar
      </button>
    </form>
  );
}
