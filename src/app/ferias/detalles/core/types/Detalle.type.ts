import { Agua } from '../../condiciones/entities/agua.entity';
import { Luz } from '../../condiciones/entities/luz.entity';
import { Internet } from '../../condiciones/entities/internet.entity';
import { Cable } from '../../condiciones/entities/cable.entity';
export interface IDetalle { 
    Costo: number;
    Lugar: string;
    Ubicacion: string;
    Agua: Agua |number;
    Luz: Luz | number; 
    Internet: Internet | number;
    Cable: Cable | number;
}