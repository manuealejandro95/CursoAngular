import { Component} from '@angular/core';

import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-listpersonajes',
  templateUrl: './listpersonajes.component.html'
})
export class ListpersonajesComponent {

 //@Input() personajeslisthijo: Personaje[]=[];

 get personajeslisthijo(){
  return this.dbzServices.personajeservice;
 }

 constructor(private dbzServices:DbzServices) {}

}
