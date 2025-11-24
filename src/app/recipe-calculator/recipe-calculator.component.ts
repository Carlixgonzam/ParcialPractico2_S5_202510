import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-recipe-calculator',
  templateUrl: './recipe-calculator.component.html',
  styleUrls: ['./recipe-calculator.component.css']
})
export class RecipeCalculatorComponent {
  @Input() seleccion: {ingrediente: Ingrediente, cantidad: number} []=[];
  @Output() eliminar = new EventEmitter<Ingrediente>();

  getCaloriasIngrediente(item: {ingrediente: Ingrediente, cantidad: number}){
    return item.ingrediente.calorias * item.cantidad;
  }
  getCaloriasTotales(){
    return this.seleccion.reduce((s,i) => s + this.getCaloriasIngrediente(i), 0);
  }
  agregarOtro(item: { ingrediente: Ingrediente, cantidad: number }) {
    item.cantidad++;
  }


}
