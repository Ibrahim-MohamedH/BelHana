import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuApiService } from 'src/app/controllers/menu-api.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent {
  constructor(private api: MenuApiService, private router: Router) {
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }
  menu = new FormGroup({
    name: new FormControl('', [Validators.required]),
    ingredients: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.menu.get('name');
  }
  get ingredients() {
    return this.menu.get('ingredients');
  }
  get price() {
    return this.menu.get('price');
  }
  get image() {
    return this.menu.get('image');
  }
  get type() {
    return this.menu.get('type');
  }

  submit() {
    this.api.post(this.menu.value).subscribe((data: any) => {
      this.router.navigateByUrl('/admin/menu/list');
    });
  }
}
