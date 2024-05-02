/*
  Warnings:

  - A unique constraint covering the columns `[role_id,collection,action,permissions,validation,presets,fields]` on the table `permissions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "permissions_role_id_collection_action_permissions_validatio_key" ON "permissions"("role_id", "collection", "action", "permissions", "validation", "presets", "fields");
