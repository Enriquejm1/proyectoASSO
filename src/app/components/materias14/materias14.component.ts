import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias14',
  templateUrl: './materias14.component.html',
  styleUrls: ['./materias14.component.css']
})
export class Materias14Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
