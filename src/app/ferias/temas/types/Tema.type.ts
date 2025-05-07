import { Ferias } from '../../core/entities/feria.entity';

export interface ITema {
  Titulo: string;

  Descripcion: string;

  HoraInicio: Date;

  Feria: Ferias | number;
}
