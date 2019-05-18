import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent,
    NotFoundComponent,
    ProfileComponent,
    ContactComponent,
    AddFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'form', component:HomeComponent},
      {path:'post', component:PostsComponent},
      {path:'profile/:id', component:ProfileComponent},
      {path:'contact', component:ContactComponent},
      {path:'add', component:AddFriendsComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
