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
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { FooterComponent } from './footer/footer.component';
import { WorkComponent } from './work/work.component';
import { SharedServiceService } from '../shared-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationModalComponent } from './navigation/navigation-modal/navigation-modal.component';
import { ProcessComponent } from './process/process.component';


const appRoutes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'pages/work', component: WorkComponent },
  { path: 'pages/process', component: ProcessComponent },
  { path: 'pages/:id', component: PagesComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: '**', component: NoPageFoundComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PostsComponent,
    SinglePostComponent,
    FrontPageComponent,
    NavigationComponent,
    NoPageFoundComponent,
    FooterComponent,
    WorkComponent,
    NavigationModalComponent,
    ProcessComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: false }), NgbModule.forRoot()
  ],
  providers: [
    SharedServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
