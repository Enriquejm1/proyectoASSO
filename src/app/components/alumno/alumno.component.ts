import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
