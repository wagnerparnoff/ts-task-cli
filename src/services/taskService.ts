import { Task } from "../types/Task";
import { readTasks, saveTasks } from "../utils/file";

export function addTask(title: string): Task {
  const tasks = readTasks();

  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  saveTasks(tasks);

  return newTask;
}

export function listTasks(): Task[] {
  return readTasks();
}

export function completeTask(id: number): void {
  const tasks = readTasks();

  const task = tasks.find((t: Task) => t.id === id);
  if (!task) throw new Error("Task not found");

  task.completed = true;
  saveTasks(tasks);
}

export function removeTask(id: number): void {
  const tasks = readTasks();
  const filtered = tasks.filter((t: Task) => t.id !== id);
  saveTasks(filtered);
}
