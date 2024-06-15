import { Router } from "express";
import { createPermissions } from "../services/permissions/create";
import { getUser } from "../services/users/get";

const permissionsRoute = Router();
permissionsRoute.post("/", async (req, res, next) => {
  const { username, permissions } = req.query;
  //console.log('permissions\t', JSON.parse(permissions as string));

  try {
    const user = await getUser(username as string);
    console.log(user?.username);
    const permissionsCreated = await createPermissions();
    res.status(200).json({ id: permissionsCreated });
  } catch (e) {
    console.log("## error\n", e);
  }

  next();
});

export default permissionsRoute;
