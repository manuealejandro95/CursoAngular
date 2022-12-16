import { Component} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajesmainpadre : Personaje [] = []

  nuevo : Personaje = {
    nombre: 'maestro roshi',
    poder: 500
  }

  constructor(){
  }
}
