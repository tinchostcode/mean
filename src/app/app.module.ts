import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // se importa la libreria de ReactiveFormsModule
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

  //COMPONENTES
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // para trabajar con formularios
    BrowserAnimationsModule, // toastr
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
