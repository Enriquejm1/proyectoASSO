import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-alumno',
  templateUrl: './principal-alumno.component.html',
  styleUrls: ['./principal-alumno.component.css']
})
export class PrincipalAlumnoComponent {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
