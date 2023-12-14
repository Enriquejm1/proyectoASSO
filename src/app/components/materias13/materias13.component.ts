import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias13',
  templateUrl: './materias13.component.html',
  styleUrls: ['./materias13.component.css']
})
export class Materias13Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
