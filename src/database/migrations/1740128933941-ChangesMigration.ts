import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangesMigration1740128933941 implements MigrationInterface {
    name = 'ChangesMigration1740128933941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`contenido_ferias\` (\`Id_Tema\` int NOT NULL AUTO_INCREMENT, \`Titulo\` varchar(60) NOT NULL, \`Descripcion\` varchar(150) NOT NULL, \`HoraInicio\` time NOT NULL, \`HoraFin\` time NOT NULL, \`idFeria\` int NULL, PRIMARY KEY (\`Id_Tema\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`condicion_agua\` (\`Id_CondicionAgua\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(60) NOT NULL, UNIQUE INDEX \`IDX_e4d28afbc7f3550a116dc764be\` (\`Descripcion\`), PRIMARY KEY (\`Id_CondicionAgua\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`condicion_cable\` (\`Id_CondicionCable\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(60) NOT NULL, UNIQUE INDEX \`IDX_4ff141aa131ea099d236bb33da\` (\`Descripcion\`), PRIMARY KEY (\`Id_CondicionCable\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`condicion_internet\` (\`Id_CondicionInternet\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(60) NOT NULL, UNIQUE INDEX \`IDX_52740993b11eae7eb69c4126b5\` (\`Descripcion\`), PRIMARY KEY (\`Id_CondicionInternet\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`condicion_luz\` (\`Id_CondicionLuz\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(60) NOT NULL, UNIQUE INDEX \`IDX_dc14fa074eb6f99f8fe319182b\` (\`Descripcion\`), PRIMARY KEY (\`Id_CondicionLuz\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`detalle_ferias\` (\`Id_DetalleFeria\` int NOT NULL AUTO_INCREMENT, \`Costo\` decimal(8,2) NOT NULL, \`Lugar\` varchar(50) NOT NULL, \`Ubicacion\` varchar(150) NOT NULL, \`idCondicionAgua\` int NULL, \`idCondicionLuz\` int NULL, \`idCondicionInternet\` int NULL, \`idCondicionCable\` int NULL, \`idFeria\` int NULL, UNIQUE INDEX \`REL_b85439fca7b11ad5d322aead3f\` (\`idFeria\`), PRIMARY KEY (\`Id_DetalleFeria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ferias\` (\`Id_Feria\` int NOT NULL AUTO_INCREMENT, \`Titulo\` varchar(60) NOT NULL, \`Descripcion\` varchar(200) NOT NULL, \`Fecha_Inicio\` date NOT NULL, \`Fecha_Fin\` date NOT NULL, \`Hora_Inicio\` time NOT NULL, \`Hora_Fin\` time NOT NULL, \`Fecha_Publicacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`idArea\` int NULL, PRIMARY KEY (\`Id_Feria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`areas\` (\`Id_Area\` int NOT NULL AUTO_INCREMENT, \`descripcion\` varchar(40) NOT NULL, UNIQUE INDEX \`IDX_dc3485c5e64ae0b3898b10f817\` (\`descripcion\`), PRIMARY KEY (\`Id_Area\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`Id_Rol\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(40) NOT NULL, UNIQUE INDEX \`IDX_d2d3109e777f8ce6768105e241\` (\`Descripcion\`), PRIMARY KEY (\`Id_Rol\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`emprendedores\` (\`Id_Emprendedor\` int NOT NULL AUTO_INCREMENT, \`Cedula\` varchar(40) NOT NULL, \`Nombre_Completo\` varchar(60) NOT NULL, \`Apellidos\` varchar(60) NOT NULL, \`Correo\` varchar(80) NOT NULL, \`Contraseña\` varchar(200) NOT NULL, \`Telefono\` varchar(20) NOT NULL, \`Direccion\` varchar(60) NOT NULL, \`Fecha_Nacimiento\` date NOT NULL, \`idRol\` int NULL, \`idArea\` int NULL, UNIQUE INDEX \`IDX_74b11ddcf30d370a1f362523e9\` (\`Cedula\`), UNIQUE INDEX \`IDX_55932d34eba2bf5962335bf84b\` (\`Correo\`), PRIMARY KEY (\`Id_Emprendedor\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`participantes\` (\`Id_Participante\` int NOT NULL AUTO_INCREMENT, \`Fecha_Inscripcion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`idEmprendedor\` int NULL, \`idFeria\` int NULL, PRIMARY KEY (\`Id_Participante\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`contenido_ferias\` ADD CONSTRAINT \`FK_d0440f1845df483c535c75a195b\` FOREIGN KEY (\`idFeria\`) REFERENCES \`ferias\`(\`Id_Feria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` ADD CONSTRAINT \`FK_fe63b98b5ba4a2bf0e01bf1be42\` FOREIGN KEY (\`idCondicionAgua\`) REFERENCES \`condicion_agua\`(\`Id_CondicionAgua\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` ADD CONSTRAINT \`FK_5365ca36820eebea95466d92917\` FOREIGN KEY (\`idCondicionLuz\`) REFERENCES \`condicion_luz\`(\`Id_CondicionLuz\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` ADD CONSTRAINT \`FK_39d02ce5a354ef373e0ad355358\` FOREIGN KEY (\`idCondicionInternet\`) REFERENCES \`condicion_internet\`(\`Id_CondicionInternet\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` ADD CONSTRAINT \`FK_c918ff115b617e7be0714b4fbb3\` FOREIGN KEY (\`idCondicionCable\`) REFERENCES \`condicion_cable\`(\`Id_CondicionCable\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` ADD CONSTRAINT \`FK_b85439fca7b11ad5d322aead3f0\` FOREIGN KEY (\`idFeria\`) REFERENCES \`ferias\`(\`Id_Feria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ferias\` ADD CONSTRAINT \`FK_f120616a6ef29d02fa2be5c1b2c\` FOREIGN KEY (\`idArea\`) REFERENCES \`areas\`(\`Id_Area\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emprendedores\` ADD CONSTRAINT \`FK_fbf46f946b76e83a8748323b4cd\` FOREIGN KEY (\`idRol\`) REFERENCES \`roles\`(\`Id_Rol\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emprendedores\` ADD CONSTRAINT \`FK_3a25589037a5c5be2d4e62e35a7\` FOREIGN KEY (\`idArea\`) REFERENCES \`areas\`(\`Id_Area\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`participantes\` ADD CONSTRAINT \`FK_1c038c414d86b1c5ea75844d7cb\` FOREIGN KEY (\`idEmprendedor\`) REFERENCES \`emprendedores\`(\`Id_Emprendedor\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`participantes\` ADD CONSTRAINT \`FK_7cc3ac09161e307c8f7140de0e5\` FOREIGN KEY (\`idFeria\`) REFERENCES \`ferias\`(\`Id_Feria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`participantes\` DROP FOREIGN KEY \`FK_7cc3ac09161e307c8f7140de0e5\``);
        await queryRunner.query(`ALTER TABLE \`participantes\` DROP FOREIGN KEY \`FK_1c038c414d86b1c5ea75844d7cb\``);
        await queryRunner.query(`ALTER TABLE \`emprendedores\` DROP FOREIGN KEY \`FK_3a25589037a5c5be2d4e62e35a7\``);
        await queryRunner.query(`ALTER TABLE \`emprendedores\` DROP FOREIGN KEY \`FK_fbf46f946b76e83a8748323b4cd\``);
        await queryRunner.query(`ALTER TABLE \`ferias\` DROP FOREIGN KEY \`FK_f120616a6ef29d02fa2be5c1b2c\``);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` DROP FOREIGN KEY \`FK_b85439fca7b11ad5d322aead3f0\``);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` DROP FOREIGN KEY \`FK_c918ff115b617e7be0714b4fbb3\``);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` DROP FOREIGN KEY \`FK_39d02ce5a354ef373e0ad355358\``);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` DROP FOREIGN KEY \`FK_5365ca36820eebea95466d92917\``);
        await queryRunner.query(`ALTER TABLE \`detalle_ferias\` DROP FOREIGN KEY \`FK_fe63b98b5ba4a2bf0e01bf1be42\``);
        await queryRunner.query(`ALTER TABLE \`contenido_ferias\` DROP FOREIGN KEY \`FK_d0440f1845df483c535c75a195b\``);
        await queryRunner.query(`DROP TABLE \`participantes\``);
        await queryRunner.query(`DROP INDEX \`IDX_55932d34eba2bf5962335bf84b\` ON \`emprendedores\``);
        await queryRunner.query(`DROP INDEX \`IDX_74b11ddcf30d370a1f362523e9\` ON \`emprendedores\``);
        await queryRunner.query(`DROP TABLE \`emprendedores\``);
        await queryRunner.query(`DROP INDEX \`IDX_d2d3109e777f8ce6768105e241\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_dc3485c5e64ae0b3898b10f817\` ON \`areas\``);
        await queryRunner.query(`DROP TABLE \`areas\``);
        await queryRunner.query(`DROP TABLE \`ferias\``);
        await queryRunner.query(`DROP INDEX \`REL_b85439fca7b11ad5d322aead3f\` ON \`detalle_ferias\``);
        await queryRunner.query(`DROP TABLE \`detalle_ferias\``);
        await queryRunner.query(`DROP INDEX \`IDX_dc14fa074eb6f99f8fe319182b\` ON \`condicion_luz\``);
        await queryRunner.query(`DROP TABLE \`condicion_luz\``);
        await queryRunner.query(`DROP INDEX \`IDX_52740993b11eae7eb69c4126b5\` ON \`condicion_internet\``);
        await queryRunner.query(`DROP TABLE \`condicion_internet\``);
        await queryRunner.query(`DROP INDEX \`IDX_4ff141aa131ea099d236bb33da\` ON \`condicion_cable\``);
        await queryRunner.query(`DROP TABLE \`condicion_cable\``);
        await queryRunner.query(`DROP INDEX \`IDX_e4d28afbc7f3550a116dc764be\` ON \`condicion_agua\``);
        await queryRunner.query(`DROP TABLE \`condicion_agua\``);
        await queryRunner.query(`DROP TABLE \`contenido_ferias\``);
    }

}
