import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//componentes
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PublicidadOneComponent } from './components/publicidad-one/publicidad-one.component';
import { CursosDisponiblesComponent } from './components/cursos-disponibles/cursos-disponibles.component';
import { FooterComponent } from './components/footer/footer.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { AlumnosAceptadosComponent } from './components/alumnos-aceptados/alumnos-aceptados.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { PreciosComponent } from './components/precios/precios.component';
import { SucursalDisponibleComponent } from './components/sucursal-disponible/sucursal-disponible.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MatematicasComponent } from './components/matematicas/matematicas.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
import { LogiUsuarioComponent } from './components/logi-usuario/logi-usuario.component';
import { LoginAsesorComponent } from './components/login-asesor/login-asesor.component';
import { LogiUsuarioAsesorComponent } from './components/logi-usuario-asesor/logi-usuario-asesor.component';
import { EncabezadoAlumnoComponent } from './components/encabezado-alumno/encabezado-alumno.component';
import { IntroduccionAlumnoComponent } from './components/introduccion-alumno/introduccion-alumno.component';
import { PrincipalAlumnoComponent } from './components/principal-alumno/principal-alumno.component';
import { BarraAlumnoMateriasComponent } from './components/barra-alumno-materias/barra-alumno-materias.component';
import { MateriaAritmeticaComponent } from './components/materia-aritmetica/materia-aritmetica.component';
import { IntroduccionmateriasComponent } from './components/introduccionmaterias/introduccionmaterias.component';
import { MateriasPrincipalComponent } from './components/materias-principal/materias-principal.component';
import {RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MateriaExamenesComponent } from './components/materia-examenes/materia-examenes.component';
import { IntroduccionExamenComponent } from './components/introduccion-examen/introduccion-examen.component';
import { BarraAlumnosExamenesComponent } from './components/barra-alumnos-examenes/barra-alumnos-examenes.component';
import { Materias1Component } from './components/materias1/materias1.component';
import { Materias2Component } from './components/materias2/materias2.component';
import { MateriaAlgebraComponent } from './components/materia-algebra/materia-algebra.component';
import { MateriaTrigonometriaComponent } from './components/materia-trigonometria/materia-trigonometria.component';
import { Materias3Component } from './components/materias3/materias3.component';
import { MateriaGeometriaComponent } from './components/materia-geometria/materia-geometria.component';
import { Materias4Component } from './components/materias4/materias4.component';
import { MateriaCalculo1Component } from './components/materia-calculo1/materia-calculo1.component';
import { Materias5Component } from './components/materias5/materias5.component';
import { MateriaCalculo2Component } from './components/materia-calculo2/materia-calculo2.component';
import { Materias6Component } from './components/materias6/materias6.component';
import { MateriaProbabilidadComponent } from './components/materia-probabilidad/materia-probabilidad.component';
import { Materias7Component } from './components/materias7/materias7.component';
import { MateriaEstadisticaComponent } from './components/materia-estadistica/materia-estadistica.component';
import { Materias8Component } from './components/materias8/materias8.component';
import { MateriaFisicaComponent } from './components/materia-fisica/materia-fisica.component';
import { Materias9Component } from './components/materias9/materias9.component';
import { MateriaQuimicaComponent } from './components/materia-quimica/materia-quimica.component';
import { Materias10Component } from './components/materias10/materias10.component';
import { MateriaInglesComponent } from './components/materia-ingles/materia-ingles.component';
import { Materias11Component } from './components/materias11/materias11.component';
import { MateriaSpanishComponent } from './components/materia-spanish/materia-spanish.component';
import { Materias12Component } from './components/materias12/materias12.component';
import { MateriaBiologiaComponent } from './components/materia-biologia/materia-biologia.component';
import { Materias13Component } from './components/materias13/materias13.component';
import { MateriaHistoriaComponent } from './components/materia-historia/materia-historia.component';
import { Materias14Component } from './components/materias14/materias14.component';
import { MateriaGeografiaComponent } from './components/materia-geografia/materia-geografia.component';
import { Materias15Component } from './components/materias15/materias15.component';
import { ExamenFinalComponent } from './components/examen-final/examen-final.component';
import { ExamenFinalPrincipalComponent } from './components/examen-final-principal/examen-final-principal.component';
import { MaterialExtraComponent } from './components/material-extra/material-extra.component';
import { MaterialExtraPrincipalComponent } from './components/material-extra-principal/material-extra-principal.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { MiPerfilConfiguracionComponent } from './components/mi-perfil-configuracion/mi-perfil-configuracion.component';
import { EncabezadoAdministradorComponent } from './components/encabezado-administrador/encabezado-administrador.component';
import { ContenidoAdministradorComponent } from './components/contenido-administrador/contenido-administrador.component';
import { AdministradorPrincipalComponent } from './components/administrador-principal/administrador-principal.component';
import { ContenidoPersonalComponent } from './components/contenido-personal/contenido-personal.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ContenidoAlumnoComponent } from './components/contenido-alumno/contenido-alumno.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ContenidoMateriaComponent } from './components/contenido-materia/contenido-materia.component';
import { MateriasComponent } from './components/materias/materias.component';
import { ContenidoReportesComponent } from './components/contenido-reportes/contenido-reportes.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { BarraAdministradorReportesComponent } from './components/barra-administrador-reportes/barra-administrador-reportes.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { RegistrarAdminComponent } from './components/registrar-admin/registrar-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { AddEditAlumnosComponent } from './components/add-edit-alumnos/add-edit-alumnos.component';
import { AdministradorDatosPersonalComponent } from './components/administrador-datos-personal/administrador-datos-personal.component';
import { DatosPersonalAsesorComponent } from './components/datos-personal-asesor/datos-personal-asesor.component';
import { AdministradorDatosUsuarioComponent } from './components/administrador-datos-usuario/administrador-datos-usuario.component';
import { AdministradorDatosPersonalesComponent } from './components/administrador-datos-personales/administrador-datos-personales.component';
import { AdministradorDatosAlumnoComponent } from './components/administrador-datos-alumno/administrador-datos-alumno.component';
import { AdministradorDatosPersonalesclearComponent } from './components/administrador-datos-personalesclear/administrador-datos-personalesclear.component';
import { DatosusuarioComponent } from './components/datosusuario/datosusuario.component';
import { DatosPersonalesAsesorComponent } from './components/datos-personales-asesor/datos-personales-asesor.component';
import { AlumnoDatosPersonalesComponent } from './components/alumno-datos-personales/alumno-datos-personales.component';
import { DatosPersonalesAlumnoComponent } from './components/datos-personales-alumno/datos-personales-alumno.component';
import { AlumnoDatosUsuarioComponent } from './components/alumno-datos-usuario/alumno-datos-usuario.component';
import { DatosUsuarioAlumnoComponent } from './components/datos-usuario-alumno/datos-usuario-alumno.component';
import { AlumnoDatosCursoComponent } from './components/alumno-datos-curso/alumno-datos-curso.component';
import { DatosCursoAlumnoComponent } from './components/datos-curso-alumno/datos-curso-alumno.component';
import { AdministradorModificarDatosComponent } from './components/administrador-modificar-datos/administrador-modificar-datos.component';
import { DatosModificarAsesorComponent } from './components/datos-modificar-asesor/datos-modificar-asesor.component';
import { AlumnoModificarDatosComponent } from './components/alumno-modificar-datos/alumno-modificar-datos.component';
import { DatosModificarAlumnoComponent } from './components/datos-modificar-alumno/datos-modificar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PublicidadOneComponent,
    CursosDisponiblesComponent,
    FooterComponent,
    OpinionesComponent,
    AlumnosAceptadosComponent,
    PromocionesComponent,
    PreciosComponent,
    SucursalDisponibleComponent,
    SobreNosotrosComponent,
    SucursalesComponent,
    NosotrosComponent,
    MatematicasComponent,
    LoginAlumnoComponent,
    LogiUsuarioComponent,
    LoginAsesorComponent,
    LogiUsuarioAsesorComponent,
    EncabezadoAlumnoComponent,
    IntroduccionAlumnoComponent,
    PrincipalAlumnoComponent,
    BarraAlumnoMateriasComponent,
    MateriaAritmeticaComponent,
    IntroduccionmateriasComponent,
    MateriasPrincipalComponent,
    MateriaExamenesComponent,
    IntroduccionExamenComponent,
    BarraAlumnosExamenesComponent,
    Materias1Component,
    Materias2Component,
    MateriaAlgebraComponent,
    MateriaTrigonometriaComponent,
    Materias3Component,
    MateriaGeometriaComponent,
    Materias4Component,
    MateriaCalculo1Component,
    Materias5Component,
    MateriaCalculo2Component,
    Materias6Component,
    MateriaProbabilidadComponent,
    Materias7Component,
    MateriaEstadisticaComponent,
    Materias8Component,
    MateriaFisicaComponent,
    Materias9Component,
    MateriaQuimicaComponent,
    Materias10Component,
    MateriaInglesComponent,
    Materias11Component,
    MateriaSpanishComponent,
    Materias12Component,
    MateriaBiologiaComponent,
    Materias13Component,
    MateriaHistoriaComponent,
    Materias14Component,
    MateriaGeografiaComponent,
    Materias15Component,
    ExamenFinalComponent,
    ExamenFinalPrincipalComponent,
    MaterialExtraComponent,
    MaterialExtraPrincipalComponent,
    MiPerfilComponent,
    MiPerfilConfiguracionComponent,
    EncabezadoAdministradorComponent,
    ContenidoAdministradorComponent,
    AdministradorPrincipalComponent,
    ContenidoPersonalComponent,
    PersonalComponent,
    ContenidoAlumnoComponent,
    AlumnoComponent,
    ContenidoMateriaComponent,
    MateriasComponent,
    ContenidoReportesComponent,
    ReportesComponent,
    BarraAdministradorReportesComponent,
    LoginAdminComponent,
    RegistrarAdminComponent,
    DashboardComponent,
    SpinnerComponent,
    ListUsuariosComponent,
    ListAlumnosComponent,
    AddEditAlumnosComponent,
    AdministradorDatosPersonalComponent,
    DatosPersonalAsesorComponent,
    AdministradorDatosUsuarioComponent,
    AdministradorDatosPersonalesComponent,
    AdministradorDatosAlumnoComponent,
    AdministradorDatosPersonalesclearComponent,
    DatosusuarioComponent,
    DatosPersonalesAsesorComponent,
    AlumnoDatosPersonalesComponent,
    DatosPersonalesAlumnoComponent,
    AlumnoDatosUsuarioComponent,
    DatosUsuarioAlumnoComponent,
    AlumnoDatosCursoComponent,
    DatosCursoAlumnoComponent,
    AdministradorModificarDatosComponent,
    DatosModificarAsesorComponent,
    AlumnoModificarDatosComponent,
    DatosModificarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        timeOut: 4000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
      }),   
  ],
  exports:[
   
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AddTokenInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
