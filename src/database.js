import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table) {
    let data = this.#database[table] ?? [];

    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }

  #searchId(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    return { rowIndex, isExistId: !rowIndex };
  }

  update(table, id, data) {
    const { rowIndex, isExistId } = this.#searchId(table, id);

    if (isExistId) {
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex],
        ...data,
      };

      this.#persist();
    }

    return { isExistId };
  }

  delete(table, id) {
    const { rowIndex, isExistId } = this.#searchId(table, id);

    if (isExistId) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }

    return { isExistId };
  }
}
