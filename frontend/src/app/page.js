'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHabitos } from '../lib/features/habitosSlice';
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();
  const habitos = useSelector((state) => state.habitos.items);

  useEffect(() => {
    const fetchHabitos = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/habitos');
        dispatch(setHabitos(res.data));
      } catch (error) {
        console.error("Error al traer hábitos:", error);
      }
    };
    fetchHabitos();
  }, [dispatch]);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Mis Hábitos Atómicos</h1>
      <div className="grid gap-4">
        {habitos.map((h) => (
          <div key={h._id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{h.nombre}</h2>
            <p>Días: {h.diasConsecutivos} / 66</p>
          </div>
        ))}
      </div>
    </main>
  );
}
