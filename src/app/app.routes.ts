import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import path from 'path';
import { Component } from '@angular/core';
import { PessoaslistComponent } from './components/pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailsComponent } from './components/pessoas/pessoasdetails/pessoasdetails.component';
import { NovoUsuarioComponent } from './components/pessoas/novo-usuario/novo-usuario.component';
import { authRouteGuardGuard } from './guard/auth-route-guard.guard';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"login", component:LoginComponent},
    {path:"admin", component:PrincipalComponent,canActivate:[authRouteGuardGuard], children:[
        {path:"pessoas", component:PessoaslistComponent},
        {path:"pessoas/new", component:PessoasdetailsComponent},
        {path:"pessoas/edit/:id", component:PessoasdetailsComponent},
        {path:"pessoas/insert/usuario", component:NovoUsuarioComponent}
    ]}
];
