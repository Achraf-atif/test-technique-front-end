import { AddSiteComponent } from './components/add-site/add-site.component';
import { AddServeurComponent } from './components/add-serveur/add-serveur.component';
import { ListServeurComponent } from './components/list-serveur/list-serveur.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: ListServeurComponent},
  { path: 'add-Serveur', component: AddServeurComponent},
  { path: 'add-site', component: AddSiteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
