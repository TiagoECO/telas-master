import { DetalhamentoComponent } from './componentes/detalhamento/detalhamento.component';
import { FrenteComponent } from './componentes/frente/frente.component';
import { UnidadeComponent } from './componentes/unidade/unidade.component';
import { CiclosComponent } from './componentes/ciclos/ciclos.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "ciclos",
    component: CiclosComponent
  },
  {
    path: "unidade",
    component: UnidadeComponent
  },
  {
    path: "frente",
    component: FrenteComponent
  },
  {
    path: "detalhamento",
    component: DetalhamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
