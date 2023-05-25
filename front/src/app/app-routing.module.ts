import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { ConsultarEncuestaPageComponent } from './modules/consultar-encuesta-page/consultar-encuesta-page/consultar-encuesta-page.component';

const routes: Routes = [{
  path:'', component: HomeComponent,
  children:[
    {path:'home', component: HomeComponent},
    {path:'sideBar', component: SidebarComponent},
    {path:'conusltarEncuesta', component: ConsultarEncuestaPageComponent},

  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
