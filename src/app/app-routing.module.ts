import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user_panel/main/home/home.component';
import { AboutUsComponent } from './user_panel/main/about-us/about-us.component';
import { MenuComponent } from './user_panel/main/menu/menu.component';
import { EventsComponent } from './user_panel/main/events/events.component';
import { ChefsComponent } from './user_panel/main/chefs/chefs.component';
import { BookTableComponent } from './user_panel/main/book-table/book-table.component';
import { ContactUsComponent } from './user_panel/main/contact-us/contact-us.component';
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { Error404Component } from './user_panel/error404/error404.component';
import { ListChefsComponent } from './admin_panel/main/chefs/list-chefs/list-chefs.component';
import { AddChefsComponent } from './admin_panel/main/chefs/add-chefs/add-chefs.component';
import { EditChefsComponent } from './admin_panel/main/chefs/edit-chefs/edit-chefs.component';
import { ListMenuComponent } from './admin_panel/main/menu/list-menu/list-menu.component';
import { AddMenuComponent } from './admin_panel/main/menu/add-menu/add-menu.component';
import { EditMenuComponent } from './admin_panel/main/menu/edit-menu/edit-menu.component';
import { LoginComponent } from './admin_panel/access/login/login.component';
import { RegisterComponent } from './admin_panel/access/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Bel Hana', component: HomeComponent },
  { path: 'about', title: 'Bel Hana | About Us', component: AboutUsComponent },
  { path: 'menu', title: 'Bel Hana | Menu', component: MenuComponent },
  { path: 'events', title: 'Bel Hana | Events', component: EventsComponent },
  { path: 'chefs', title: 'Bel Hana | Chefs', component: ChefsComponent },
  {
    path: 'bookTable',
    title: 'Bel Hana | Book A Table',
    component: BookTableComponent,
  },
  {
    path: 'contactUs',
    title: 'Bel Hana | Contact Us',
    component: ContactUsComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        title: 'Bel Hana Admin | dashboard',
        component: DashboardComponent,
      },
      {
        path: 'chefs',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: 'list',
            title: 'Admin | List Chefs',
            component: ListChefsComponent,
          },
          {
            path: 'add',
            title: 'Admin | Add Chef',
            component: AddChefsComponent,
          },
          {
            path: 'edit/:id',
            title: 'Admin | Edit Chef',
            component: EditChefsComponent,
          },
        ],
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: 'list',
            title: 'Admin | List Menu',
            component: ListMenuComponent,
          },
          {
            path: 'add',
            title: 'Admin | Add Menu',
            component: AddMenuComponent,
          },
          {
            path: 'edit/:id',
            title: 'Admin | Edit Menu',
            component: EditMenuComponent,
          },
        ],
      },
      { path: 'login', title: 'Admin | Login', component: LoginComponent },
      {
        path: 'signUp',
        title: 'Admin | Sign Up',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '**',
    title: '404 Page not found',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
