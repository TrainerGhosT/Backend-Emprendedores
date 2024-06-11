CREATE PROCEDURE sp_listar_emprendedores()
BEGIN
Select e.Id_Emprendedor, e.Nombre_Completo, e.Apellidos, e.Correo, e.Contraseña, e.Telefono, e.Direccion, e.Fecha_Nacimiento , a.Descripcion as Area , r.Descripcion as Rol  from emprendedores e
inner join areas a on
e.idArea = a.Id_Area
inner join roles r on
e.idRol = r.Id_Rol;
END;

CREATE VIEW list_view_emprendedores as
Select e.Id_Emprendedor, e.Cedula, e.Nombre_Completo, e.Apellidos, e.Correo, e.Contraseña, e.Telefono, e.Direccion, e.Fecha_Nacimiento , a.Descripcion as Area , r.Descripcion as Rol  from emprendedores e
inner join areas a on
e.idArea = a.Id_Area
inner join roles r on
e.idRol = r.Id_Rol;


CREATE PROCEDURE sp_listar_emprendedor_id(
id_emprendedor int
)
BEGIN
Select e.Id_Emprendedor, e.Nombre_Completo, e.Apellidos, e.Correo, e.Contraseña, e.Telefono, e.Direccion, e.Fecha_Nacimiento , a.Descripcion as Area , r.Descripcion as Rol  from emprendedores e
inner join areas a on
e.idArea = a.Id_Area
inner join roles r on
e.idRol = r.Id_Rol
where e.Id_Emprendedor = id_emprendedor;
END;
call sp_listar_emprendedores();
call sp_listar_emprendedor_id(1);

create procedure sp_agregar_ferias(
titulo varchar(60),
descripcion varchar(200),
fecha_inicio date,
fecha_fin date,
hora_inicio time,
hora_fin time,
id_area int,
costo decimal(8,2),
lugar varchar(50), ubicacion varchar(150),
id_condicion_agua int , id_condicion_luz int,
id_condicion_internet int , id_condicion_cable int
)
BEGIN
    declare id_detalle_feria int;
Insert into detalle_ferias(Costo, Lugar, Ubicacion, idCondicionAgua, idCondicionLuz, idCondicionInternet, idCondicionCable)  values(costo, lugar, ubicacion, id_condicion_agua, id_condicion_luz, id_condicion_internet, id_condicion_cable);
set id_detalle_feria = last_insert_id();


Insert into Ferias(Titulo, Descripcion, Fecha_Inicio, Fecha_Fin, Hora_Inicio, Hora_Fin, idArea, idDetalleFeria) values(titulo, descripcion, fecha_inicio, fecha_fin, hora_inicio, hora_fin, id_area, id_detalle_feria);
END;
drop procedure sp_agregar_ferias;


create procedure sp_listar_ferias()
BEGIN
select f.Titulo, f.Descripcion, df.Costo, df.Lugar, df.Ubicacion,f.Fecha_Inicio, f.Fecha_Fin, f.Hora_Inicio, f.Hora_Fin, a.descripcion as Area, ca.Descripcion as Agua, cl.Descripcion as Luz , ci.Descripcion as Internet, cc.Descripcion as Cable  from ferias f
inner join detalle_ferias df on f.idDetalleFeria = df.Id_DetalleFeria
inner join areas a on f.idArea = a.Id_Area
inner join condicion_agua ca on df.idCondicionAgua = ca.Id_CondicionAgua
inner join condicion_luz cl on df.idCondicionLuz = cl.Id_CondicionLuz
inner join condicion_internet ci on df.idCondicionInternet = ci.Id_CondicionInternet
inner join condicion_cable cc on df.idCondicionCable = cc.Id_CondicionCable;
END;

call sp_listar_ferias();
create procedure sp_listar_feria_id(id_feria int)
BEGIN
select f.Titulo, f.Descripcion, df.Costo, df.Lugar, df.Ubicacion,f.Fecha_Inicio, f.Fecha_Fin, f.Hora_Inicio, f.Hora_Fin, a.descripcion as Area, ca.Descripcion as Agua, cl.Descripcion as Luz , ci.Descripcion as Internet, cc.Descripcion as Cable  from ferias f
inner join detalle_ferias df on f.idDetalleFeria = df.Id_DetalleFeria
inner join areas a on f.idArea = a.Id_Area
inner join condicion_agua ca on df.idCondicionAgua = ca.Id_CondicionAgua
inner join condicion_luz cl on df.idCondicionLuz = cl.Id_CondicionLuz
inner join condicion_internet ci on df.idCondicionInternet = ci.Id_CondicionInternet
inner join condicion_cable cc on df.idCondicionCable = cc.Id_CondicionCable
where f.Id_Feria = id_feria;
END;
CALL sp_listar_feria_id(1);


select * from ferias;
CALL sp_agregar_ferias('Feria 1', 'Descripcion 1', '2023-12-04' , '2023-12-06', '07:00', '08:30', 1, 4500, 'Lugar A', 'Ubicación A', 1,1,1 ,2 );
Call sp_agregar_ferias('Feria 2', 'Descripcion 2', '2023-12-04' , '2023-12-06', '07:00', '08:30', 1, 4500, 'Lugar B', 'Ubicación B', 1,1,1 ,2 );




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