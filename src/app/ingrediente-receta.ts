import { Ingrediente } from "./ingrediente";

export class IngredienteReceta {
    ingrediente: Ingrediente;
    cantidad: number;
    caloriasTotales: number;

    constructor(ingrediente: Ingrediente, cantidad: number, caloriasTotales: number){
        this.ingrediente=ingrediente;
        this.cantidad=cantidad;
        this.caloriasTotales=caloriasTotales;
    }
}
