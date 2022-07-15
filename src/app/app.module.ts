import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import {UserService} from './user.service';
import { BaseComponent } from './base/base.component';
import { PrevButtonComponent } from './prev-button/prev-button.component'
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateComponent,
    BaseComponent,
    PrevButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
