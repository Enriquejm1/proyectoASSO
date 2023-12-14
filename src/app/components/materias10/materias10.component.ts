import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias10',
  templateUrl: './materias10.component.html',
  styleUrls: ['./materias10.component.css']
})
export class Materias10Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
