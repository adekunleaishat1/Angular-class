import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentComponent } from './student/student.component';
import { OnecontactComponent } from './onecontact/onecontact.component';
import { TodoComponent } from './todo/todo.component';
import { OnetodoComponent } from './onetodo/onetodo.component';
import { userGuardGuard } from './guards/user-guard.guard';
import { LoginComponent } from './login/login.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialComponent } from './material/material.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"contact",component: ContactUsComponent },
  {path:"navbar", component: NavbarComponent },
  {path:"footer",component: FooterComponent },
  {path:"student", component: StudentComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"shop", component: ShopFormComponent},
  {path:"material", component: MaterialComponent},
  {path:"you", component:YoutubeComponent},
  {path:"todo", component:TodoComponent, canActivate:[userGuardGuard]},
  {path:"onecontact", children:[
    {path: ":id", component:OnecontactComponent}
  ]},
  {path: "todo/:id", component:OnetodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
