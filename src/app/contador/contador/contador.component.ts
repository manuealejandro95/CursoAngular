import { Component } from '@angular/core'; 

@Component({
    selector: 'app-contador',
    template:`
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)="operacion(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="operacion(-base)">-{{base}}</button>
    ` 
})

export class ContadorComponent{
    public title : string = 'Proyecto de Angular';
    public numero: number = 10;
    public base : number = 5;
    operacion(valor : number) {
    this.numero += valor;
  }
}