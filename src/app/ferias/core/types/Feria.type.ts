import { Areas } from 'src/app/areas/entities/area.entity';
import { Detalles } from '../../detalles/core/entities/detalle.entity';
export interface IFeria { 

    Titulo: string
    Descripcion:string
    FechaInicio: Date;
    FechaFin: Date;
    HoraInicio: Date;
    HoraFin: Date;
    Area: Areas;
    Detalle: Detalles;
}