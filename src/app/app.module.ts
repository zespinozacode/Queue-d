import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule } from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { EventsService } from './services/events.service';
import { EventCreateComponent } from './components/event/event-create/event-create.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { 
    path: 'events', children: [
    { path: '', component: EventIndexComponent},
    { path: 'create', component: EventCreateComponent},
  ]
},
  { path: '**', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    EventIndexComponent,
    EventCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }