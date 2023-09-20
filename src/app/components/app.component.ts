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
  ///////////////////////   Delete User   ///////////////////////
  deleteData(deletionData: any) {
    console.log('deletionData', deletionData);
    this.apiData = this.apiData.filter((element: any) => {
      const found = deletionData.find(
        (elForDeletion: any) => element.id === elForDeletion.id
      );
      return found ? false : true;
    });
    console.info({ apiData: this.apiData });
  }

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
