import { Router } from "express";
import createMockData from "../prisma/createMockData";
import { createMockUsers } from "../prisma/createMockData/createMockUsers";
import deleteMockData from '../prisma/deleteMockData';

const mockRoutes = Router();

mockRoutes.post("/", async (req, res) => {
  const mockData = await createMockData();
  res.status(300).json({ data: mockData });
});

mockRoutes.post("/users", async (req, res) => {
  const users = await createMockUsers();
  res.status(300).json({ data: users });
});



mockRoutes.delete('/', async (req, res) => {
  const deletedMockDate = await deleteMockData();
  res.status(201).json({data: deletedMockDate})
})

export default mockRoutes;
