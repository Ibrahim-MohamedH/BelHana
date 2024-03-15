import { Component } from '@angular/core';
import { MenuApiService } from 'src/app/controllers/menu-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  starter: any[] = [];
  breakfast: any[] = [];
  lunch: any[] = [];
  dinner: any[] = [];
  constructor(private api: MenuApiService) {
    this.api.get().subscribe((data: any) => {
      data.forEach((dish: any) => {
        if (dish.type === 'starter') {
          this.starter.push(dish);
        } else if (dish.type === 'breakfast') {
          this.breakfast.push(dish);
        } else if (dish.type === 'lunch') {
          this.lunch.push(dish);
        } else {
          this.dinner.push(dish);
        }
      });
    });
  }
}
