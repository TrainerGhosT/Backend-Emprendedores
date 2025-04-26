create table areas
(
    Id_Area     int auto_increment
        primary key,
    descripcion varchar(40) not null,
    constraint IDX_dc3485c5e64ae0b3898b10f817
        unique (descripcion)
);

create table condicion_agua
(
    Id_CondicionAgua int auto_increment
        primary key,
    Descripcion      varchar(60) not null,
    constraint IDX_e4d28afbc7f3550a116dc764be
        unique (Descripcion)
);

create table condicion_cable
(
    Id_CondicionCable int auto_increment
        primary key,
    Descripcion       varchar(60) not null,
    constraint IDX_4ff141aa131ea099d236bb33da
        unique (Descripcion)
);

create table condicion_internet
(
    Id_CondicionInternet int auto_increment
        primary key,
    Descripcion          varchar(60) not null,
    constraint IDX_52740993b11eae7eb69c4126b5
        unique (Descripcion)
);

create table condicion_luz
(
    Id_CondicionLuz int auto_increment
        primary key,
    Descripcion     varchar(60) not null,
    constraint IDX_dc14fa074eb6f99f8fe319182b
        unique (Descripcion)
);

create table ferias
(
    Id_Feria          int auto_increment
        primary key,
    Titulo            varchar(60)                         not null,
    Descripcion_Corta varchar(150)                        not null,
    Descripcion       text                                not null,
    Fecha_Inicio      date                                not null,
    Fecha_Fin         date                                null,
    Hora_Inicio       time                                not null,
    Hora_Fin          time                                null,
    Imagen            varchar(255)                        null,
    Fecha_Publicacion timestamp default CURRENT_TIMESTAMP not null,
    idArea            int                                 null,
    constraint FK_f120616a6ef29d02fa2be5c1b2c
        foreign key (idArea) references areas (Id_Area)
);

create table contenido_ferias
(
    Id_Tema     int auto_increment
        primary key,
    Titulo      varchar(60)  not null,
    Descripcion varchar(150) null,
    HoraInicio  time         not null,
    HoraFin     time         null,
    idFeria     int          null,
    constraint FK_d0440f1845df483c535c75a195b
        foreign key (idFeria) references ferias (Id_Feria)
);

create table detalle_ferias
(
    Id_DetalleFeria     int auto_increment
        primary key,
    Costo               decimal(8, 2) not null,
    Lugar               varchar(50)   not null,
    Ubicacion           varchar(150)  not null,
    idCondicionAgua     int           null,
    idCondicionLuz      int           null,
    idCondicionInternet int           null,
    idCondicionCable    int           null,
    idFeria             int           null,
    constraint REL_b85439fca7b11ad5d322aead3f
        unique (idFeria),
    constraint FK_39d02ce5a354ef373e0ad355358
        foreign key (idCondicionInternet) references condicion_internet (Id_CondicionInternet),
    constraint FK_5365ca36820eebea95466d92917
        foreign key (idCondicionLuz) references condicion_luz (Id_CondicionLuz),
    constraint FK_b85439fca7b11ad5d322aead3f0
        foreign key (idFeria) references ferias (Id_Feria),
    constraint FK_c918ff115b617e7be0714b4fbb3
        foreign key (idCondicionCable) references condicion_cable (Id_CondicionCable),
    constraint FK_fe63b98b5ba4a2bf0e01bf1be42
        foreign key (idCondicionAgua) references condicion_agua (Id_CondicionAgua)
);

create table migrations
(
    id        int auto_increment
        primary key,
    timestamp bigint       not null,
    name      varchar(255) not null
);

create table roles
(
    Id_Rol      int auto_increment
        primary key,
    Descripcion varchar(40) not null,
    constraint IDX_d2d3109e777f8ce6768105e241
        unique (Descripcion)
);

create table emprendedores
(
    Id_Emprendedor   int auto_increment
        primary key,
    Cedula           varchar(40)  not null,
    Nombre_Completo  varchar(60)  not null,
    Apellidos        varchar(60)  not null,
    Correo           varchar(80)  not null,
    Contraseña       varchar(200) not null,
    Telefono         varchar(20)  not null,
    Direccion        varchar(60)  not null,
    Fecha_Nacimiento date         not null,
    idRol            int          null,
    idArea           int          null,
    constraint IDX_55932d34eba2bf5962335bf84b
        unique (Correo),
    constraint IDX_74b11ddcf30d370a1f362523e9
        unique (Cedula),
    constraint FK_3a25589037a5c5be2d4e62e35a7
        foreign key (idArea) references areas (Id_Area),
    constraint FK_fbf46f946b76e83a8748323b4cd
        foreign key (idRol) references roles (Id_Rol)
);

create table participantes
(
    Id_Participante   int auto_increment
        primary key,
    Fecha_Inscripcion timestamp default CURRENT_TIMESTAMP not null,
    idEmprendedor     int                                 null,
    idFeria           int                                 null,
    constraint FK_1c038c414d86b1c5ea75844d7cb
        foreign key (idEmprendedor) references emprendedores (Id_Emprendedor),
    constraint FK_7cc3ac09161e307c8f7140de0e5
        foreign key (idFeria) references ferias (Id_Feria)
);


CREATE  VIEW list_view_ferias AS
SELECT
    f.Id_Feria,
    f.Titulo,
    f.Descripcion_Corta,
    f.Descripcion        AS Descripcion_Larga,
    f.Fecha_Inicio,
    f.Fecha_Fin,
    f.Hora_Inicio,
    f.Hora_Fin,
    f.Imagen,
    f.Fecha_Publicacion,
    a.descripcion       AS Area,
    df.Costo,
    df.Lugar,
    df.Ubicacion,
    ca.Descripcion      AS Condicion_Agua,
    cl.Descripcion      AS Condicion_Luz,
    ci.Descripcion      AS Condicion_Internet,
    cc.Descripcion      AS Condicion_Cable
FROM ferias f
LEFT JOIN areas a
    ON f.idArea = a.Id_Area
LEFT JOIN detalle_ferias df
    ON f.Id_Feria = df.idFeria
LEFT JOIN condicion_agua ca
    ON df.idCondicionAgua = ca.Id_CondicionAgua
LEFT JOIN condicion_luz cl
    ON df.idCondicionLuz = cl.Id_CondicionLuz
LEFT JOIN condicion_internet ci
    ON df.idCondicionInternet = ci.Id_CondicionInternet
LEFT JOIN condicion_cable cc
    ON df.idCondicionCable = cc.Id_CondicionCable;

create procedure sp_agregar_emprendedor(
cedula varchar(40),
nombre_completo varchar(60) ,
apellidos varchar(60),
correo varchar(80) ,
contraseña varchar(200),
telefono varchar(20) ,
direccion varchar(60),
fecha_nacimiento date,
id_rol int,
id_area int
)
BEGIN
INSERT INTO emprendedores(Cedula, Nombre_Completo, Apellidos, Correo, Contraseña, Telefono, Direccion, Fecha_Nacimiento, idRol, idArea)  values(cedula, nombre_completo, apellidos, correo, contraseña, telefono, direccion, fecha_nacimiento, id_rol, id_area);
END;

DELIMITER $$

CREATE PROCEDURE sp_agregar_feria(
    IN p_Titulo             VARCHAR(60),
    IN p_DescripcionCorta   VARCHAR(150),
    IN p_Descripcion        TEXT,
    IN p_FechaInicio        DATE,
    IN p_FechaFin           DATE,
    IN p_HoraInicio         TIME,
    IN p_HoraFin            TIME,
    IN p_Imagen             VARCHAR(255),
    IN p_idArea             INT,
    IN p_Costo              DECIMAL(8,2),
    IN p_Lugar              VARCHAR(50),
    IN p_Ubicacion          VARCHAR(150),
    IN p_idCondAgua         INT,
    IN p_idCondLuz          INT,
    IN p_idCondInternet     INT,
    IN p_idCondCable        INT
)
BEGIN
    DECLARE v_idFeria INT;

    -- Inicia la transacción
    START TRANSACTION;

    -- 1) Inserta la feria
    INSERT INTO ferias (
        Titulo,
        Descripcion_Corta,
        Descripcion,
        Fecha_Inicio,
        Fecha_Fin,
        Hora_Inicio,
        Hora_Fin,
        Imagen,
        idArea
    ) VALUES (
        p_Titulo,
        p_DescripcionCorta,
        p_Descripcion,
        p_FechaInicio,
        p_FechaFin,
        p_HoraInicio,
        p_HoraFin,
        p_Imagen,
        p_idArea
    );
    SET v_idFeria = LAST_INSERT_ID();

    -- 2) Inserta el detalle de feria vinculándolo
    INSERT INTO detalle_ferias (
        Costo,
        Lugar,
        Ubicacion,
        idCondicionAgua,
        idCondicionLuz,
        idCondicionInternet,
        idCondicionCable,
        idFeria
    ) VALUES (
        p_Costo,
        p_Lugar,
        p_Ubicacion,
        p_idCondAgua,
        p_idCondLuz,
        p_idCondInternet,
        p_idCondCable,
        v_idFeria
    );

    -- Confirma los cambios
    COMMIT;
END$$

DELIMITER ;


CREATE VIEW list_view_emprendedores as
Select e.Id_Emprendedor, e.Cedula, e.Nombre_Completo, e.Apellidos, e.Correo, e.Contraseña, e.Telefono, e.Direccion, e.Fecha_Nacimiento , a.Descripcion as Area , r.Descripcion as Rol  from emprendedores e
inner join areas a on
e.idArea = a.Id_Area
inner join roles r on
e.idRol = r.Id_Rol;


DELIMITER $$

CREATE PROCEDURE sp_listar_feria_id(
    IN p_IdFeria INT
)
BEGIN
    SELECT
        f.Id_Feria,
        f.Titulo,
        f.Descripcion_Corta,
        f.Descripcion        AS Descripcion_Larga,
        f.Fecha_Inicio,
        f.Fecha_Fin,
        f.Hora_Inicio,
        f.Hora_Fin,
        f.Imagen,
        f.Fecha_Publicacion,
        a.descripcion       AS Area,
        df.Costo,
        df.Lugar,
        df.Ubicacion,
        ca.Descripcion      AS Condicion_Agua,
        cl.Descripcion      AS Condicion_Luz,
        ci.Descripcion      AS Condicion_Internet,
        cc.Descripcion      AS Condicion_Cable
    FROM ferias f
    LEFT JOIN areas a
        ON f.idArea = a.Id_Area
    LEFT JOIN detalle_ferias df
        ON f.Id_Feria = df.idFeria
    LEFT JOIN condicion_agua ca
        ON df.idCondicionAgua = ca.Id_CondicionAgua
    LEFT JOIN condicion_luz cl
        ON df.idCondicionLuz = cl.Id_CondicionLuz
    LEFT JOIN condicion_internet ci
        ON df.idCondicionInternet = ci.Id_CondicionInternet
    LEFT JOIN condicion_cable cc
        ON df.idCondicionCable = cc.Id_CondicionCable
    WHERE f.Id_Feria = p_IdFeria;
END$$

DELIMITER;