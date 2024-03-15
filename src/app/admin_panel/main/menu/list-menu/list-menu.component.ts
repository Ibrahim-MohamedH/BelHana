import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuApiService } from 'src/app/controllers/menu-api.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css'],
})
export class ListMenuComponent {
  menu!: any[];
  constructor(private api: MenuApiService, private router: Router) {
    this.getAllData();
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }
  getAllData() {
    this.api.get().subscribe((data: any) => {
      this.menu = data;
    });
  }
  remove(id: any) {
    this.api.delete(id).subscribe((data: any) => {
      this.getAllData();
    });
  }
}
