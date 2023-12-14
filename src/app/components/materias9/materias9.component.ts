import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias9',
  templateUrl: './materias9.component.html',
  styleUrls: ['./materias9.component.css']
})
export class Materias9Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
