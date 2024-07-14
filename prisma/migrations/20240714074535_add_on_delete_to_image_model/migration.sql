-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_newsId_fkey";

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE CASCADE ON UPDATE CASCADE;
