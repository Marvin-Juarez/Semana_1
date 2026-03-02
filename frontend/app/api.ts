export interface Habit {
  _id: string;
  name: string;
  streak: number;
}

export const getHabits = async (): Promise<Habit[]> => {
  const res = await fetch('http://localhost:5000/api/habits');
  if (!res.ok) {
    throw new Error('Error al obtener hábitos');
  }
  const data = await res.json();
  return data;
};