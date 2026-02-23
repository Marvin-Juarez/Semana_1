const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// Crear un hábito (alta)
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newHabit = new Habit({ title, description });
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear hábito', error: err });
  }
});

// Obtener todos los hábitos
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener hábitos', error: err });
  }
});

// Actualizar un hábito
router.put('/:id', async (req, res) => {
  try {
    const { title, description } = req.body;
    const habit = await Habit.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!habit) return res.status(404).json({ message: 'Hábito no encontrado' });
    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar hábito', error: err });
  }
});

// Eliminar un hábito (baja)
router.delete('/:id', async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);
    if (!habit) return res.status(404).json({ message: 'Hábito no encontrado' });
    res.json({ message: 'Hábito eliminado' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar hábito', error: err });
  }
});

module.exports = router;