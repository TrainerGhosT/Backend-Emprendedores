import { Areas } from 'src/app/areas/entities/area.entity';

export interface IFeria { 

    Titulo: string
    Descripcion:string
    FechaInicio: Date;
    FechaFin: Date;
    HoraInicio: Date;
    HoraFin: Date;
    Area: Areas;
    
}