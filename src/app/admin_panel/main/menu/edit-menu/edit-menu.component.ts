import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuApiService } from 'src/app/controllers/menu-api.service';
import { Menu } from 'src/app/modules/menu';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
})
export class EditMenuComponent {
  menu = new Menu();
  message: string = '';
  id!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: MenuApiService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe((data: any) => {
      this.menu = data;
    });
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }
  update() {
    this.api.put(this.id, this.menu).subscribe((data: any) => {
      this.router.navigateByUrl('/admin/menu/list');
    });
  }
}
