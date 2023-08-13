import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItaskData } from '../data';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http: HttpClient) { }
  url:string = 'https://jsonplaceholder.typicode.com/todos';
  
  getTaskListData():Observable<ItaskData>{
    return this.http.get<ItaskData>(this.url);
  }
}
