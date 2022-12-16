import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregarpersonajes',
  templateUrl: './agregarpersonajes.component.html'
})
export class AgregarpersonajesComponent{

 @Input()    nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
  constructor (private dbzhijo: DbzServices){}
 //@Output()  mostrarpersonaje : EventEmitter<Personaje> = new EventEmitter();

  agregar( ){

    if (this.nuevo.nombre.trim().length === 0){return;}
    
    //this.mostrarpersonaje.emit(this.nuevo);
    this.dbzhijo.agregarpersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
