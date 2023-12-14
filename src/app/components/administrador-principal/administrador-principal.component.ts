import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador-principal',
  templateUrl: './administrador-principal.component.html',
  styleUrls: ['./administrador-principal.component.css']
})
export class AdministradorPrincipalComponent {
  constructor(private router:Router){}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/MuchasMatematicas'])
  }
}
