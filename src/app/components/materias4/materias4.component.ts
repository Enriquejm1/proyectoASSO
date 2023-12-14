import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias4',
  templateUrl: './materias4.component.html',
  styleUrls: ['./materias4.component.css']
})
export class Materias4Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
