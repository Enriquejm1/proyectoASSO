import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias15',
  templateUrl: './materias15.component.html',
  styleUrls: ['./materias15.component.css']
})
export class Materias15Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
