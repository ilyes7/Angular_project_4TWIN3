import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUserComponentComponent } from './main-user-component/main-user-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MainProductComponentComponent } from './main-product-component/main-product-component.component';
import { MainProviderComponentComponent } from './main-provider-component/main-provider-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { ContentComponent } from './content/content.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
const ROUTES: Routes = [
 {path: 'user', component: MainUserComponentComponent , children:[
   {path:'category/:category', component :ListUserComponent }
 ]},
 {path: 'provider', component: MainProviderComponentComponent},
 {path: 'product', component: MainProductComponentComponent},
 {path: 'signup' , component : AddUserComponent},
 {path: 'signin' , component : LoginComponent},
 {path: '', component: ContentComponent},
 {path: '**', component: NotFoundPageComponentComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES),
  BrowserModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
