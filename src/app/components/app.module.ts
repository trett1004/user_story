import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, TableComponent, AddUserComponent, SearchUserComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
