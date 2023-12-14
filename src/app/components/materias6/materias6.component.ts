import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias6',
  templateUrl: './materias6.component.html',
  styleUrls: ['./materias6.component.css']
})
export class Materias6Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
