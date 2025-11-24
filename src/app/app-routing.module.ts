import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app/ingredientes',
    loadComponent: () => import('./ingrediente-list/ingrediente-list.component').then(m => m.IngredienteListComponent)
  },
  {
    path: 'app/recetas',
    loadComponent: () => import('./recipe-calculator/recipe-calculator.component').then(m => m.RecipeCalculatorComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
