import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {

  @Input() texto: string = 'sin valor...';
  datosJson;


  constructor(private clienteHttp : HttpClient) { }

  ngOnInit(): void {
    this.clienteHttp.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) => {
      this.datosJson = data;
    });
  }

}
