import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Menu } from '../modules/menu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuApiService extends ApiFunctionService<Menu> {
  constructor(protected override http: HttpClient) {
    super('http://localhost:3000/menu', http);
  }
}
