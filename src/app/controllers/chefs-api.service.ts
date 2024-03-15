import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { Chefs } from '../modules/chefs';

@Injectable({
  providedIn: 'root',
})
export class ChefsApiService extends ApiFunctionService<Chefs> {
  constructor(public override http: HttpClient) {
    super('http://localhost:3000/chefs', http);
  }
}
