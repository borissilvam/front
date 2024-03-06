import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { TitleS } from '../../interfaces/title.interface';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {

  constructor(private authorService: AuthorService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}


  public titles: TitleS[] = [] ;

  ngOnInit(): void {
    

    this.activatedRoute.params
      .pipe (
        switchMap(({id}) =>   
          this.authorService.getTitlesByAuthor(id) 
        
        ),
        
      ).subscribe(

        titles => {
          this.titles = titles
        }
      )
  }

  goBack():void{
    this.router.navigateByUrl('author/list');
  }


}
