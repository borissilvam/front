import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/title.interface';
import { AuthorService } from '../../services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit{

  constructor(private authorService: AuthorService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

  public books: Book[] = [];

  ngOnInit(): void {
   
    this.activatedRoute.params
    .pipe (
      switchMap(({id}) =>   
        this.authorService.getBook(id) 
      
      ),
      
    ).subscribe(

   

      book => {

        if(!book) return this.router.navigate(['/author/list']);
       
        this.books = book
        console.log(book)
        return;
      }
    )

  }

  goBack():void{
    this.router.navigateByUrl('author/list');
  }




}
