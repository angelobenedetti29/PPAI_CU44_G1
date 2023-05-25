import { NgModule, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
   HomeComponent,
   SidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent// Aquí se exporta el componente
  ]
})
export class ModulesModule { }
