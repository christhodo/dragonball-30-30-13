import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Saiyan } from '@dragonball/api-interfaces';
import { SaiyanEnvironment, SAIYAN_ENVIRONMENT } from '@dragonball/environment';

const BASE_URL = 'https://thirty-by-thirty-app.herokuapp.com/';
const model = 'saiyans';

@Injectable({
  providedIn: 'root',
})
export class SaiyansService {
  constructor(
    private http: HttpClient,
    @Inject(SAIYAN_ENVIRONMENT) private environment: SaiyanEnvironment
  ) {}

  all() {
    return this.http.get<Saiyan[]>(this.getUrl());
  }

  getOne(saiyanId: string) {
    return this.http.get<Saiyan>(this.getUrlById(saiyanId));
  }

  create(saiyans: Saiyan) {
    return this.http.post<Saiyan>(this.getUrl(), saiyans);
  }

  update(saiyans: Saiyan) {
    return this.http.patch<Saiyan>(this.getUrlById(saiyans.id), saiyans);
  }

  delete({ id }: Saiyan) {
    return this.http.delete<Saiyan>(this.getUrlById(id));
  }

  getUrl() {
    return `${BASE_URL}${model}`;
  }

  getUrlById(id: any) {
    return `${this.getUrl()}/${id}`;
  }
}
