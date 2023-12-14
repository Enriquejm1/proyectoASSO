import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
