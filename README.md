# ts-task-cli

CLI simples de gerenciamento de tarefas (to-do) feito em TypeScript para rodar no Node.js. Ele permite criar, listar, concluir e remover tarefas, persistindo os dados em um arquivo `tasks.json` na raiz do projeto.

## Requisitos

- Node.js (recomendado 18+)
- npm

## Instalação

```bash
npm install
```

## Como rodar (modo desenvolvimento)

O script `dev` executa o CLI via `ts-node`:

```bash
npm run dev -- --help
```

## Comandos disponíveis

### Adicionar uma tarefa

```bash
npm run dev -- add "estudar ts"
```

### Listar tarefas

```bash
npm run dev -- list
```

Saída esperada (exemplo):

```txt
✖ 1776183457629 estudar ts
```

### Concluir uma tarefa

Use o `id` exibido no `list`:

```bash
npm run dev -- done 1776183457629
```

### Remover uma tarefa

```bash
npm run dev -- remove 1776183457629
```

## Persistência (tasks.json)

- As tarefas são salvas no arquivo `tasks.json` na raiz do projeto.
- Se o arquivo não existir, ele será criado automaticamente na primeira vez que você usar `add`.
- Para “resetar” as tarefas, basta apagar o conteúdo do `tasks.json` (ou remover o arquivo).

## Estrutura do projeto

- `src/index.ts`: definição do CLI e comandos (Commander)
- `src/services/taskService.ts`: regras de negócio (criar/listar/concluir/remover)
- `src/utils/file.ts`: leitura/escrita do `tasks.json`
- `src/types/Task.ts`: tipo/contrato de dados da tarefa
