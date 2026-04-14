import { Command } from "commander";
import chalk from "chalk";

import {
  addTask,
  listTasks,
  completeTask,
  removeTask,
} from "./services/taskService";

const program = new Command();

program
  .name("tasks")
  .description("CLI de gerenciamento de tarefas")
  .version("1.0.0");

program
  .command("add")
  .argument("<title>")
  .action((title) => {
    const task = addTask(title);
    console.log(chalk.green("tarefa criada:"), task.title);
  });

program.command("list").action(() => {
  const tasks = listTasks();

  tasks.forEach((task) => {
    const status = task.completed ? chalk.green("✔") : chalk.red("✖");

    console.log(`${status} ${task.id} ${task.title}`);
  });
});

program
  .command("done")
  .argument("<id>")
  .action((id) => {
    completeTask(Number(id));
    console.log(chalk.green("Tarefa concluída"));
  });

program
  .command("remove")
  .argument("<id>")
  .action((id) => {
    removeTask(Number(id));
    console.log(chalk.red("Tarefa removida"));
  });

program.parse();