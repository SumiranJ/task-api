import prisma from '../config/db.js';

export async function findAll(completedCheck) {
  const whereClause = {};
  if (completedCheck !== undefined) {
    whereClause.completed = completedCheck;
  }
  return prisma.task.findMany({
    where: whereClause
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
