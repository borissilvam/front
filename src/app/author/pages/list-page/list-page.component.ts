import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../interfaces/author.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{

  public authors: string[] = [];

  constructor(private authorService:AuthorService){}


  ngOnInit(): void {
    this.authorService.getAuthors()
    .subscribe(authors => this.authors = authors.authors);
  }

  onTilles(author: string): void {

    
  }

  saveFavorites(author: string){
    this.authorService.saveFavoriteAuthor(author);
  }

  verificarFav(author: string): boolean{
    if( this.authorService.verificarFavorite(author)) return true;

    return false ; 
  }

  deleteFavorite(author: string){
    this.authorService.removeFavoriteAuthor(author);
  }

}
