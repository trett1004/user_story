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
  showAddUserComponent: boolean = false;

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

  ///////////////////////   Add User   ///////////////////////
  onClickToggleUserForm() {
    // show the input form
    this.showAddUserComponent = !this.showAddUserComponent;
  }

  onEntryAdd(formData: { userData: any }) {
    // add an id according to the length of the user array
    formData.userData.id = this.apiData.length + 1;
    // add the formdata to the user array
    console.log([...this.apiData]);
    this.apiData = [...this.apiData, formData.userData];
    // hide the input form
    this.showAddUserComponent = !this.showAddUserComponent;
  }

  ///////////////////////   Sort Table   ///////////////////////
  onClickSortTable() {
    this.apiData = [
      ...this.apiData.sort((a: any, b: any) => a.name.localeCompare(b.name)),
    ];
    console.log('this.apiData', this.apiData);
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
