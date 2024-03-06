import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  
   
  },
  {
    path: 'author',
    loadChildren: () => import('./author/author.module').then(m => m.AuthorModule),
  
  },
  {
    path: '',
    redirectTo: 'author',
    pathMatch: 'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
