import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngredienteService } from '../ingrediente.service';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css']
})
export class IngredienteListComponent implements OnInit {
  ingredientes: Ingrediente[]=[];
  @Output() agregarIngrediente = new EventEmitter<Ingrediente>();

  constructor(private svc: IngredienteService) { }

  ngOnInit(): void {
    this.svc.getIngredientes().subscribe(list => this.ingredientes = list);
  }
  agregar(ing: Ingrediente){
    this.agregarIngrediente.emit(ing);


  }

}
