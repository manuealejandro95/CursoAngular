import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()

export class DbzServices{

    private _personajeservice : Personaje [] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 12000
        }
      ]
    
      get personajeservice(): Personaje[]{
        return [...this._personajeservice];
      }
      
    constructor(){ }

    agregarpersonaje(agregaperson: Personaje){
      this._personajeservice.push(agregaperson);
    }
}