import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completedCheck) {
  return taskRepository.findAll(completedCheck);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
