import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OnecontactComponent } from './onecontact/onecontact.component';
import { TodoComponent } from './todo/todo.component';
import { OnetodoComponent } from './onetodo/onetodo.component';
import { LoginComponent } from './login/login.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MaterialModule } from './materials/material/material.module';
import { YoutubeComponent } from './youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    OnecontactComponent,
    TodoComponent,
    OnetodoComponent,
    LoginComponent,
    ShopFormComponent,
    SignupComponent,
    MaterialComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
