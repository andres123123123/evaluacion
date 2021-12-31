import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storie } from '../top/home/interface/storie.interface';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {


  private apiUrl :string = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }

  beststories(){
    const url=`${this.apiUrl}/beststories.json`;
     return this.http.get<number[]>(url);
  }
  
  getstories(id:number){
    const url=`${this.apiUrl}/item/${id}.json`;
     return this.http.get<Storie[]>(url);

  }

  
}
