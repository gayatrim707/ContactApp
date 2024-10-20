import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreateContactComponent } from './createcontact/createcontact.component';

const routes: Routes = [
  {path:"", component : ContactComponent},
  {path:'contact', component : CreateContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
