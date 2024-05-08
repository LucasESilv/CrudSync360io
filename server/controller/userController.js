import { db } from "../db.js";

export const getUsers = (_req, res) => {
  try {
    const queryGetUsers = "SELECT * FROM users";

    db.query(queryGetUsers, (err, data) => {
      if (err) {
        console.error("Erro ao consultar usuários:", err);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }

      return res.status(200).json(data);
    });
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};
