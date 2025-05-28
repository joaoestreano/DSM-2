// src/routes/cidade.ts
import express from "express";
import pool from "../controllers/db";

const router = express.Router();

// GET /cidade
router.get("/", async (req, res) => {
  const resultado = await pool.query("SELECT * FROM cidades");
  res.json(resultado.rows);
});

// GET /cidade/:id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const resultado = await pool.query("SELECT * FROM cidades WHERE id = $1", [id]);

  if (resultado.rows.length === 0) {
    return res.status(404).json({ erro: "Cidade não encontrada" });
  }

  res.json(resultado.rows[0]);
});

export default router;
