import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'biblioteca',
    loadChildren: () => import('./biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  },
  {
    path: 'autor',
    loadChildren: () => import('./autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  },
  {
    path: 'agregar-libro',
    loadChildren: () => import('./agregar-libro/agregar-libro.module').then( m => m.AgregarLibroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
