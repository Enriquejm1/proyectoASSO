import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias1',
  templateUrl: './materias1.component.html',
  styleUrls: ['./materias1.component.css']
})
export class Materias1Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
