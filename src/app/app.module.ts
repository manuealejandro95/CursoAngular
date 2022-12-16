import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/herores.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DbzModule,
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
