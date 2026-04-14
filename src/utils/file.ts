import fs from "fs";

const FILE_PATH = "tasks.json";

export function readTasks() {
    if (!fs.existsSync(FILE_PATH)) return [];
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data);
}

export function saveTasks(tasks: any[]) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2))
}

//uma persistencia simples apenas para simular bd