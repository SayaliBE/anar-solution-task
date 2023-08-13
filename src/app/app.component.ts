import { Component, OnInit } from '@angular/core';
import { TaskListService } from './services/task-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anar-solution-task';
  taskListData: any = [];
  checked: boolean[] = [];
  selectedIndex: any;

  constructor(private taskListService: TaskListService) { }

  ngOnInit(): void {
    this.taskListService.getTaskListData().subscribe(data => this.taskListData = data);
  } 
  
  change(event: { target: { checked: any; }; }, item: any, i: any) {
    if (event.target.checked) {
      this.selectedIndex = i;
      this.checked[i] = true;
    }
    else {
      this.selectedIndex = -1;
      this.checked[i] = false;
    }
  }


}
