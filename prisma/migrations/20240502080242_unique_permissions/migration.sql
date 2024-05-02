-- CreateTable
CREATE TABLE "newPermissionsModel" (
    "id" SERIAL NOT NULL,
    "permissions" JSONB NOT NULL,

    CONSTRAINT "newPermissionsModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "newPermissionsModel_permissions_key" ON "newPermissionsModel"("permissions");

-- RenameIndex
ALTER INDEX "permissions_role_id_collection_action_permissions_validatio_key" RENAME TO "ok";
