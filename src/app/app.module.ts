import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCreateComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
