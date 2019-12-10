import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { ExtraPipeComponent } from './components/extra-pipe/extra-pipe.component';
import { AddNumberPipe } from './pipes/add-number.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { C404Component } from './components/c404/c404.component';
import { FilledComponent } from './components/filled/filled.component';
import { OutlinedComponent } from './components/outlined/outlined.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExtraPipeComponent,
    AddNumberPipe,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    C404Component,
    FilledComponent,
    OutlinedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
