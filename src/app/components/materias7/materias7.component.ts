import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias7',
  templateUrl: './materias7.component.html',
  styleUrls: ['./materias7.component.css']
})
export class Materias7Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
