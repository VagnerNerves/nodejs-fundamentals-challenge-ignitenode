import { randomUUID } from "node:crypto";

import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const tasks = database.select("tasks");

      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title && !description) {
        const error = { error: "Nenhum dado fornecido" };

        return res.writeHead(400).end(JSON.stringify(error));
      }

      const date = new Date();

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: date,
        updated_at: date,
      };

      database.insert("tasks", task);

      return res.writeHead(201).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      if (!title && !description) {
        const error = { error: "Nenhum dado fornecido" };

        return res.writeHead(400).end(JSON.stringify(error));
      }

      const data = {};

      if (title) {
        data.title = title;
      }

      if (description) {
        data.description = description;
      }

      data.updated_at = new Date();

      const { isExistId } = database.update("tasks", id, data);

      if (isExistId) {
        return res.writeHead(204).end();
      } else {
        const error = { error: "Id informado não existe." };

        return res.writeHead(400).end(JSON.stringify(error));
      }
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const { isExistId } = database.delete("tasks", id);

      if (isExistId) {
        return res.writeHead(204).end();
      } else {
        const error = { error: "Id informado não existe." };

        return res.writeHead(400).end(JSON.stringify(error));
      }
    },
  },
];
