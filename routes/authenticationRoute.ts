import { Router } from "express";
import { createAuthentication } from "../services/authentication/create";
import prisma from "../prisma/prismaClient";
import { getUser } from "../services/users/get";
import { getAuthentication } from "../services/authentication/get";
import { login } from "../services/authentication/auth";
import { sign } from "jsonwebtoken";

const authenticationRoute = Router();

authenticationRoute.get("/", async (req, res) => {
  const { username } = req.query;
  const userAuth = await prisma.authentication.findFirst({
    where: { username: username as string },
    select: {
      username: true,
      role: true,
    },
  });
  res.status(200).json({ data: userAuth });
});
authenticationRoute.post("/createNewUser", async (req, res) => {
  createAuthentication(req.body[0]).then((response) => {
    if (response) res.status(200).json({ data: response });
    else res.status(500).json({});
  });
});
authenticationRoute.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // todo: send cookie to front
  console.log(process.env.JWT_SECRET);
  switch (await login(username, password)) {
    case "connected":
      res.status(200).json({
        data: sign(JSON.stringify(await getUser(username)), process.env.JWT_SECRET as string),
      });
      break;
    case "redirect":
      res.sendStatus(202);
      break;
      case "not authenticated":
        res.sendStatus(403);
      break;
    case "error":
      res.sendStatus(500);
      break;
    default:
      res.sendStatus(500);
      break;
  }
});

export default authenticationRoute;
