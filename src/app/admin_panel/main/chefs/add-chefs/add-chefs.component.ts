import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChefsApiService } from 'src/app/controllers/chefs-api.service';
import { Chefs } from 'src/app/modules/chefs';

@Component({
  selector: 'app-add-chefs',
  templateUrl: './add-chefs.component.html',
  styleUrls: ['./add-chefs.component.css'],
})
export class AddChefsComponent {
  chef = new Chefs();
  message: string = '';
  constructor(public api: ChefsApiService, private router: Router) {
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }
  submit() {
    this.api.post(this.chef).subscribe((data: any) => {
      this.message = 'Chef has been added successfully';
      setTimeout(() => {
        this.message = '';
      }, 2000);
    });
  }
}
