-- CreateTable
CREATE TABLE "Photos" (
    "UserId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "file" TEXT,
    "price" INTEGER,
    "title" INTEGER,
    "description" TEXT,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
