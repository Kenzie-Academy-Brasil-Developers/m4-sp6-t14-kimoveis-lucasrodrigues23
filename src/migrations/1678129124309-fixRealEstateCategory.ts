import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRealEstateCategory1678129124309 implements MigrationInterface {
    name = 'fixRealEstateCategory1678129124309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_a9490420a41bd06f69da8d4e946"`);
        await queryRunner.query(`ALTER TABLE "real_state" RENAME COLUMN "categoryId" TO "category"`);
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "category" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "category" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_state" RENAME COLUMN "category" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_a9490420a41bd06f69da8d4e946" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
