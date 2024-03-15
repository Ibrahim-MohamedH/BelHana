import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefsApiService } from 'src/app/controllers/chefs-api.service';
import { Chefs } from 'src/app/modules/chefs';

@Component({
  selector: 'app-edit-chefs',
  templateUrl: './edit-chefs.component.html',
  styleUrls: ['./edit-chefs.component.css'],
})
export class EditChefsComponent {
  chef = new Chefs();
  message: string = '';
  id!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ChefsApiService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe((data: any) => {
      this.chef = data;
    });
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }
  update() {
    this.api.put(this.id, this.chef).subscribe((data: any) => {
      this.router.navigateByUrl('/admin/chefs/list');
    });
  }
}
