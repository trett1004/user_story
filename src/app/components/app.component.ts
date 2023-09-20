import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Users';
  apiData: any = [];
  showAddUserComponent: boolean = false;
  filter: string = '';

  constructor(private dataService: DataService) {}
  ///////////////////////   Delete User   ///////////////////////
  deleteData(deletionData: any) {
    this.apiData = this.apiData.filter((element: any) => {
      const found = deletionData.find(
        (elForDeletion: any) => element.id === elForDeletion.id
      );
      return found ? false : true;
    });
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
    this.apiData = [...this.apiData, formData.userData];
    // hide the input form
    this.showAddUserComponent = !this.showAddUserComponent;
  }

  ///////////////////////   Sort Table   ///////////////////////
  onClickSortTable() {
    this.apiData = [
      ...this.apiData.sort((a: any, b: any) => a.name.localeCompare(b.name)),
    ];
  }

  ///////////////////////   Filter Table   ///////////////////////
  onSearchTermCreated(name: string) {
    this.filter = name;
  }

  ///////////////////////   Fetch data from api   ///////////////////////
  ngOnInit() {
    this.accessDataservice();
  }

  accessDataservice() {
    this.dataService.fetchData().subscribe((data: any) => {
      console.log('data', data);
      this.apiData = data;
    });
  }
}
