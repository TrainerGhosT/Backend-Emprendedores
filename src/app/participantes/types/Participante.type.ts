import { Emprendedores } from "../../emprendores/core/entities/emprendedor.entity";
import { Ferias } from '../../ferias/core/entities/feria.entity'
export interface IParticipante { 
    
    Emprendedor: Emprendedores | number; 
    Feria: Ferias | number;
}