import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup; //tengo que inicializarlo en el constructor
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr:ToastrService) {

    this.productoForm=this.fb.group({
      producto:['',Validators.required],
      categoria:['',Validators.required],
      ubicacion:['',Validators.required],
      precio:['',Validators.required],
    })
   }

  ngOnInit(): void {
   
  }
  
  agregarProducto(){
    //console.log(this.productoForm);

    const PRODUCTO: Producto = { // VER LUEGO

      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
      
    }
    console.log(PRODUCTO);
    this.router.navigate(['/'])
    this.toastr.success('EXITO!')
    //this.toastr.error('EXITO!')
    //this.toastr.info('EXITO!')
  }
}
