import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableData: any = [];
  @Input() filter: string = '';
  @Output() dataToDelete = new EventEmitter<{ deletionData: any }>();
  dataForDeletion: any = [];
  areAnyCheckboxesSelected = false;
  currentData: any = []; // Create a separate property for filtered data

  // filter the data
  // ngOnChanges() {
  //   this.tableData = this.tableData.filter((element: any) => {
  //     // console.log('element', element);
  //     console.log('this.filter@tabel.ts', this.filter);
  //     return element.name.toLowerCase().includes(this.filter.toLowerCase());
  //   });
  // }

  ngOnChanges() {
    // When filter or tableData changes, update currentData with filtered data
    this.currentData = this.tableData.filter((element: any) => {
      return element.name.toLowerCase().includes(this.filter.toLowerCase());
    });
    console.log('this.filter', this.filter);
    console.log('this.currentData', this.currentData);
  }

  /////////////// Delete User /////////////////////
  // filter the dataset (array of user/s) that shall be deleted
  onClickDeleteSelected() {
    this.dataForDeletion = this.tableData.filter((row: any) => row.isSelected);
    this.dataToDelete.emit(this.dataForDeletion);
  }

  // enable the delete button if at least one checkbox is selected
  onCheckboxChange() {
    const checkBoxSelected = this.tableData.some((row: any) => row.isSelected);
    this.areAnyCheckboxesSelected = checkBoxSelected;
  }
}
