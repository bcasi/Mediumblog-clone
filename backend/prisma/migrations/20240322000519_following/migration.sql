/*
  Warnings:

  - You are about to drop the `FollowedBy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Following` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FollowedBy" DROP CONSTRAINT "FollowedBy_followedById_fkey";

-- DropForeignKey
ALTER TABLE "Following" DROP CONSTRAINT "Following_followingId_fkey";

-- DropTable
DROP TABLE "FollowedBy";

-- DropTable
DROP TABLE "Following";

-- CreateTable
CREATE TABLE "Follow" (
    "id" TEXT NOT NULL,
    "followedId" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
