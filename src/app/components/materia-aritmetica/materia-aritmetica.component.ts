import { Component, TemplateRef, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastService } from './Toast-service';

@Component({
  selector: 'app-materia-aritmetica',
  templateUrl: './materia-aritmetica.component.html',
  styleUrls: ['./materia-aritmetica.component.css']
})
export class MateriaAritmeticaComponent {
  formularioPreguntas: FormGroup;
  respuestas_correctas_1: number = 0;
  respuestas_incorrectas_1: number = 0;
  calificacion_1: number = 0;
  numero_preguntas: number = 0;
  bloquear: boolean = true;

  constructor(private FormBuilder: FormBuilder) {
    this.buildform();
  }

  private buildform() {
    this.formularioPreguntas = this.FormBuilder.group({
      preg1: ['', [Validators.required]],
      preg2: ['', [Validators.required]],
      preg3: ['', [Validators.required]],
      preg4: ['', [Validators.required]],
      preg5: ['', [Validators.required]],
      preg6: ['', [Validators.required]],
      preg7: ['', [Validators.required]],
      preg8: ['', [Validators.required]],
      preg9: ['', [Validators.required]],
      preg10: ['', [Validators.required]],
      preg11: ['', [Validators.required]],
      preg12: ['', [Validators.required]],
      preg13: ['', [Validators.required]],
      preg14: ['', [Validators.required]],
      preg15: ['', [Validators.required]],
      preg16: ['', [Validators.required]],
      preg17: ['', [Validators.required]],
      preg18: ['', [Validators.required]],
      preg19: ['', [Validators.required]],
      preg20: ['', [Validators.required]],
      preg21: ['', [Validators.required]],
      preg22: ['', [Validators.required]],
      preg23: ['', [Validators.required]],
      preg24: ['', [Validators.required]],
      preg25: ['', [Validators.required]]
    });
  }

  limpiarVariables() {
    this.respuestas_correctas_1 = 0;
    this.respuestas_incorrectas_1 = 0;
    this.calificacion_1 = 0;
  }

  primerexamen(event: Event) {
    event.preventDefault();
    if (this.formularioPreguntas.valid) {
      var valores = this.formularioPreguntas;
      var valor = valores.value;
      this.limpiarVariables();
      let respuestas = Object.values(valor);
      this.numero_preguntas = respuestas.length;

      for (let i = 0; i < respuestas.length; i++) {
        console.log(respuestas[i]);
        if (respuestas[i]) {
          switch (i) {
            case 0:
              if (respuestas[i] == '1') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 1:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 2:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 3:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 4:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 5:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 6:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 7:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 8:
              if (respuestas[i] == '1') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 9:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 10:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 11:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 12:
              if (respuestas[i] == '1') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 13:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 14:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;

            case 15:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 16:
              if (respuestas[i] == '1') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 17:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 18:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;

            case 19:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
              case 20:
                if (respuestas[i] == '3') {
                  this.respuestas_correctas_1++;
                  this.calificacion_1++;
                } else {
                  this.respuestas_incorrectas_1++;
                }
                break;
              case 21:
              if (respuestas[i] == '1') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 22:
              if (respuestas[i] == '1') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 23:
              if (respuestas[i] == '2') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
            case 24:
              if (respuestas[i] == '3') {
                this.respuestas_correctas_1++;
                this.calificacion_1++;
              } else {
                this.respuestas_incorrectas_1++;
              }
              break;
          }
        }
      }
      this.calificacionFinal();
    }
  }

  calificacionFinal() {
    this.calificacion_1 = (this.respuestas_correctas_1 / this.numero_preguntas) * 10;
    this.bloquear = false;
  }

  registrarCalificacion() {
    if (this.calificacion_1 > 0) {
      //Guardar calificacion en base de datos
    }
  }

}