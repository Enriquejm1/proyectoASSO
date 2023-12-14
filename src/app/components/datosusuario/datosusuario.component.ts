import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioAsesor } from 'src/app/interfaces/usuarioAsesor';
declare function main():void;
@Component({
  selector: 'app-datosusuario',
  templateUrl: './datosusuario.component.html',
  styleUrls: ['./datosusuario.component.css']
})
export class DatosusuarioComponent implements OnInit{
  form:FormGroup;
  tipo:string = "asesor";

 constructor(private fb:FormBuilder){
  this.form=this.fb.group({
    correo:['',Validators.required],
    contraseña:['',Validators.required],
    correo_respaldo:['',Validators.required]
  })
 }

 agregarDatosPersonales(){
  
  console.log("Datos personales registrados");
  const personaInf:usuarioAsesor={
    correo:this.form.value.correo,
    contraseña:this.form.value.contraseña,
    correo_respaldo:this.form.value.correo_respaldo,
    tipo:this.tipo
  }
  console.log(personaInf);
 
}
  ngOnInit(): void {
     main();
  }

  ngAfterViewInit(): void {
    main();
  }
}
