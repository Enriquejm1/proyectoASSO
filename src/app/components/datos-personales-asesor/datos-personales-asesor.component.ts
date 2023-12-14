import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { datosPersonales } from 'src/app/interfaces/datosPersonalesAsesor';

@Component({
  selector: 'app-datos-personales-asesor',
  templateUrl: './datos-personales-asesor.component.html',
  styleUrls: ['./datos-personales-asesor.component.css']
})
export class DatosPersonalesAsesorComponent {
  form:FormGroup;

 constructor(private fb:FormBuilder){
  this.form=this.fb.group({
    rfc:['',Validators.required],
    codigo_postal:['',Validators.required],
    colonia:['',Validators.required],
    direccion:['',Validators.required],
  })
 }

 agregarDatosPersonales(){
  
  console.log("Datos personales registrados");
  const personaInf:datosPersonales={
    rfc:this.form.value.rfc,
    codigo_postal:this.form.value.codigo_postal,
    colonia:this.form.value.colonia,
    direccion:this.form.value.direccion
  }
  console.log(personaInf);
 
  }
}
