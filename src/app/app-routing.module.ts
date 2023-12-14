import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
//Componentes
import { MatematicasComponent } from "./components/matematicas/matematicas.component";
import { SucursalesComponent } from "./components/sucursales/sucursales.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { LogiUsuarioAsesorComponent } from "./components/logi-usuario-asesor/logi-usuario-asesor.component";
import { LogiUsuarioComponent } from "./components/logi-usuario/logi-usuario.component";
import { PrincipalAlumnoComponent } from "./components/principal-alumno/principal-alumno.component";
import { MateriasPrincipalComponent } from "./components/materias-principal/materias-principal.component";
import { Materias1Component } from "./components/materias1/materias1.component";
import { Materias2Component } from "./components/materias2/materias2.component";
import { Materias3Component } from "./components/materias3/materias3.component";
import { Materias4Component } from "./components/materias4/materias4.component";
import { Materias5Component } from "./components/materias5/materias5.component";
import { Materias6Component } from "./components/materias6/materias6.component";
import { Materias7Component } from "./components/materias7/materias7.component";
import { Materias8Component } from "./components/materias8/materias8.component";
import { Materias9Component } from "./components/materias9/materias9.component";
import { Materias10Component } from "./components/materias10/materias10.component";
import { Materias11Component } from "./components/materias11/materias11.component";
import { Materias12Component } from "./components/materias12/materias12.component";
import { Materias13Component } from "./components/materias13/materias13.component";
import { Materias14Component } from "./components/materias14/materias14.component";
import { Materias15Component } from "./components/materias15/materias15.component";
import { ExamenFinalPrincipalComponent } from "./components/examen-final-principal/examen-final-principal.component";
import { MaterialExtraPrincipalComponent } from "./components/material-extra-principal/material-extra-principal.component";
import { MiPerfilComponent } from "./components/mi-perfil/mi-perfil.component";
import { MateriaExamenesComponent } from "./components/materia-examenes/materia-examenes.component";
import { AdministradorPrincipalComponent } from "./components/administrador-principal/administrador-principal.component";
import { PersonalComponent } from "./components/personal/personal.component";
import { AlumnoComponent } from "./components/alumno/alumno.component";
import { MateriasComponent } from "./components/materias/materias.component";
import { ReportesComponent } from "./components/reportes/reportes.component";
import { AuthGuard } from './utils/auth.guard';
import { AdministradorDatosPersonalComponent } from './components/administrador-datos-personal/administrador-datos-personal.component';
import { AdministradorDatosUsuarioComponent } from './components/administrador-datos-usuario/administrador-datos-usuario.component';
import { AdministradorDatosPersonalesComponent } from './components/administrador-datos-personales/administrador-datos-personales.component';
import { AlumnoDatosPersonalesComponent } from './components/alumno-datos-personales/alumno-datos-personales.component';
import { AlumnoDatosUsuarioComponent } from './components/alumno-datos-usuario/alumno-datos-usuario.component';
import { AlumnoDatosCursoComponent } from './components/alumno-datos-curso/alumno-datos-curso.component';
import { AdministradorModificarDatosComponent } from './components/administrador-modificar-datos/administrador-modificar-datos.component';
import { AlumnoModificarDatosComponent } from './components/alumno-modificar-datos/alumno-modificar-datos.component';

const routes:Routes = [
{path:'',component:MatematicasComponent},
{path:'MuchasMatematicas',component:MatematicasComponent},
{path:'Sucursales',component:SucursalesComponent},
{path:'QuienesSomos',component:NosotrosComponent},
{path:'Asesores',component:LogiUsuarioAsesorComponent},
{path:'Alumnos',component:LogiUsuarioComponent},
{path:'Administrador-registrar-usuario',component:AdministradorDatosUsuarioComponent},
{path:'Administrador-registrar-persona-asesor',component:AdministradorDatosPersonalComponent},
{path:'Administrador-registrar-datos-asesor',component:AdministradorDatosPersonalesComponent},
{path:'Alumno-registrar-datos-persona',component:AlumnoDatosPersonalesComponent},
{path:'Alumno-registrar-datos-usuario',component:AlumnoDatosUsuarioComponent},
{path:'Alumno-registrar-datos-curso',component:AlumnoDatosCursoComponent},
{path:'Administrador-modificar-datos-asesor/:id',component:AdministradorModificarDatosComponent},
{path:'Alumno-modificar-datos',component:AlumnoModificarDatosComponent},
{path:'Alumnos-inicio',component:PrincipalAlumnoComponent},
{path:'Alumnos-Materias-introduccion',component:MateriasPrincipalComponent},
{path:'Alumnos-Materias-Aritmetica',component:Materias1Component},
{path:'Alumnos-Materias-Algebra',component:Materias2Component},
{path:'Alumnos-Materias-Trigonometria',component:Materias3Component},
{path:'Alumnos-Materias-Geometria',component:Materias4Component},
{path:'Alumnos-Materias-Calculo-Integral',component:Materias5Component},
{path:'Alumnos-Materias-Calculo-Diferencial',component:Materias6Component},
{path:'Alumnos-Materias-Probabilidad',component:Materias7Component},
{path:'Alumnos-Materias-Estadistica',component:Materias8Component},
{path:'Alumnos-Materias-Fisica',component:Materias9Component},
{path:'Alumnos-Materias-Quimica',component:Materias10Component},
{path:'Alumnos-Materias-Ingles',component:Materias11Component},
{path:'Alumnos-Materias-Spanish',component:Materias12Component},
{path:'Alumnos-Materias-Biologia',component:Materias13Component},
{path:'Alumnos-Materias-Historia',component:Materias14Component},
{path:'Alumnos-Materias-Geografia',component:Materias15Component},
{path:'Alumnos-Examen-Final',component:ExamenFinalPrincipalComponent},
{path:'Alumnos-Material-Extra',component:MaterialExtraPrincipalComponent},
{path:'Alumnos-Mi-perfil',component:MiPerfilComponent},
{path:'Alumnos-Examenes-introduccion',component:MateriaExamenesComponent},
{path:'Administrador-Inicio',component:AdministradorPrincipalComponent},
{path:'Administrador-Personal',component:PersonalComponent},
{path:'Administrador-Alumno',component:AlumnoComponent},
{path:'Administrador-Materias',component:MateriasComponent},
{path:'Administrador-Reporte-Alumnos',component:ReportesComponent},
{path:'**',redirectTo:'MuchasMatematicas',pathMatch:'full'},
];


@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)],
    declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
