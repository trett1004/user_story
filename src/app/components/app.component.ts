import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'user_story';
  apiData: any = [];

  constructor(private dataService: DataService) {}

  ///////////////////////   Fetch data from api   ///////////////////////
  ngOnInit() {
    this.accessDataservice();
  }

  private accessDataservice() {
    this.dataService.fetchData().subscribe((data: any) => {
      console.log('data', data);
      this.apiData = data;
    });
  }
}
