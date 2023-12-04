import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelistComponent } from './homelist/homelist.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [

  {
    path:'',component:HomelistComponent
  },
  {
    path:'edit-user/:id',component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
