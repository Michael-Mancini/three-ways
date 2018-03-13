import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BloggerComponent } from './blogger/blogger.component';
import { PostsComponent } from './posts/posts.component';
import { PostsOnchangesComponent } from './posts-onchanges/posts-onchanges.component';
import { PostsBehaviorsubjectComponent } from './posts-behaviorsubject/posts-behaviorsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    BloggerComponent,
    PostsComponent,
    PostsOnchangesComponent,
    PostsBehaviorsubjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
