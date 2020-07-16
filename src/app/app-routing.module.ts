import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit-to-do/edit-to-do.module').then( m => m.EditToDoPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit-to-do/edit-to-do.module').then( m => m.EditToDoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
