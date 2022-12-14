import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { Pagina4Component } from './components/pagina4/pagina4.component';


const routes: Routes = [
  {path: 'pagina2', component: Pagina2Component},
  {path: 'pagina3', component: Pagina3Component},
  {path: 'pagina4', component: Pagina4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
