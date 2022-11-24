import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Iroman','Hulk', 'Thor'];
  heroeborrado : string = '';

  borrarheroe(){
    this.heroeborrado = this.heroes.shift() || '';
  }
}
