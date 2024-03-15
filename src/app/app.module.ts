import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// User Panel
// shared
import { NavbarComponent } from './user_panel/shared/navbar/navbar.component';
import { FooterComponent } from './user_panel/shared/footer/footer.component';
// components
import { HomeComponent } from './user_panel/main/home/home.component';
import { AboutUsComponent } from './user_panel/main/about-us/about-us.component';
import { MenuComponent } from './user_panel/main/menu/menu.component';
import { EventsComponent } from './user_panel/main/events/events.component';
import { ChefsComponent } from './user_panel/main/chefs/chefs.component';
import { BookTableComponent } from './user_panel/main/book-table/book-table.component';
import { ContactUsComponent } from './user_panel/main/contact-us/contact-us.component';
import { Error404Component } from './user_panel/error404/error404.component';
// Admin Panel
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { NavbarComponent as adminNavbar } from './admin_panel/shared/navbar/navbar.component';
import { ListChefsComponent } from './admin_panel/main/chefs/list-chefs/list-chefs.component';
import { AddChefsComponent } from './admin_panel/main/chefs/add-chefs/add-chefs.component';
import { EditChefsComponent } from './admin_panel/main/chefs/edit-chefs/edit-chefs.component';
import { AddMenuComponent } from './admin_panel/main/menu/add-menu/add-menu.component';
import { EditMenuComponent } from './admin_panel/main/menu/edit-menu/edit-menu.component';
import { ListMenuComponent } from './admin_panel/main/menu/list-menu/list-menu.component';
import { RegisterComponent } from './admin_panel/access/register/register.component';
import { LoginComponent } from './admin_panel/access/login/login.component';
// Modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    EventsComponent,
    ChefsComponent,
    BookTableComponent,
    ContactUsComponent,
    adminNavbar,
    DashboardComponent,
    Error404Component,
    ListChefsComponent,
    AddChefsComponent,
    EditChefsComponent,
    AddMenuComponent,
    EditMenuComponent,
    ListMenuComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
