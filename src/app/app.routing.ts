import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {C404Component} from './components/c404/c404.component';
import {FilledComponent} from './components/filled/filled.component';
import {OutlinedComponent} from './components/outlined/outlined.component';
import {MapComponent} from './components/map/map.component';

const route:Routes=[
    {
        path:'',component:HomeComponent,
        data: {
            title: 'Home verificando',
            description:'Home Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path:'home',
        component:HomeComponent,
        data: {
            title: 'Home verificando',
            description:'Home Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path:'login',
        component:LoginComponent,
        data: {
            title: 'Login verificando',
            description:'Login Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent},
    {
        path:'filled',
        component:FilledComponent,
        data: {
            title: 'Filled verificando',
            description:'Filled Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path:'outlined',
        component:OutlinedComponent,
        data: {
            title: 'outlined verificando',
            description:'outlined Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path:'map',component:MapComponent,
        data: {
            title: 'Map verificando',
            description:'map Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {path:'**',component:C404Component}
    
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders =RouterModule.forRoot(route);
