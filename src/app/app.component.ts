import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre : string = 'Maximiliano';
  persona = {
    nombre: 'Maria',
    edad: 34
  };
  personas = [];
  title = 'angular';

  eventoClickBotonSaludar($event) {
    this.nombre = 'Listo funca el evento!';
    console.log('Botón presionado');
    this.personas.push({nombre: 'Lucas', edad: 45 });
  }
}
