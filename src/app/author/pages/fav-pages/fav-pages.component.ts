import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-fav-pages',
  templateUrl: './fav-pages.component.html',
  styleUrls: ['./fav-pages.component.css']
})
export class FavPagesComponent {

  public favoritos: string[]= [];
  public numberFavoritos?: number;

  constructor(private authorService: AuthorService){

  }
  ngOnInit(): void {
    this.getAuthorsFavoritos();
   this.getAuthorsFavoritosNUmber();
  }

  getAuthorsFavoritosNUmber():void{
    this.numberFavoritos=  this.authorService.getTotalFavorites();
  }

  getAuthorsFavoritos(): void {
    this.favoritos =  this.authorService.getFavoriteAuthors();
  }



}
