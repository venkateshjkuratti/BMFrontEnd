import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatToolbarModule, MatButtonModule, MatInputModule} from '@angular/material'
import { RouterModule } from '@angular/router'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms'



import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';




const routes = [
  {path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatInputModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
