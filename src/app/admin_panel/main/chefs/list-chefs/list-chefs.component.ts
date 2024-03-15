import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChefsApiService } from 'src/app/controllers/chefs-api.service';

@Component({
  selector: 'app-list-chefs',
  templateUrl: './list-chefs.component.html',
  styleUrls: ['./list-chefs.component.css'],
})
export class ListChefsComponent {
  chefs!: any[];

  constructor(private api: ChefsApiService, private router: Router) {
    this.getAllData();
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }

  // get All chefs from APi
  getAllData() {
    this.api.get().subscribe((data: any) => {
      this.chefs = data;
    });
  }
  // remove chef by id
  remove(id: any) {
    this.api.delete(id).subscribe(() => {
      this.getAllData();
    });
  }
}
