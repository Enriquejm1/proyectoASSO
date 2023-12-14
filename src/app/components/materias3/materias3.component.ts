import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias3',
  templateUrl: './materias3.component.html',
  styleUrls: ['./materias3.component.css']
})
export class Materias3Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
