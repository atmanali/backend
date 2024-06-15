import { Router } from "express";
import { login } from "../services/auth/login";

const authRoutes = Router();

authRoutes.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const auth = await login(username, password);
  if (auth?.username) res.sendStatus(201);
  else res.status(500).json({ data: auth });
});

export default authRoutes;
