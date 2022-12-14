import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iroman';
    edad: number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`; 
    }

    cambiarnombre():void{
        this.nombre = 'Spiderman';
    }

    cambiaredad(): void{
        this.edad = 23;
    }
}