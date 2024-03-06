import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable, map } from 'rxjs';
import { Author } from '../interfaces/author.interface';
import { Title } from '@angular/platform-browser';
import { Book, TitleS } from '../interfaces/title.interface';

@Injectable({providedIn: 'root'})
export class AuthorService {
    constructor(private http: HttpClient) { }

    private baseUrl: string = environments.baseURL ;

    private localStorageKey = 'favoriteAuthors';

    getAuthors(): Observable<Author>{

     

        return this.http.get<Author>(`${this.baseUrl}/author`).pipe(
            
        );

    }
    

    getTitlesByAuthor(author: string): Observable<TitleS[]>{


        console.log(author)
        return this.http.get<TitleS[]>(`${this.baseUrl}/author/${author}/title`).pipe(
           
        );
    }

    getBook(tittle: string): Observable<Book[]>{

        return this.http.get<Book[]>(`${this.baseUrl}/title/${tittle}`)

    }


    
   

    
    getFavoriteAuthors(): string [] {
        if(!localStorage.getItem(this.localStorageKey)) return [];

        return JSON.parse (localStorage.getItem(this.localStorageKey)!) || [];
      }

    verificarFavorite(author: string): boolean {
        let favoriteAuthors = this.getFavoriteAuthors();
        if( !favoriteAuthors.includes(author)) return false ; 
        
       return true ;
    }

   saveFavoriteAuthor(author: string): void {
        let favoriteAuthors = this.getFavoriteAuthors();
        if (!favoriteAuthors.includes(author)) {
          favoriteAuthors.push(author);
          localStorage.setItem(this.localStorageKey, JSON.stringify(favoriteAuthors));
        }
      }  
    
    removeFavoriteAuthor(author: string): void {
        let favoriteAuthors = this.getFavoriteAuthors();
        const index = favoriteAuthors.indexOf(author);
        if (index !== -1) {
          favoriteAuthors.splice(index, 1);
          localStorage.setItem(this.localStorageKey, JSON.stringify(favoriteAuthors));
        }
      }

      getTotalFavorites(): number {
        return this.getFavoriteAuthors().length;
      }
    
}