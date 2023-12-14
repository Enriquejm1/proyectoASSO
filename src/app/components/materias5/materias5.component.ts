import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias5',
  templateUrl: './materias5.component.html',
  styleUrls: ['./materias5.component.css']
})
export class Materias5Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
