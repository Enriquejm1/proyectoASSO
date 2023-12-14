import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { persona } from 'src/app/interfaces/persaona';

@Component({
  selector: 'app-datos-personal-asesor',
  templateUrl: './datos-personal-asesor.component.html',
  styleUrls: ['./datos-personal-asesor.component.css']
})
export class DatosPersonalAsesorComponent {
 form:FormGroup;

 constructor(private fb:FormBuilder){
  this.form=this.fb.group({
    nombre:['',Validators.required],
    apellidopa:['',Validators.required],
    apellidoma:['',Validators.required],
    telefono:['',Validators.required],
    estado:['',Validators.required],
    genero:['',Validators.required],
    fecha:['',Validators.required],
  })
 }

 agregarDatosPersonales(){
  
  console.log("Datos personales registrados");
  const personaInf:persona={
    nombre:this.form.value.nombre,
    apellidopaterno:this.form.value.apellidopa,
    apellidomaterno:this.form.value.apellidoma,
    genero:this.form.value.genero,
    telefono:this.form.value.telefono,
    estado:this.form.value.estado,
    fecha_nacimiento:this.form.value.fecha
  }
  console.log(personaInf);
 
}


}
