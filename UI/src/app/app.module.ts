import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule, MatIconModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
