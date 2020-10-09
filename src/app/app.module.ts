import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { MdToHTMLPipe } from './md-to-html.pipe';
import { CreateContentComponent } from './create-content/create-content.component';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentDetailComponent,
    MdToHTMLPipe,
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
