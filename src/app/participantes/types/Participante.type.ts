import { Emprendedores } from "../../emprendedores/core/entities/emprendedor.entity";
import { Ferias } from '../../ferias/core/entities/feria.entity';
export interface IParticipante { 
    
    Emprendedor: Emprendedores; 
    Feria: Ferias;
}