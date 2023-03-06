import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRealEstateCategory1678136492058 implements MigrationInterface {
    name = 'fixRealEstateCategory1678136492058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "value" TYPE numeric(12,2)`);
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "value" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_a9490420a41bd06f69da8d4e946" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_a9490420a41bd06f69da8d4e946"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "value" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "value" TYPE numeric(5,2)`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "category" integer NOT NULL`);
    }

}
