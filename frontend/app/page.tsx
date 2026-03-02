'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHabits } from '../store';
import { getHabits } from './api';

interface Habit {
  _id: string;
  name: string;
  streak: number;
}

export default function Home() {
  const dispatch = useDispatch<any>();
  const habits = useSelector((state: any) => state.habits as Habit[]);

  useEffect(() => {
    getHabits().then((data: Habit[]) => dispatch(setHabits(data)));
  }, [dispatch]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mis Hábitos</h1>
      <ul className="list-disc pl-5">
        {habits.map((habit) => (
          <li key={habit._id}>
            {habit.name} - {habit.streak} días
          </li>
        ))}
      </ul>
    </div>
  );
}