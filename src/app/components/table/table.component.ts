import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableData: any = [];
  @Output() dataToDelete = new EventEmitter<{ deletionData: any }>();
  dataForDeletion: any = [];
  areAnyCheckboxesSelected = false;

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
