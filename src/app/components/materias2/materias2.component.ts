import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias2',
  templateUrl: './materias2.component.html',
  styleUrls: ['./materias2.component.css']
})
export class Materias2Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
