import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListpersonajesComponent } from './listpersonajes/listpersonajes.component';
import { AgregarpersonajesComponent } from './agregarpersonajes/agregarpersonajes.component';
import { DbzServices } from './services/dbz.service';



@NgModule({
  declarations: [
    
  
    MainPageComponent,
            ListpersonajesComponent,
            AgregarpersonajesComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzServices
  ]
})
export class DbzModule { }
