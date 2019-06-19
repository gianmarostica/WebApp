import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './Cadastro/animal/animal.component';
import { VacinaComponent } from './Cadastro/vacina/vacina.component';

const routes: Routes = [
  {path: 'animais',component:AnimalComponent},
  {path: 'vacinas',component:VacinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
