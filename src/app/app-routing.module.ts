import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from '../app/users/users.component'
import {CreateComponent} from "../app/create/create.component"
const routes: Routes = [
  {
    path:"",
    component:UsersComponent
  },
  {
    path:"create",
    component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
