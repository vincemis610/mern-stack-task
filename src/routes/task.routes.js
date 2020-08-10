const express = require('express');
const router = express.Router();

// === LLAMAR AL MODELO TASK === //
const Task = require('../models/task');

// === OBTENER TODAS LAS TAREAS === //
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(
        tasks
    );
});

// === OBTENER UNA TAREA === //
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task)
})

// === AGREGAR UNA TAREA === //
router.post('/', async (req, res) =>{
    const {title, description} = req.body;
    const task = new Task({ title, description});
    await task.save();
    console.log(task);
    res.json({ msg: 'Task Saved'})
});

// === ACTUALIZAR UNA TAREA === //
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({ msg: 'Task updated'})
});

// === ELIMINAR UNA TAREA === //
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Task deletd'})
})

module.exports = router;