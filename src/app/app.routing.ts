import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {C404Component} from './components/c404/c404.component';
import {FilledComponent} from './components/filled/filled.component';
import {OutlinedComponent} from './components/outlined/outlined.component';

const route:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent},
    {path:'filled',component:FilledComponent},
    {path:'outlined',component:OutlinedComponent},
    {path:'**',component:C404Component}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders =RouterModule.forRoot(route);
