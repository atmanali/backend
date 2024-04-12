-- CreateTable
CREATE TABLE "authentication" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date_created" TIMESTAMP(3),
    "date_updated" TIMESTAMP(3),
    "user_created" TEXT,
    "user_updated" TEXT,

    CONSTRAINT "authentication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birth_day" TIMESTAMP(3),
    "class_id" INTEGER,
    "role_id" UUID,
    "date_created" TIMESTAMP(3),
    "date_updated" TIMESTAMP(3),
    "user_created" TEXT,
    "user_updated" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date_created" TIMESTAMP(3),
    "date_updated" TIMESTAMP(3),
    "user_created" TEXT,
    "user_updated" TEXT,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL,
    "description" TEXT,
    "date_created" TIMESTAMP(3),
    "date_updated" TIMESTAMP(3),
    "user_created" TEXT,
    "user_updated" TEXT,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers_of_classes" (
    "teacher_id" UUID NOT NULL,
    "class_id" INTEGER NOT NULL,
    "date_created" TIMESTAMP(3),
    "date_updated" TIMESTAMP(3),
    "user_created" TEXT,
    "user_updated" TEXT,

    CONSTRAINT "teachers_of_classes_pkey" PRIMARY KEY ("teacher_id","class_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authentication_username_key" ON "authentication"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "roles_id_key" ON "roles"("id");

-- AddForeignKey
ALTER TABLE "authentication" ADD CONSTRAINT "authentication_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers_of_classes" ADD CONSTRAINT "teachers_of_classes_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers_of_classes" ADD CONSTRAINT "teachers_of_classes_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
