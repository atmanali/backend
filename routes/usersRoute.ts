import { Router } from "express";
import { createUser } from "../services/users/create";
import prisma from "../prisma/prismaClient";
import { deleteUser } from "../services/users/delete";

const usersRoute = Router();
usersRoute.post("/", async (req, res, next) => {
  const userCreated: any = await createUser(req.body);
  if (userCreated?.username) {
    res.sendStatus(202);
  } else {
    res.status(500).json({ data: userCreated });
  }
});

usersRoute.delete("/", async (req, res) => {
  const deletedUser = await deleteUser(req.body);
  // @ts-ignore
  deletedUser?.username ? res.sendStatus(201) : res.sendStatus(500);
});
usersRoute.get("/", async (req, res) => {
  const { username } = req.query;
  const requested_user = username
    ? await prisma.users.findFirst({ where: { username: username as string } })
    : "";
  requested_user
    ? res.status(200).json({ data: requested_user })
    : res.sendStatus(404);
});

export default usersRoute;
