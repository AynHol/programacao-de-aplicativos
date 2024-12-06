-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);
