import express from "express";
import usersRoute from "./routes/usersRoute";
import prisma from "./prisma/prismaClient";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import mockRoutes from "./routes/mockRoutes";

async function main() {
  const app = express();
  const PORT = process.env.PORT;
  const corsOptions = {
    //origin: process.env.ORIGIN,
    methods: "GET,POST",
    //credentials: true
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  app.use("/", (req, res, next) => {
    console.log("api: called");
    next();
  });
  app.use("/auth", authRoutes);
  app.use("/mock", mockRoutes);
  app.use("/users", usersRoute);

  app.listen(PORT, () => {
    console.log("Server started on port", PORT);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
