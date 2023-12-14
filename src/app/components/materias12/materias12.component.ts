import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias12',
  templateUrl: './materias12.component.html',
  styleUrls: ['./materias12.component.css']
})
export class Materias12Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
