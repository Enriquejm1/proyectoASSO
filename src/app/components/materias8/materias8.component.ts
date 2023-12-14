import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias8',
  templateUrl: './materias8.component.html',
  styleUrls: ['./materias8.component.css']
})
export class Materias8Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
