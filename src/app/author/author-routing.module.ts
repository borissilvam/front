import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaotPageComponent } from './pages/layaot-page/layaot-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AuthorPageComponent } from './pages/author-page/author-page.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FavPagesComponent } from './pages/fav-pages/fav-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LayaotPageComponent,
    children: [
      {path: 'list', component: ListPageComponent},
      {
        path: 'fav', component: FavPagesComponent
      },
      {
        path: ':id', 
        component: AuthorPageComponent,
       
      },

      {
        path: 'title/:id', component: TitlePageComponent
      },

     
    
      {path: '**', redirectTo: 'list'}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
