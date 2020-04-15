const db = require("../data/db-config.js");

module.exports = {
  all,
  findById,
  create,
  update,
  remove,
};

function all() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}

function create(users) {
  return db("users")
    .insert(users, "id") // id passed for psql
    .then(([id]) => findById(id));
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => findById(id));
}

function remove(id) {
  return db("users").where({ id }).del();
}
