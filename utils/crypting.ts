import { createHmac } from "crypto";

const localEncrypt = (secret: string) =>
  createHmac("sha256", "hash_key").update(secret).digest("hex");

export const encrypt = (secret: string) =>
  createHmac("sha256", "hash_key").update(localEncrypt(secret)).digest("hex");
