import { Component } from '@angular/core';
import { Ingrediente } from './ingrediente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  seleccion: { ingrediente: Ingrediente, cantidad: number }[] = [];

  onAgregarIngrediente(ing: Ingrediente) {
    const e = this.seleccion.find(x => x.ingrediente.id === ing.id);
    if (e) {
      e.cantidad++;
    } else {
      this.seleccion.push({ ingrediente: ing, cantidad: 1 });
    }
  }

  onEliminarIngrediente(ing: Ingrediente) {
    const idx = this.seleccion.findIndex(x => x.ingrediente.id === ing.id);
    if (idx >= 0) {
      this.seleccion[idx].cantidad--;
      if (this.seleccion[idx].cantidad <= 0) this.seleccion.splice(idx, 1);
    }
  }
}

