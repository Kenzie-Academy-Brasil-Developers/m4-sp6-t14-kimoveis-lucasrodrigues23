import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUser1677856260247 implements MigrationInterface {
    name = 'fixUser1677856260247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_624561db5deba35212aab3b62c3"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "categoriesId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ADD "categoriesId" integer`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_624561db5deba35212aab3b62c3" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
