import { db } from "../db.js";

//Get all user
export const getUsers = (_req, res) => {
  const queryGetUsers = "SELECT * FROM users";
  db.query(queryGetUsers, (err, data) => {
    if (err) {
      console.error("Erro ao consultar usuários:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
    return res.status(200).json(data);
  });
};

//Create a new user
export const addUser = (_req, res) => {
  const { name, b_date, age, state, city, neighborhood, road, biography, image_url } =
    _req.body;
  if (
    !name ||
    !b_date ||
    !age ||
    !state ||
    !city ||
    !neighborhood ||
    !road ||
    !biography ||
    !image_url
  ) {
    return res
      .status(400)
      .json({ error: "Todos os campos devem ser fornecidos." });
  }
  const query =
    "INSERT INTO users(name, b_date, age, state, city, neighborhood, road, biography, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    name,
    b_date,
    age,
    state,
    city,
    neighborhood,
    road,
    biography,
    image_url,
  ];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Erro ao inserir usuário:", err);
      return res
        .status(500)
        .json({ error: "Erro interno do servidor", details: err.message });
    }
    return res
      .status(200)
      .json({
        message: "Usuário criado com sucesso.",
        userId: result.insertId,
      });
  });
};

//Update of informations in a user
export const updateUser = (_req, res) => {
  const { name, b_date, age, state, city, neighborhood, road, biography } =
    _req.body;
  const { id } = _req.params;
  if (
    !name ||
    !b_date ||
    !age ||
    !state ||
    !city ||
    !neighborhood ||
    !road ||
    !biography ||
    !id
  ) {
    return res
      .status(400)
      .json({ error: "Todos os campos devem ser fornecidos." });
  }
  const query =
    "UPDATE users SET `name` = ?, `b_date` = ?, `age` = ?, `state` = ?, `city` = ?, `neighborhood` = ?,  `road` = ?, `biography` = ? WHERE `id` = ?";
  const values = [
    name,
    b_date,
    age,
    state,
    city,
    neighborhood,
    road,
    biography,
    id,
  ];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Erro ao atualizar usuário:", err);
      return res
        .status(500)
        .json({ error: "Erro interno do servidor", details: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

//Delete a user
export const deleteUser = (_req, res) => {
  const query = "DELETE FROM users WHERE `id` = ?";
  const { id } = _req.params;
  db.query(query, [id], (err) => {
    if (err) {
      console.error("Erro ao deletar usuário:", err);
      return res
        .status(500)
        .json({ error: "Erro interno do servidor", details: err.message });
    }
    return res.status(200).json({ message: "Usuário deletado com sucesso." });
  });
};
