import { Component } from '@angular/core';
import { ChefsApiService } from 'src/app/controllers/chefs-api.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css'],
})
export class ChefsComponent {
  chefs!: any[];
  constructor(private api: ChefsApiService) {
    this.api.get().subscribe((data: any) => {
      this.chefs = data;
    });
  }
}
