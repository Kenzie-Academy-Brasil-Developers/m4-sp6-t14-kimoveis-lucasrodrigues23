import { MigrationInterface, QueryRunner } from "typeorm";

export class fixSchedule1678217390880 implements MigrationInterface {
    name = 'fixSchedule1678217390880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
