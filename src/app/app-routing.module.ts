import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { CreateContentComponent } from './create-content/create-content.component';


const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: 'courses', component: ContentComponent },
  { path: 'courses/:id', component: ContentDetailComponent },
  { path: 'createcourse' , component: CreateContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
