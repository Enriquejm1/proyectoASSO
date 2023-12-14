import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { usuario } from 'src/app/interfaces/usuario';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

declare function main():void;

@Component({
  selector: 'app-login-asesor',
  templateUrl: './login-asesor.component.html',
  styleUrls: ['./login-asesor.component.css']
})
export class LoginAsesorComponent implements OnInit{
  correo:string='';
  contra:string='';
  tipo:string='asesor';
  loading:boolean=false;

  //private toastr:ToastrService,
  constructor(private toastr: ToastrService,private _userService:UserService,private router:Router,
    private _errorService:ErrorService){

  }
  ngOnInit(): void {
    main();
  }

  login(){

    //validamos que el usuario ingresa datos
    if(this.correo==''||this.contra==''){
    this.toastr.error('Todos los campos son obligatorios','Error');
    return
    }
  /* console.log(this.correo);
   console.log(this.contra);*/

    //Creamos el body
   const user: usuario={
    correo:this.correo,
    contra:this.contra,
    tipo:this.tipo
    }
//console.log("user: "+user.correo);
this.loading=true;
    this._userService.login(user).subscribe({
      next:(data)=>{
        localStorage.setItem('token',data)
        this.router.navigate(['/Administrador-Inicio'])
       
      },
      error:(e:HttpErrorResponse)=>{
        this._errorService.msjError(e);
        this.loading=false;
      }
    })
  }

}
