import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { StoriesService } from '../../services/stories.service';
import { Storie } from './interface/storie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
  
    mat-card{margin:10px}
     `,
     `a {
      outline: none;
      text-decoration: none;
      padding: 2px 1px 0;
    }
    
    a:link {
      color: gray;
    }
    
    a:visited {
      color: white;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  //array de los id de las mejores artirculos
  stories: number[] = []

  //array de las stories
  storie : any[]=[]

  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.storiesService.beststories().subscribe(storie => {
      storie.map(data => {
        this.storiesService.getstories(data).subscribe(res => {     
          this.storie.push(res)
        })
      })
    })
  }

 //event mat-paginator
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
   //parametros para paginador
  page_size: number = 50;
  page_number: number = 1;



}
