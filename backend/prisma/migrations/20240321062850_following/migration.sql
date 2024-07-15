/*
  Warnings:

  - You are about to drop the `Follower` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_followedById_fkey";

-- DropTable
DROP TABLE "Follower";

-- CreateTable
CREATE TABLE "FollowedBy" (
    "id" TEXT NOT NULL,
    "followedById" TEXT NOT NULL,

    CONSTRAINT "FollowedBy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FollowedBy" ADD CONSTRAINT "FollowedBy_followedById_fkey" FOREIGN KEY ("followedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
