import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ViewalltodoComponent } from './viewalltodo/viewalltodo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const myroutes=[
  {path:"",component:AddtodoComponent},
  {path:"Viewalltodo",component:ViewalltodoComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ViewalltodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
