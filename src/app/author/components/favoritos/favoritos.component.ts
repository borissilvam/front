import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

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
