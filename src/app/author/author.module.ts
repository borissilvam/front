import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayaotPageComponent } from './pages/layaot-page/layaot-page.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { AuthorPageComponent } from './pages/author-page/author-page.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FavPagesComponent } from './pages/fav-pages/fav-pages.component';


@NgModule({
  declarations: [
    ListPageComponent,
    LayaotPageComponent,
    TitlePageComponent,
    AuthorPageComponent,
    FavoritosComponent,
    FavPagesComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
