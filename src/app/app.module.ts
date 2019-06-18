import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

//material imports
import {MatButtonModule, MatCheckboxModule, MatToolbarModule,MatMenuModule,MatSnackBarModule,
  MatIconModule , MatInputModule, MatCardModule ,MatDialogModule} from '@angular/material';

//jwt import 
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ThreadsService } from './threads.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    NewThreadComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,FormsModule ,ReactiveFormsModule ,HttpClientModule,RouterModule.forRoot(routes),
    MatButtonModule,MatCheckboxModule,MatToolbarModule,MatMenuModule,MatIconModule ,MatInputModule ,
    MatCardModule,MatDialogModule,MatSnackBarModule
    ,JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return localStorage.getItem('access_token');
            },
        whitelistedDomains: ['localhost:3000']
      }
    })
    ,

  ],
  entryComponents: [
    NewThreadComponent
  ],

  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
