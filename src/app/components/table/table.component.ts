import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableData: any = [];
  currentData: any = [];

  ngOnInit() {
    this.currentData = this.tableData;
    console.log('currentData', this.currentData);
  }
}
