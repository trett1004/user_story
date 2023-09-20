import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent {
  @Output() searchTermCreated = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch() {
    this.searchTermCreated.emit(this.searchTerm);
  }
}
