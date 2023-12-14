import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias11',
  templateUrl: './materias11.component.html',
  styleUrls: ['./materias11.component.css']
})
export class Materias11Component {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
