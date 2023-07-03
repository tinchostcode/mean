import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

const routes: Routes = [ //aca defino las rutas
  {path:  '',component: ListaProductosComponent},
  {path:'crear-producto', component: CrearProductoComponent},
  {path:'editar-producto/:id',component: CrearProductoComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
