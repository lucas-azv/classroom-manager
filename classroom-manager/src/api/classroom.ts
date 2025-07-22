import axios from "axios";
import { Classroom, Student } from "../types";

const api = axios.create({ baseURL: "http://localhost:8080" });

export const fetchClassrooms = async (): Promise<Classroom[]> => {
  const res = await api.get("/data");
  return res.data;
};

export const saveClassroom = async (classroom: Classroom) => {
  const res = await api.post("/save", classroom);
  return res.data;
};

export const updateClassroom = async (classroom: Classroom) => {
  const res = await api.post("/update", classroom);
  return res.data;
};

export const deleteClassroom = async (id: number) => {
  await api.delete(`/delete/${id}`);
};

export const insertStudent = async (code: string, student: Student) => {
  const res = await api.post("/insert", {
    code,
    student,
  });
  return res.data;
};
