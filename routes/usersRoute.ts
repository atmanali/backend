import { Router } from "express";
import { createUser } from "../services/users/create";
import prisma from "../prisma/prismaClient";

const usersRoute = Router();
usersRoute.post("/", async (req, res, next) => {
  const { role, ...restOfBody } = req.body;

  const role_id = (
    await prisma.roles.findFirst({
      select: { id: true },
      where: { name: role },
    })
  )?.id;
  const userCreated: any = await createUser({
    ...restOfBody,
    role_id: role_id as string,
  });
  if (userCreated?.username) {
    res.sendStatus(202);
  } else {
    res.status(500).json({ data: userCreated });
  }
});

usersRoute.get("/", async (req, res) => {
  const { username } = req.query;
  const requested_user = await prisma.users.findFirst({
    where: { username: username as string },
    include: {
      roles: { select: { name: true } },
      classes: true,
    },
  });
  requested_user
    ? res.status(200).json({ data: requested_user })
    : res.sendStatus(404);
});

export default usersRoute;
