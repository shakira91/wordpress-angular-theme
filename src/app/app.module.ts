import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { WpApiModule, WpApiLoader, WpApiStaticLoader } from 'wp-api-angular';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PostsComponent } from './posts/posts.component';


const appRoutes: Routes = [
{path: '', component: PagesComponent},
{path: 'posts', component: PostsComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
