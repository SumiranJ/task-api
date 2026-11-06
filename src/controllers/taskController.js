import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try{
    const { completed } = req.query;
    if (completed !== undefined && completed !== 'true' && completed !== 'false'){
      const error = new Error('completed query parameter must be either "true" or "false"');
      error.status = 400;
      throw error;
    }
    const completedCheck = completed !== undefined ? completed === 'true' : undefined;
    const tasks = await taskService.getAllTasks(completedCheck);
    res.status(200).json(tasks);
  }
  catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
