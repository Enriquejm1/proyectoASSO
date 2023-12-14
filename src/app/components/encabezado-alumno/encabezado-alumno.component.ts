import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encabezado-alumno',
  templateUrl: './encabezado-alumno.component.html',
  styleUrls: ['./encabezado-alumno.component.css']
})
export class EncabezadoAlumnoComponent {
  constructor(private router:Router){}

  logOut(){
  localStorage.removeItem('token');
  this.router.navigate(['/Alumnos'])
  }
}
